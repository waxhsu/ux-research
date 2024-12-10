import React from "react";


// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Footer from "../components/Footer/Footer";
import TestComponent from "../components/TestComponent/TestComponent";
import Cohort4Calendar from "../components/CalendarV2/Cohort4Calendar";
import HorizontalCohortSelector from "../components/HorizontalCohortSelector/HorizontalCohortSelector";
import Navbar from "../components/Navbar/Navbar";

export default function Cohort4Schedule() {
    return (
        <div id="Cohort4Schedule">
            <Navbar />
            <Header />
            <GreenArticle >
                <h1>January Schedule</h1>
            </GreenArticle >
            <Cohort4Calendar />
            <TestComponent />
            <HorizontalCohortSelector />
            < Footer />
        </div >


    )


}