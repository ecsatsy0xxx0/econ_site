import React from "react";
import Header from "../../components/Header";
import Footer from "./Footer/FooterContainer";
import LanguageToggle from "./LanguageToggle/LanguageContainer";
import JournalInfo from "./JournalInfo/JournalInfo";
import Archive from "./Archive/Archive";
import PublicationInfo from "./PublicationInfo/PublicationInfo";
import EditorialBoard from "./EditorialBoard/EditorialBoard";
import News from "./News/News";
import { LanguageProvider } from "./LanguageContext"; // Импортируем LanguageProvider

const PageJupnal = () => {
  return (
    <LanguageProvider>
      <div style={{ backgroundColor: "#F0F0F0", minHeight: "100vh" }}>
        <Header />
        <LanguageToggle />
        <JournalInfo />
        <Archive />
        <PublicationInfo />
        <EditorialBoard />
        <News />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default PageJupnal;
