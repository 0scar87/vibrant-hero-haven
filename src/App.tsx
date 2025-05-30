
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Company from "./pages/Company";
import NotFound from "./pages/NotFound";
import Research from "./pages/Research";
import ResearchTopic from "./pages/ResearchTopic";
import ArticleDetail from "./pages/ArticleDetail";
import Sankara from "./pages/Sankara";
import Colossus from "./pages/Colossus";
import Careers from "./pages/Careers";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import News from "./pages/News";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthProvider } from "./components/AuthProvider";
import { useAuth } from "./components/AuthProvider";

const queryClient = new QueryClient();

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/company" element={<Company />} />
      <Route path="/research" element={<Research />} />
      <Route path="/research/:topicId" element={<ResearchTopic />} />
      <Route path="/article/:articleId" element={<ArticleDetail />} />
      <Route path="/sankara" element={<Sankara />} />
      <Route path="/colossus" element={<Colossus />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/news" element={<News />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/profile" element={
        <RequireAuth>
          <Profile />
        </RequireAuth>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <AppRoutes />
          </TooltipProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
