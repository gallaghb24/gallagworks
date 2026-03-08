import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dimensions } from "@/data/questions";
import { useDiagnostic } from "@/contexts/DiagnosticContext";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DiagnosticAssess = () => {
  const [currentDimension, setCurrentDimension] = useState(0);
  const { answers, updateAnswer } = useDiagnostic();
  const navigate = useNavigate();

  const dimension = dimensions[currentDimension];
  const totalDimensions = dimensions.length;
  const progressPercent = ((currentDimension + 1) / totalDimensions) * 100;

  const allAnswered = dimension.questions.every((q) => answers[q.id] !== undefined);
  const isLastDimension = currentDimension === totalDimensions - 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentDimension]);

  const handleNext = () => {
    if (isLastDimension) {
      navigate("/diagnostic/capture");
    } else {
      setCurrentDimension((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentDimension > 0) {
      setCurrentDimension((prev) => prev - 1);
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
          <div className="flex items-baseline gap-3 mb-3">
            <span className="font-mono text-sm text-primary font-bold">
              [{String(currentDimension + 1).padStart(2, "0")}/{String(totalDimensions).padStart(2, "0")}]
            </span>
            <h2 className="font-sans font-bold text-foreground text-lg break-words">
              {dimension.name}
            </h2>
          </div>
          {/* Progress bar */}
          <div className="w-full h-1 bg-border">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-12 py-8 md:py-12 pb-28 md:pb-12">
        <div className="max-w-3xl mx-auto">
          {/* Dimension intro */}
          <div className="mb-10">
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
              [{dimension.tagline}]
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              {dimension.intro}
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-6">
            {dimension.questions.map((question, qIdx) => (
              <div key={question.id} className="border border-border p-4 sm:p-6">
                <p className="font-bold text-foreground mb-4">
                  <span className="text-primary font-mono text-sm mr-2">
                    {String(qIdx + 1).padStart(2, "0")}.
                  </span>
                  {question.text}
                </p>
                <div className="space-y-2">
                  {question.options.map((option) => {
                    const isSelected = answers[question.id] === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => updateAnswer(question.id, option.value)}
                        className={cn(
                          "w-full text-left p-4 min-h-14 border transition-all duration-150",
                          "hover:border-primary",
                          isSelected
                            ? "border-l-[3px] border-l-primary bg-primary/5 border-t-border border-r-border border-b-border"
                            : "border-border"
                        )}
                      >
                        <span className="text-foreground font-normal text-sm leading-relaxed">
                          {option.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Sticky navigation footer on mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 z-40 md:relative md:border-t-0 md:p-0">
        <div className="container mx-auto px-0 md:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto flex gap-3 md:pb-12 md:pt-10">
            {currentDimension > 0 && (
              <Button
                variant="outline"
                onClick={handleBack}
                className="rounded-none border-border text-foreground flex-1 md:flex-none"
              >
                Back
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={!allAnswered}
              className="rounded-none bg-primary text-primary-foreground flex-1 md:flex-none md:ml-auto"
            >
              {isLastDimension && allAnswered ? "See Your Results" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticAssess;
