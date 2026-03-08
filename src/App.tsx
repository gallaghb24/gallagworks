import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import StructuredData from "@/components/StructuredData";
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

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <StructuredData />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              {/* Case studies consolidated into /insights */}
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightManifesto />} />
              <Route path="/diagnostic" element={<Diagnostic />} />
              <Route path="/diagnostic/assess" element={<DiagnosticAssess />} />
              <Route path="/diagnostic/capture" element={<DiagnosticCapture />} />
              <Route path="/diagnostic/results" element={<DiagnosticResults />} />
              <Route path="/diagnostic/results/:assessmentId" element={<DiagnosticResults />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/glossary" element={<Glossary />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
