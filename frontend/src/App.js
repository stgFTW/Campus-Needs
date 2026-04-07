import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import CategoriesPage from "@/pages/CategoriesPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import ListYourItemPage from "@/pages/ListYourItemPage";
import ListingsPage from "@/pages/ListingsPage";
import AboutPage from "@/pages/AboutPage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/listings" element={<ListingsPage />} />
            <Route path="/list-your-item" element={<ListYourItemPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
