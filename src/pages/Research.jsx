import React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


// components
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import RightContent from "../components/RightContent/RightContent";
import Modal from "../components/VerticalCohortSelector/VerticalCohortSelector";
import TestComponent from "../components/TestComponent/TestComponent";
import HorizontalCohortSelector from "../components/HorizontalCohortSelector/HorizontalCohortSelector";

import Footer from "../components/Footer/Footer";

export default function Research() {


    // State and hooks to change the h1 on resize
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Update the state on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);




    return (
        <div className="outcomes">
            <Navbar />
            <Header />
            < GreenArticle >
                <h1>{isMobile ? "Why UX Research?" : "Why use Adv. Strategic UX Research?"}</h1>
            </GreenArticle >
            <TestComponent >
                <div className="test-component-spacing">
                    <h2>The right research makes your team more strategic, influential, and innovative.</h2>
                    <p>There’s a technical term for the absence of UX research: guessing.</p>
                    <p>When stakeholders and teams lack the knowledge they need to make critical decisions, they guess. They might call it a hunch, bet, experiment, or even an educated guess. It’s still guessing.
                    </p>
                    <p>Guessing is expensive and time-consuming for your product team. It forces near-endless debates about the “correct” approach. You have to validate your designs, or worse, just build something and put it into the world only to learn that it’s not what users and customers want or need. When you guess wrong (which is too often the case), all that work is a waste, and you learn very little about what would’ve worked.
                    </p>
                    <h3>Strategic UX Research changes all that. 
                    </h3>
                    <p>Your team stops guessing because they’ve built expertise in who your users and customers are, what they need, what their current experiences are, and what their future experiences could be.
                    </p>
                    <p>When your team has all that knowledge about users and customers at their fingertips, you no longer have to guess. Your deep understanding answers any questions just as you realize you have them.
                    </p>
                    <p>Most importantly, you get the right products and services into the market quickly because having confidence in what you need to deliver is a production accelerator. Plus, you have solid outcome-driven UX metrics demonstrating how every new release improves your customers’ and users’ lives. Improving people’s lives increases their love and loyalty to your brand and products.
                    </p>

                    <h3>Build your Strategic UX Research practice today.
                    </h3>

                    <p>Turn your organization into the world’s foremost experts on what your customers and users need and want. Accelerate your strategic decision-making capabilities with increased confidence from a shared understanding of your users' experiences. No more guessing.
                    </p>
                </div>
                <div>
                    <Modal />
                </div>
            </TestComponent >


            {/* <RightContent>
                <div>
                    <img src="/images/goals.png" alt="Jared" className="left-content-image" />
                </div>
                <div className="">
                    <h2>Outcome-driven UX Metrics focus on the users’ experience.</h2>
                    <p>You will start with your team’s current UX outcomes when you craft your outcome-driven UX metrics. These outcome statements describe the improvements you’ll make in the lives of your users and customers.
                    </p>

                    <p>Here are some examples of how teams have used outcome-driven UX metrics to tell stories of their contributions and successes:
                    </p>
                    <ul>
                        <li>A UX team working on electronic healthcare records crafted outcome-driven UX metrics that told the story of how doctors now spend more time with patients and less time entering data into the database. Their metrics showed that time with patients increased while time entering data decreased due to the team’s improvements in the system.
                        </li>
                        <li>Another team working on a Customs port-of-entry logistics system used their outcome-driven UX metrics to share how their design changes, along with new API integration, reduced port inspection times by more than a million hours in one year, which reduced end-customer delivery delays and enhanced their customers’ supply-chain monitoring.
                        </li>
                        <li>A team working on an in-classroom product that monitors student progress used outcome-driven UX metrics to demonstrate how teachers could focus more on students struggling the most with new lessons. Their metrics became instrumental in boosting sales to new school districts.
                        </li>
                    </ul>

                    <p>Outcome-driven UX metrics tell stories about the real-life improvements that users and customers see from better UX. Conventional UX metrics, like time on page or customer satisfaction, don’t come close to having the same impact.
                    </p>

                    <p>If you want everyone in your organization to see the benefit of investing in great UX, you need outcome-driven UX metrics to tell your story.
                    </p>

                    <Link to="/topics">Check out everything you’ll learn in this course.</Link>
                </div>
            </RightContent> */}
            <div className="horizontal-modal-grey-container">
                < HorizontalCohortSelector />
            </div>
            <Footer />
        </div>


    )


}