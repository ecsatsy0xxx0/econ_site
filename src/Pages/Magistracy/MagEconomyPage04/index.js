import React from "react";
import { HeaderD, TitleD, DescriptionD, FormaD, ProfileD, PossibilityD, DepartmentD, EntranceD, Spisok, NomberD, Obed, End, Footer} from "../../../components";

const MainPage = () => {
  return (
    <div style={{ backgroundColor: "#F0F0F0", minHeight: "100vh"}}>
      <HeaderD />
      <TitleD />
      <DescriptionD />
      <FormaD />
      <ProfileD />
      <PossibilityD />
      <DepartmentD />
      <EntranceD />
      <Spisok />
      <NomberD />
      <Obed />
      <End />
      <Footer />
    </div>
  );
};

export default MainPage;
