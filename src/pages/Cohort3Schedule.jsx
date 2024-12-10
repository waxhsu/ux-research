import React from "react";


// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Footer from "../components/Footer/Footer";
import TestComponent from "../components/TestComponent/TestComponent";
import Cohort3Calendar from "../components/CalendarV2/Cohort3Calendar";
import HorizontalCohortSelector from "../components/HorizontalCohortSelector/HorizontalCohortSelector";
import Navbar from "../components/Navbar/Navbar";

export default function Cohort3Schedule() {
    return (
        <div id="Cohort3Schedule">
            <Navbar />
            <Header />
            <GreenArticle >
                <h1>December Schedule</h1>
            </GreenArticle >
            <Cohort3Calendar />
            <TestComponent />
            <HorizontalCohortSelector />
            < Footer />
        </div >


    )


}