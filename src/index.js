import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import store from "./Store";
import MainPage from "./Pages/MainPage";
import InnovatikaPage from "./Pages/SpecialtiesPage/InnovatikaPage";
import BusinessInformaticsPage from "./Pages/SpecialtiesPage/BusinessInformaticsPage";
import TradingBusinessesPage from "./Pages/SpecialtiesPage/TradingBusinessPage";
import SystemAnalysisPage from "./Pages/SpecialtiesPage/SystemAnalysisPage";
import EconomicSecurityPage from "./Pages/SpecialtiesPage/EconomicSecurityPage";
import EconomyPage from "./Pages/SpecialtiesPage/EconomyPage";
import ManagementPage from "./Pages/SpecialtiesPage/ManagementPage";
import LanguageToggle from "./Pages/JournalPage";
import CafedraPage from "./Pages/CafedraPage";
import ProgressPage from "./Pages/ProgressPage";
import DostishStudent from "./Pages/DostishStudent";
import AssociationsFaculty from "./Pages/AssociationsFaculty";
import LastNews from "./Pages/LastNews";
import EntrantGide from "./Pages/EntrantGide";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
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
        <Route path="/department" element={<CafedraPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/progressstudent" element={<DostishStudent />} />
        <Route path="/associations" element={<AssociationsFaculty />} />
        <Route path="/news" element={<LastNews />} />
        <Route path="/gide" element={<EntrantGide />} />
      </Routes>
    </Router>
  </Provider>
);
