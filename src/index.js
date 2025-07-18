import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import store from "./Store";
import MainPage from "./Pages/Bachelor/MainPage";
import InnovatikaPage from "../src/Pages/Bachelor/InnovatikaPage";
import LanguageToggle from "./Pages/Bachelor/JournalPage";
import CafedraPage from "./Pages/Bachelor/CafedraPage";
import ProgressPage from "./Pages/Bachelor/ProgressPage";
import DostishStudent from "./Pages/Bachelor/DostishStudent";
import AssociationsFaculty from "./Pages/Bachelor/AssociationsFaculty";
import LastNews from "./Pages/Bachelor/LastNews";
import EntrantGide from "./Pages/Bachelor/EntrantGide";
import Magistracy from "./Pages/Magistracy/MainPage";
import MagEconomyPage04 from "./Pages/Magistracy/MagEconomyPage04";
import MagEconomyPage03 from "./Pages/Magistracy/MagEconomyPage03";
import MagMangPage from "./Pages/Magistracy/MagMangPage";
import MagTradPage03 from "./Pages/Magistracy/MagTradPage03";
import MagTradPage04 from "./Pages/Magistracy/MagTradPage04";
import MagFinPage from "./Pages/Magistracy/MagFinPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/innovatika" element={<InnovatikaPage />} />
        <Route path="/econtp" element={<LanguageToggle />} />
        <Route path="/department" element={<CafedraPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/progressstudent" element={<DostishStudent />} />
        <Route path="/associations" element={<AssociationsFaculty />} />
        <Route path="/news" element={<LastNews />} />
        <Route path="/gide" element={<EntrantGide />} />
        <Route path="/magistracy" element={<Magistracy />} />
        <Route path="/mageconomy04" element={<MagEconomyPage04 />} />
        <Route path="/mageconomy03" element={<MagEconomyPage03 />} />
        <Route path="/management" element={<MagMangPage />} />
        <Route path="/trading03" element={<MagTradPage03 />} />
        <Route path="/trading04" element={<MagTradPage04 />} />
        <Route path="/finance" element={<MagFinPage />} />
      </Routes>
    </Router>
  </Provider>
);
