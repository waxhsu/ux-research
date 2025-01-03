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
                <h1>February Schedule</h1>
            </GreenArticle >

            <TestComponent>
            <div>
                <h2>Develop your own organization’s advanced UX Research strategy. 
                </h2>
                <p>Join us to complete your journey with metrics that will <strong>drive your organization to deliver better-designed products and services.
                </strong></p>
                <p>You won’t make up imaginary, over-simplified metrics for fake companies and products in this intensive. Instead, you (and your team, if you bring them along) will roll up your sleeves and identify the critical metrics for your products and services.
                </p>
            </div>
            </TestComponent>

            <Cohort2Calendar />
            <TestComponent />
            <HorizontalCohortSelector />

            < Footer />
        </div >


    )


}