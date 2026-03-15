import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { dimensions } from "@/data/questions";
import { useDiagnostic } from "@/contexts/DiagnosticContext";
import SEOHead from "@/components/SEOHead";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { ArrowLeft } from "lucide-react";

interface FlatQuestion {
  dimensionIndex: number;
  dimensionId: string;
  dimensionName: string;
  dimensionTagline: string;
  dimensionIntro: string;
  questionIndex: number;
  question: { id: string; text: string; options: { value: number; label: string }[] };
  isFirstInDimension: boolean;
  isLastInDimension: boolean;
}

const DiagnosticAssess = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAdvancing, setIsAdvancing] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const { answers, updateAnswer } = useDiagnostic();
  const navigate = useNavigate();
  const completedRef = useRef(false);
  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const flatQuestions = useMemo<FlatQuestion[]>(() => {
    const result: FlatQuestion[] = [];
    dimensions.forEach((dim, dIdx) => {
      dim.questions.forEach((q, qIdx) => {
        result.push({
          dimensionIndex: dIdx,
          dimensionId: dim.id,
          dimensionName: dim.name,
          dimensionTagline: dim.tagline,
          dimensionIntro: dim.intro,
          questionIndex: qIdx,
          question: q,
          isFirstInDimension: qIdx === 0,
          isLastInDimension: qIdx === dim.questions.length - 1,
        });
      });
    });
    return result;
  }, []);

  const totalQuestions = flatQuestions.length;
  const current = flatQuestions[currentIndex];
  const progressPercent = ((currentIndex + 1) / totalQuestions) * 100;
  const isLast = currentIndex === totalQuestions - 1;

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, []);

  // Abandonment tracking
  const handleBeforeUnload = useCallback(() => {
    if (completedRef.current) return;
    trackEvent("assessment_abandoned", {
      current_question_index: currentIndex,
      current_dimension: flatQuestions[currentIndex]?.dimensionId,
    });
  }, [currentIndex, flatQuestions]);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [handleBeforeUnload]);

  const handleSelect = (questionId: string, value: number) => {
    if (isAdvancing) return;
    updateAnswer(questionId, value);
    setIsAdvancing(true);

    // Track dimension completion if last question in dimension
    const q = flatQuestions[currentIndex];
    if (q.isLastInDimension) {
      const dim = dimensions[q.dimensionIndex];
      const dimScore = dim.questions.reduce((sum, dq) => {
        if (dq.id === questionId) return sum + value;
        return sum + (answers[dq.id] ?? 0);
      }, 0);
      trackEvent("dimension_completed", {
        dimension_name: dim.id,
        dimension_score: dimScore,
        dimension_index: q.dimensionIndex,
      });
    }

    advanceTimerRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setDirection("forward");
      // Wait for fade-out, then change index
      setTimeout(() => {
        if (isLast) {
          completedRef.current = true;
          window.removeEventListener("beforeunload", handleBeforeUnload);
          navigate("/diagnostic/capture");
        } else {
          setCurrentIndex((prev) => prev + 1);
        }
        setIsAdvancing(false);
        setIsTransitioning(false);
      }, 250);
    }, 350);
  };

  const handleBack = () => {
    if (advanceTimerRef.current) {
      clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
      setIsAdvancing(false);
    }
    if (currentIndex > 0) {
      setDirection("back");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setIsTransitioning(false);
      }, 250);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Assessment in Progress"
        description="How ready is your organisation for AI? A free 5-minute diagnostic across six critical dimensions. Built by practitioners, not consultants."
        path="/diagnostic/assess"
      />

      {/* Fixed progress header */}
      <div className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center gap-3 mb-3">
            {currentIndex > 0 && (
              <button
                onClick={handleBack}
                className="text-muted-foreground hover:text-foreground transition-colors p-1 -ml-1"
                aria-label="Previous question"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <span className="font-mono text-sm text-primary font-bold">
              [{String(currentIndex + 1).padStart(2, "0")}/{String(totalQuestions).padStart(2, "0")}]
            </span>
            <h2 className="font-sans font-bold text-foreground text-lg break-words">
              {current.dimensionName}
            </h2>
          </div>
          {/* Progress bar */}
          <div
            className="w-full h-1 bg-border"
            role="progressbar"
            aria-label={`Question ${currentIndex + 1} of ${totalQuestions}`}
            aria-valuenow={currentIndex + 1}
            aria-valuemin={1}
            aria-valuemax={totalQuestions}
          >
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-12 py-8 md:py-12">
        <div
          className={cn(
            "max-w-3xl mx-auto transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isTransitioning
              ? cn("opacity-0", direction === "forward" ? "translate-x-6" : "-translate-x-6")
              : "opacity-100 translate-x-0"
          )}
        >
          {/* Dimension intro - only on first question of each dimension */}
          {current.isFirstInDimension && (
            <div className="mb-8">
              <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
                [{current.dimensionTagline}]
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                {current.dimensionIntro}
              </p>
            </div>
          )}

          {/* Single question */}
          <div
            key={current.question.id}
            className="border border-white/[0.08] rounded-xl p-4 sm:p-6"
          >
            <p className="font-bold text-foreground mb-5">
              <span className="text-primary font-mono text-sm mr-2">
                {String(current.questionIndex + 1).padStart(2, "0")}.
              </span>
              {current.question.text}
            </p>
            <fieldset className="space-y-2">
              <legend className="sr-only">{current.question.text}</legend>
              {current.question.options.map((option) => {
                const isSelected = answers[current.question.id] === option.value;
                const inputId = `${current.question.id}-${option.value}`;
                return (
                  <label
                    key={option.value}
                    htmlFor={inputId}
                    className={cn(
                      "w-full text-left p-4 min-h-14 border rounded-lg transition-all duration-150 block cursor-pointer",
                      "hover:border-primary",
                      isAdvancing && isSelected
                        ? "border-l-[3px] border-l-primary bg-primary/10 border-t-primary/30 border-r-primary/30 border-b-primary/30 scale-[1.01]"
                        : isSelected
                          ? "border-l-[3px] border-l-primary bg-primary/5 border-t-border border-r-border border-b-border"
                          : "border-border",
                      isAdvancing && !isSelected && "opacity-50"
                    )}
                  >
                    <input
                      type="radio"
                      id={inputId}
                      name={current.question.id}
                      value={option.value}
                      checked={isSelected}
                      onChange={() => handleSelect(current.question.id, option.value)}
                      disabled={isAdvancing}
                      className="sr-only"
                    />
                    <span className="text-foreground font-normal text-sm leading-relaxed">
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </fieldset>
          </div>
        </div>
      </main>
      <CTABand
        headline={<>Stop the leakage. <span className="text-primary whitespace-nowrap">Start the Transformation.</span></>}
        subcopy="Start with the free AI Readiness Diagnostic or request a consultation to discuss your operational challenges."
      />
      <Footer hideCTA />
    </div>
  );
};

export default DiagnosticAssess;
