import React from "react";
import Header from "./Header/HeaderContainer";
import Title from "./Title/TitleContainer";
import Decan from "./Decan/DecanContainer";
import Spesh from "./Spesh/SpeshContainer";
import Gide from "./Gide/GideContainer";
import Spisok from "./Spisok/SpisokContainer";
import Dostish from "./Dostish/DostishContainer";
import Nomder from "./Nomber/NomderContainer";
import Obed from "./Obed/ObedContainer";
import News from "./News/NewsContainer";
import End from "./End/EndContainer";
import Footer from "./Footer/FooterContainer";
import styles from './index.css';

const MainPage = () => {
  return (
    <div style={{ backgroundColor: "#F0F0F0", minHeight: "100vh"}} className="styles">
      <Header />
        <Title />
        <Decan />
        <Spesh />
        <Gide />
        <Spisok />
        <Dostish />
        <Nomder />
        <Obed />
        <News />
          <End />
          <Footer />
    </div>
  );
};

export default MainPage;
