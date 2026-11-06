
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import Services from "./pages/Services";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/reservation" element={<FormPage />} />

        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
