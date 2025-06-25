import React from "react";
import { MagHeader, MagTitle, Decan, MagSpesh, Spisok, News, MagEntrance, Dostish, Nomber, Obed, End, Footer } from "../../../components";

const MainPage = () => {
    return (
        <div style={{ backgroundColor: "#F0F0F0", minHeight: "100vh"}}>
            <MagHeader />
            <MagTitle />
            <Decan />
            <MagSpesh />
            <MagEntrance />
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
