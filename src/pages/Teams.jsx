import React from "react";


// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Article from "../components/Article/Article";


import Footer from "../components/Footer/Footer";
import LeftContent from "../components/LeftContent/LeftContent";
import RightContent from "../components/RightContent/RightContent";


export default function Teams() {
    return (
        <div className="teams">
            <Header />
            <GreenArticle>
                <h1>Sign Up Your Team</h1>
            </GreenArticle>
            <Article>
                <h2>UX Metrics to drive your entire organization.</h2>
                <p>Focus your team and executives on improving your customers’ lives through visible outcomes your entire team and stakeholders can measure and see.</p>
                <p>Get much more out of implementing your Outcome-driven UX Metrics by involving your larger team.</p>
                <ul className="article-team-list">
                    <li className="article-team-list-item">
                        <img src="./images/bubble.png" alt="speech bubble" /> For Less than 8 Team Members: Join a Public Course
                    </li>
                    <li className="article-team-list-item">
                        <img src="./images/bubble-star.png" alt="speech bubble with a star" /> For More than 8 Team Members: Plan a Private Workshop
                    </li>
                </ul>
            </Article>
            <LeftContent></LeftContent>
            <RightContent></RightContent>
            <Footer />
        </div>

    )
}