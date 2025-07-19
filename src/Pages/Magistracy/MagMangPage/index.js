import React, { useEffect } from "react";
import { HeaderD, TitleMangD, DescriptionD, FormaD, ProfileD, PossibilityD, DepartmentD, EntranceD, Spisok, NomberD, Obed, End, Footer} from "../../../components";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ backgroundColor: "#F0F0F0", minHeight: "100vh"}}>
      <HeaderD />
      <TitleMangD />
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
