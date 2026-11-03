import "@/App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Landing from "./pages/Landing";
import AuthCallback from "./pages/AuthCallback";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./lib/auth";
import { installClickTracking } from "./lib/tracking";

if (typeof window !== "undefined") installClickTracking();
import { Toaster } from "sonner";

// Code-splitting par route : seule la home (Landing) est dans le bundle initial.
// Chaque autre page est chargée à la demande — réduit le JS inutilisé sur chaque vue.
const Mentions = lazy(() => import("./pages/Mentions"));
const Privacy = lazy(() => import("./pages/Privacy"));
const CGV = lazy(() => import("./pages/CGV"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ConciergerieAirbnbTanger = lazy(() => import("./pages/ConciergerieAirbnbTanger"));
const GestionLocativeTanger = lazy(() => import("./pages/GestionLocativeTanger"));
const GestionLocativeCasablanca = lazy(() => import("./pages/GestionLocativeCasablanca"));
const GestionLocativeRabat = lazy(() => import("./pages/GestionLocativeRabat"));
const MenageAirbnbTanger = lazy(() => import("./pages/MenageAirbnbTanger"));
const GestionLocativeMRETanger = lazy(() => import("./pages/GestionLocativeMRETanger"));
const OptimiserRevenusAirbnb = lazy(() => import("./pages/OptimiserRevenusAirbnb"));
const LoyerFixeAirbnbTanger = lazy(() => import("./pages/LoyerFixeAirbnbTanger"));
const LoyerFixeAirbnbRabat = lazy(() => import("./pages/LoyerFixeAirbnbRabat"));
const LoyerFixeAirbnbCasablanca = lazy(() => import("./pages/LoyerFixeAirbnbCasablanca"));
const LoyerFixeAirbnbMarrakech = lazy(() => import("./pages/LoyerFixeAirbnbMarrakech"));
const MultiPlateformesAirbnbBooking = lazy(() => import("./pages/MultiPlateformesAirbnbBooking"));
const ConciergerieAirbnbMarrakech = lazy(() => import("./pages/ConciergerieAirbnbMarrakech"));
const GestionLocativeMarrakech = lazy(() => import("./pages/GestionLocativeMarrakech"));
const ConciergerieRiadMarrakech = lazy(() => import("./pages/ConciergerieRiadMarrakech"));
const ConciergerieAirbnbCasablanca = lazy(() => import("./pages/ConciergerieAirbnbCasablanca"));
const ConciergerieAirbnbRabat = lazy(() => import("./pages/ConciergerieAirbnbRabat"));
const MarwanAfassi = lazy(() => import("./pages/MarwanAfassi"));
const LexiqueAirbnbTanger = lazy(() => import("./pages/LexiqueAirbnbTanger"));
const Temoignages = lazy(() => import("./pages/Temoignages"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminBlog = lazy(() => import("./pages/AdminBlog"));
const AdminBlogEditor = lazy(() => import("./pages/AdminBlogEditor"));
const AdminContacts = lazy(() => import("./pages/AdminContacts"));

function AppRouter() {
  const location = useLocation();
  // Detect OAuth callback via URL fragment — must run synchronously BEFORE other routes
  if (location.hash?.includes("session_id=")) {
    return <AuthCallback />;
  }
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-[#F7F6F2]" />}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mentions-legales" element={<Mentions />} />
        <Route path="/confidentialite" element={<Privacy />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/conciergerie-airbnb-tanger" element={<ConciergerieAirbnbTanger />} />
        <Route path="/gestion-locative-tanger" element={<GestionLocativeTanger />} />
        <Route path="/gestion-locative-casablanca" element={<GestionLocativeCasablanca />} />
        <Route path="/gestion-locative-rabat" element={<GestionLocativeRabat />} />
        <Route path="/menage-airbnb-tanger" element={<MenageAirbnbTanger />} />
        <Route path="/gestion-locative-mre-tanger" element={<GestionLocativeMRETanger />} />
        <Route path="/optimiser-revenus-airbnb" element={<OptimiserRevenusAirbnb />} />
        <Route path="/loyer-fixe-airbnb-tanger" element={<LoyerFixeAirbnbTanger />} />
        <Route path="/loyer-fixe-airbnb-rabat" element={<LoyerFixeAirbnbRabat />} />
        <Route path="/loyer-fixe-airbnb-casablanca" element={<LoyerFixeAirbnbCasablanca />} />
        <Route path="/loyer-fixe-airbnb-marrakech" element={<LoyerFixeAirbnbMarrakech />} />
        <Route path="/multi-plateformes-airbnb-booking" element={<MultiPlateformesAirbnbBooking />} />
        <Route path="/conciergerie-airbnb-marrakech" element={<ConciergerieAirbnbMarrakech />} />
        <Route path="/gestion-locative-marrakech" element={<GestionLocativeMarrakech />} />
        <Route path="/conciergerie-riad-marrakech" element={<ConciergerieRiadMarrakech />} />
        <Route path="/conciergerie-airbnb-casablanca" element={<ConciergerieAirbnbCasablanca />} />
        <Route path="/conciergerie-airbnb-rabat" element={<ConciergerieAirbnbRabat />} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
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
