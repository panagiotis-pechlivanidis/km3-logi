
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Privat from "./pages/Privat";
import Foretag from "./pages/Foretag";
import Moblerad from "./pages/Moblerad";
import NotFound from "./pages/NotFound";
import Omoblerad from "./pages/Omoblerad";
import Langtids from "./pages/Langtids";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/private" element={<Privat />} />
          <Route path="/business" element={<Foretag />} />
          <Route path="/furnished" element={<Moblerad />} />
          <Route path="/unfurnished" element={<Omoblerad />} />
          <Route path="/rental-terms" element={<Langtids />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
