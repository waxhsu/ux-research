import React from "react";
import { Link } from 'react-router-dom';


// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Footer from "../components/Footer/Footer";
import TestComponent from "../components/TestComponent/TestComponent";
import SpiffyCheckout from "../components/SpiffyCheckout/SpiffyCheckout";
import Navbar from "../components/Navbar/Navbar";

export default function Cohort1() {
    return (
        <div id="Cohort1">
            <Navbar />
            <Header />
            < GreenArticle >
                <h1>Join the January Cohort</h1>
            </GreenArticle >
            <TestComponent >
                <div className="width-500">
                    <h2>Develop your own organization’s advanced UX Research strategy.
                    </h2>
                    <p><strong>Awaken your top executives to the value that great user experiences bring to your organization and the people you serve.
                    </strong></p>
                    <p>Give your senior stakeholders and executives a detailed, shared understanding of your customers’ and users’ experiences. They’ll use your Strategic UX Research to set the business’ direction, determine where to invest, and focus the entire organization’s long-term and short-term objectives on prioritizing improved experiences.
                    </p>
                    <p>Your new Strategic UX Research efforts will change the relationships your senior executives and stakeholders will have with everyone who will benefit from your products and services. It’s a profound transformation that restructures how your organization makes essential decisions.
                    </p>
                </div>
                <div className="test-component-content-container">
                    <img src="./images/UXresearchImg.png" alt="Advanced Strategic UX Research" />
                    <button className="btn btn-shadow test-component-purchase button cohortSelector-button-link"> 
                        <Link to="/cohort1-schedule" className="cohortSelector-button-link">
                        January Schedule
                        </Link></button>
                </div>
            </TestComponent >
            <TestComponent>
                <div className="width-50">
                    <h2>Choose to sign up as an Individual or a Team Member</h2>
                    <p>You’ll get the most out of your course if you come with your team.</p>

                    <p><strong>As a team, you’ll develop your advanced UX Research strategy together.
                    </strong>You’ll restructure how your organization makes essential decisions with advanced UX Research. You’ll come away from the course with a plan to connect your organization’s long-term direction and strategy directly to your customers’ and users’ deepest needs. 
                    </p>
                    <p><strong>Each team member saves $100 on their registration when they sign up as a team member.
                    </strong></p>
                    <p>Each team member must purchase their registration separately. Whichever you choose, team or individual, we’ll give you our full support.
                    </p>
                </div>

                <div className="width-40">
                    <h2>Currently out of work? We’ve got you.
                    </h2>
                    <p><strong>We’re offering $199 registrations for our out-of-work colleagues.
                    </strong></p>
                    <p>We recognize that there are UX Leaders dedicated to learning and growing who are unfortunately in between jobs right now—we get it. So, if you’re an unemployed, dedicated learner, this special price is for you.
                    </p>
                    <p>(If you’re fortunate enough to be employed right now, please leave these spots for those who are not currently employed. Don’t be that person. Don’t take the seat of someone who really needs this price.)
                    </p>
                </div>
            </TestComponent >

            <SpiffyCheckout >
            <h2>Join the January UX Research Cohort</h2>
                <spiffy-checkout url=
                "https://centercentre.spiffy.co/checkout/advanced-strategic-ux-research-cohort1" ></spiffy-checkout>
            </SpiffyCheckout>





            < Footer />
        </div >


    )


}