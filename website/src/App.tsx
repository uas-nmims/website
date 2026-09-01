import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Route-level code splitting: each page (and everything it pulls in - e.g.
// three.js only used on the home page's hero) ships as its own chunk and is
// only downloaded when that route is actually visited, instead of every
// visitor paying for the whole site's JS on page one.
const Index = lazy(() => import("./pages/Index"));
const ProjectsPage = lazy(() => import("./pages/OurProjects"));
const Contactus = lazy(() => import("./pages/contactus"));
const Sponsorus = lazy(() => import("./pages/OurSponsors"));
const AboutUltra = lazy(() => import("./pages/Aboutus1"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-screen w-full bg-black" aria-hidden="true" />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/sponsors" element={<Sponsorus />} />
            <Route path="/Aboutus" element={<AboutUltra />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
