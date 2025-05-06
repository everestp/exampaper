
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import AppRoutes from "./AppRoutes";
import AdminPanel from "./pages/AdminPanel";

// Create a new QueryClient instance OUTSIDE of the component
const queryClient = new QueryClient();

// Make App a function component rather than an arrow function constant
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppRoutes />
        </TooltipProvider>
    
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
