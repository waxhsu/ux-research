import React from "react";


// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Footer from "../components/Footer/Footer";
import TestComponent from "../components/TestComponent/TestComponent";
import Cohort2Calendar from "../components/CalendarV2/Cohort2Calendar";
import HorizontalCohortSelector from "../components/HorizontalCohortSelector/HorizontalCohortSelector";
import Navbar from "../components/Navbar/Navbar";

export default function Cohort2Schedule() {
    return (
        <div id="Cohort2Schedule">
            <Navbar />
            <Header />
            <GreenArticle >
                <h1>November Schedule</h1>
            </GreenArticle >
            <Cohort2Calendar />
            <TestComponent />
            <HorizontalCohortSelector />

            < Footer />
        </div >


    )


}