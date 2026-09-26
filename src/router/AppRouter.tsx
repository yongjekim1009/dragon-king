import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/common/scroll/ScrollToTop";
import MainLayout from "../components/layout/MainLayout";

import Main from "../pages/main/Main";
import PortfolioPage from "../pages/portfolio/PortfolioPage";
import PortfolioDetail from "../pages/portfolio/PortfolioDetail";
import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";

import SearchResult from "../pages/search-result/SearchResult";

export default function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />

          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/search" element={<SearchResult />} />
        </Route>
      </Routes>
    </>
  );
}
