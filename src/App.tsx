
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";
import AppRoutes from "./AppRoutes";
import AdminPanel from "./pages/AdminPanel";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

import { ToastContainer } from 'react-toastify';


 
// Create a new QueryClient instance OUTSIDE of the component
const queryClient = new QueryClient();

// Make App a function component rather than an arrow function constant
function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
  authService.getCurrentUser()
  .then((userData :{email:string ,password:string})=>{
    if(userData){
      dispatch(login({userData}))
    }
    else{
      dispatch(logout())
    }
  })
  },[])
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer/>
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
