import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Mentions from "./pages/Mentions";
import Privacy from "./pages/Privacy";
import CGV from "./pages/CGV";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/mentions-legales" element={<Mentions />} />
          <Route path="/confidentialite" element={<Privacy />} />
          <Route path="/cgv" element={<CGV />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
