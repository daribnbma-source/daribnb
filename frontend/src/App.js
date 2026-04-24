import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Landing from "./pages/Landing";
import Mentions from "./pages/Mentions";
import Privacy from "./pages/Privacy";
import CGV from "./pages/CGV";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import { Toaster } from "sonner";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/mentions-legales" element={<Mentions />} />
            <Route path="/confidentialite" element={<Privacy />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="top-right" richColors />
      </div>
    </HelmetProvider>
  );
}

export default App;
