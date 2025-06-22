import React from "react";
import { MagHeader, Title, Decan, Spesh, Spisok, News, Gide, Dostish, Nomber, Obed, End, Footer } from "../../../components";

const MainPage = () => {
    return (
        <div style={{ backgroundColor: "#F0F0F0", minHeight: "100vh"}}>
            <MagHeader />
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
