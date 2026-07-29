import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Registration from "@/pages/Registration";
import About from "@/pages/About";
import Mission from "@/pages/Mission";
import Labs from "@/pages/Labs";
import Chapters from "@/pages/Chapters";
import ChapterDetail from "@/pages/ChapterDetail";
import Gallery from "@/pages/Gallery";
import SessionDetail from "@/pages/SessionDetail";
import ExecutiveCouncil from "@/pages/ExecutiveCouncil";
import Contact from "@/pages/Contact";
import Apply from "@/pages/Apply";
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/chapters/:slug" element={<ChapterDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:slug" element={<SessionDetail />} />
        <Route path="/executive-council" element={<ExecutiveCouncil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App