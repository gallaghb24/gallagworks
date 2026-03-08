import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import StructuredData from "@/components/StructuredData";
import { DiagnosticProvider } from "@/contexts/DiagnosticContext";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Insights from "./pages/Insights";
import InsightManifesto from "./pages/InsightManifesto";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Glossary from "./pages/Glossary";
import NotFound from "./pages/NotFound";
import Diagnostic from "./pages/Diagnostic";
import DiagnosticAssess from "./pages/DiagnosticAssess";
import DiagnosticCapture from "./pages/DiagnosticCapture";
import DiagnosticResults from "./pages/DiagnosticResults";
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./components/admin/AdminLayout";
import AdminOverview from "./pages/admin/AdminOverview";
import AdminLeads from "./pages/admin/AdminLeads";
import AdminAssessments from "./pages/admin/AdminAssessments";

const queryClient = new QueryClient();

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
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <StructuredData />
          <BrowserRouter>
            <ScrollToTop />
            <DiagnosticProvider>
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
            </DiagnosticProvider>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
