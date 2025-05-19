import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import InnovatikaPage from "./SpecialtiesPage/InnovatikaPage";
import BusinessInformaticsPage from "./SpecialtiesPage/BusinessInformaticsPage";
import TradingBusinessesPage from "./SpecialtiesPage/TradingBusinessPage";
import SystemAnalysisPage from "./SpecialtiesPage/SystemAnalysisPage";
import EconomicSecurityPage from "./SpecialtiesPage/EconomicSecurityPage";
import EconomyPage from "./SpecialtiesPage/EconomyPage";
import ManagementPage from "./SpecialtiesPage/ManagementPage";
import LanguageToggle from "./JournalPage";
import CafedraPage from "./CafedraPage";
import ProgressPage from "./ProgressPage";

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/innovatika" element={<InnovatikaPage />} />
        <Route path="/businessinformatics" element={<BusinessInformaticsPage />} />
        <Route path="/tradingbusinesses" element={<TradingBusinessesPage />} />
        <Route path="/systemanalysis" element={<SystemAnalysisPage />} />
        <Route path="/economicsecurity" element={<EconomicSecurityPage />} />
        <Route path="/economy" element={<EconomyPage />} />
        <Route path="/management" element={<ManagementPage />} />
        <Route path="/econtp" element={<LanguageToggle />} />
        <Route path="/department" element={<CafedraPage/>} />
        <Route path="/progress" element={<ProgressPage/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
