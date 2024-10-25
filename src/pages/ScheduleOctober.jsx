import React from "react";


// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Article from "../components/Article/Article";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import LeftContent from "../components/LeftContent/LeftContent";
import TestComponent from "../components/TestComponent/TestComponent";
import SpiffyCheckout from "../components/SpiffyCheckout/SpiffyCheckout";
import CalendarOct from "../components/Calendar/CalendarOct";

export default function ScheduleOctober() {
    return (
        <div className="ScheduleOctober">
            <Header />
            < GreenArticle >
                <h1>Join October Cohort</h1>
            </GreenArticle >
            < CalendarOct />
            <Article>  <p>You must watch the lecture before that day’s Live Coaching session. However, if you’re the type of person who likes to be super prepared, you can watch the recording on your own time before this session. You’ll have access to all the recordings before the course begins, so you can even binge-watch them.</p>
                <p>All times listed are in Eastern Time Zone.</p>
                <p>We welcome folks from other time zones to join us. </p></Article>
            < Footer />
        </div >


    )


}