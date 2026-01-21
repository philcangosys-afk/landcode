import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Exploration from "./pages/Exploration";
import Geology from "./pages/Geology";
import Processing from "./pages/Processing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Index />
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <About />
                </Layout>
              }
            />
            <Route
              path="/services"
              element={
                <Layout>
                  <Services />
                </Layout>
              }
            />
            <Route
              path="/projects"
              element={
                <Layout>
                  <Projects />
                </Layout>
              }
            />
            <Route
              path="/exploration"
              element={
                <Layout>
                  <Exploration />
                </Layout>
              }
            />
            <Route
              path="/geology"
              element={
                <Layout>
                  <Geology />
                </Layout>
              }
            />
            <Route
              path="/processing"
              element={
                <Layout>
                  <Processing />
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout>
                  <Contact />
                </Layout>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route
              path="*"
              element={
                <Layout>
                  <NotFound />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LanguageProvider>
);

export default App;
