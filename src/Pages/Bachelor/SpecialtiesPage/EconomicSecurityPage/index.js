import React from "react";
import Header from "../../../../components/Bachelor/Header";
import Spisok from "./Spisok/SpisokContainer";
import Footer from "./Footer/FooterContainer";
import Banner from "./Banner/BannerContainer";
import SpecializationDescription from "./SpecializationDescription/SpecializationDescriptionContainer";
import Profile from "./Profile/ProfileContainer";
import InfoStud from "./InfoStud/InfoStudContainer";
import Kafedra from "./Kafedra/KafedraContainer";
import Naprav from "./Naprav/NapravContainer";

const MainPage = () => {
  return (
    <div style={{ backgroundColor: "#F0F0F0", minHeight: "100vh" }}>
      <Header />
      <Banner /> 
      <SpecializationDescription />
      <Profile />
      <Naprav />
      <InfoStud />
        <Spisok />
        <Footer />
       
        
    </div>
  );
};

export default MainPage;
