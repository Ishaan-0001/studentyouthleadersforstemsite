import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
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

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
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
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App