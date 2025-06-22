import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import store from "./Store";
import MainPage from "./Pages/Bachelor/MainPage";
import InnovatikaPage from "./Pages/Bachelor/SpecialtiesPage/InnovatikaPage";
import BusinessInformaticsPage from "./Pages/Bachelor/SpecialtiesPage/BusinessInformaticsPage";
import TradingBusinessesPage from "./Pages/Bachelor/SpecialtiesPage/TradingBusinessPage";
import SystemAnalysisPage from "./Pages/Bachelor/SpecialtiesPage/SystemAnalysisPage";
import EconomicSecurityPage from "./Pages/Bachelor/SpecialtiesPage/EconomicSecurityPage";
import EconomyPage from "./Pages/Bachelor/SpecialtiesPage/EconomyPage";
import ManagementPage from "./Pages/Bachelor/SpecialtiesPage/ManagementPage";
import LanguageToggle from "./Pages/Bachelor/JournalPage";
import CafedraPage from "./Pages/Bachelor/CafedraPage";
import ProgressPage from "./Pages/Bachelor/ProgressPage";
import DostishStudent from "./Pages/Bachelor/DostishStudent";
import AssociationsFaculty from "./Pages/Bachelor/AssociationsFaculty";
import LastNews from "./Pages/Bachelor/LastNews";
import EntrantGide from "./Pages/Bachelor/EntrantGide";

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
