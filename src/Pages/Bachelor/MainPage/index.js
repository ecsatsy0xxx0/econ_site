import React from "react";
import { Header, Title, Decan, Spesh, Spisok, News, Gide, Dostish, Nomber, Obed, End, Footer } from "../../../components";

const MainPage = () => {
  return (
    <div style={{ backgroundColor: "#F0F0F0", minHeight: "100vh"}}>
      <Header />
      <Title />
      <Decan />
      <Spesh />
      <Gide />
      <Spisok />
      <Dostish />
      <Nomber />
      <Obed />
      <News />
      <End />
      <Footer />
    </div>
  );
};

export default MainPage;
