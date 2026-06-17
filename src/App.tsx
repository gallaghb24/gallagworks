import { useEffect, lazy, Suspense } from "react";
import { trackEvent } from "@/lib/analytics";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import StructuredData from "@/components/StructuredData";
import ScrollProgress from "@/components/ScrollProgress";
import { DiagnosticProvider } from "@/contexts/DiagnosticContext";
import { Loader2 } from "lucide-react";
import Index from "./pages/Index";

// Lazy-loaded routes
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Insights = lazy(() => import("./pages/Insights"));
const InsightManifesto = lazy(() => import("./pages/InsightManifesto"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Cookies = lazy(() => import("./pages/Cookies"));
const Glossary = lazy(() => import("./pages/Glossary"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Diagnostic = lazy(() => import("./pages/Diagnostic"));
const DiagnosticAssess = lazy(() => import("./pages/DiagnosticAssess"));
const DiagnosticCapture = lazy(() => import("./pages/DiagnosticCapture"));
const DiagnosticResults = lazy(() => import("./pages/DiagnosticResults"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminLayout = lazy(() => import("./components/admin/AdminLayout"));
const AdminOverview = lazy(() => import("./pages/admin/AdminOverview"));
const AdminLeads = lazy(() => import("./pages/admin/AdminLeads"));
const AdminAssessments = lazy(() => import("./pages/admin/AdminAssessments"));
const ConsultationConfirmation = lazy(() => import("./pages/ConsultationConfirmation"));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <Loader2 className="h-6 w-6 animate-spin text-primary" />
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    trackEvent("page_view", { path: pathname });
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="animate-fade-in">{children}</div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <StructuredData />
        <BrowserRouter>
          <ScrollProgress />
          <ScrollToTop />
          <DiagnosticProvider>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
                <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/insights" element={<PageWrapper><Insights /></PageWrapper>} />
                <Route path="/insights/:slug" element={<PageWrapper><InsightManifesto /></PageWrapper>} />
                <Route path="/diagnostic" element={<PageWrapper><Diagnostic /></PageWrapper>} />
                <Route path="/diagnostic/assess" element={<PageWrapper><DiagnosticAssess /></PageWrapper>} />
                <Route path="/diagnostic/capture" element={<PageWrapper><DiagnosticCapture /></PageWrapper>} />
                <Route path="/diagnostic/results" element={<PageWrapper><DiagnosticResults /></PageWrapper>} />
                <Route path="/diagnostic/results/:assessmentId" element={<PageWrapper><DiagnosticResults /></PageWrapper>} />
                <Route path="/consultation/confirmed" element={<PageWrapper><ConsultationConfirmation /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
                <Route path="/cookies" element={<PageWrapper><Cookies /></PageWrapper>} />
                <Route path="/glossary" element={<PageWrapper><Glossary /></PageWrapper>} />
                <Route path="/admin/login" element={<PageWrapper><AdminLogin /></PageWrapper>} />
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<AdminOverview />} />
                  <Route path="leads" element={<AdminLeads />} />
                  <Route path="assessments" element={<AdminAssessments />} />
                </Route>
                <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
              </Routes>
            </Suspense>
          </DiagnosticProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
