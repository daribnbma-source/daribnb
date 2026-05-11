import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Landing from "./pages/Landing";
import Mentions from "./pages/Mentions";
import Privacy from "./pages/Privacy";
import CGV from "./pages/CGV";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ConciergerieAirbnbTanger from "./pages/ConciergerieAirbnbTanger";
import GestionLocativeTanger from "./pages/GestionLocativeTanger";
import GestionLocativeMRETanger from "./pages/GestionLocativeMRETanger";
import OptimiserRevenusAirbnb from "./pages/OptimiserRevenusAirbnb";
import LoyerFixeAirbnbTanger from "./pages/LoyerFixeAirbnbTanger";
import MultiPlateformesAirbnbBooking from "./pages/MultiPlateformesAirbnbBooking";
import MarwanAfassi from "./pages/MarwanAfassi";
import LexiqueAirbnbTanger from "./pages/LexiqueAirbnbTanger";
import Temoignages from "./pages/Temoignages";
import FAQPage from "./pages/FAQPage";
import AdminLogin from "./pages/AdminLogin";
import AuthCallback from "./pages/AuthCallback";
import AdminDashboard from "./pages/AdminDashboard";
import AdminBlog from "./pages/AdminBlog";
import AdminBlogEditor from "./pages/AdminBlogEditor";
import AdminContacts from "./pages/AdminContacts";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./lib/auth";
import { Toaster } from "sonner";

function AppRouter() {
  const location = useLocation();
  // Detect OAuth callback via URL fragment — must run synchronously BEFORE other routes
  if (location.hash?.includes("session_id=")) {
    return <AuthCallback />;
  }
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mentions-legales" element={<Mentions />} />
        <Route path="/confidentialite" element={<Privacy />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/conciergerie-airbnb-tanger" element={<ConciergerieAirbnbTanger />} />
        <Route path="/gestion-locative-tanger" element={<GestionLocativeTanger />} />
        <Route path="/gestion-locative-mre-tanger" element={<GestionLocativeMRETanger />} />
        <Route path="/optimiser-revenus-airbnb" element={<OptimiserRevenusAirbnb />} />
        <Route path="/loyer-fixe-airbnb-tanger" element={<LoyerFixeAirbnbTanger />} />
        <Route path="/multi-plateformes-airbnb-booking-vrbo" element={<MultiPlateformesAirbnbBooking />} />
        <Route path="/marwan-afassi" element={<MarwanAfassi />} />
        <Route path="/lexique-airbnb-tanger" element={<LexiqueAirbnbTanger />} />
        <Route path="/temoignages" element={<Temoignages />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/blog" element={<ProtectedRoute><AdminBlog /></ProtectedRoute>} />
        <Route path="/admin/blog/new" element={<ProtectedRoute><AdminBlogEditor /></ProtectedRoute>} />
        <Route path="/admin/blog/:slug/edit" element={<ProtectedRoute><AdminBlogEditor /></ProtectedRoute>} />
        <Route path="/admin/contacts" element={<ProtectedRoute><AdminContacts /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <div className="App">
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
          <Toaster position="top-right" richColors />
        </div>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
