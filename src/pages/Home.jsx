import React, { useEffect, useRef, useState } from "react";

// Components
import Header from '../components/Header/Header';
import GreenArticle from '../components/GreenArticle/GreenArticle';
import Article from '../components/Article/Article';
import Testimonials from '../components/Testimonials/Testimonials';
import CourseSchedule from '../components/CourseSchedule/CourseSchedule';
import JaredSpool from '../components/JaredSpool/JaredSpool';
import Pricing from '../components/Pricing/Pricing';
import Calendar from '../components/Calendar/Calendar';
import VideoSeries from '../components/VideoSeries/VideoSeries';
import Footer from '../components/Footer/Footer';
import Modal from "../components/Modal/Modal";
import TestComponent from "../components/TestComponent/TestComponent";

export default function Home() {
    return (
        <div className="App">

            <Header />

            < GreenArticle >
                <p>To get real results we can measure. We need to focus on the real needs of our customers and users.</p>
                <p>Everything we do and measure should be outcome-based. No more measuring for measuring sake. </p>
            </GreenArticle >
            {/* <TestComponent>
                <div className="TEMP-pricing-content">
                <h2>Outcome-Driven UX Metrics – Measuring your users’ actual experience.</h2>
                <p><b>Outcome-Driven UX Metrics</b> is our radical approach to combating the issues caused by conventional metrics.</p>
                <p> When you use Outcome-driven UX Metrics, you’ll directly track the user experience improvements your team makes. </p>

                <p> It’s not based on the magical thinking you find in conventional UX metrics approaches. No more complicated explanations about how conversion rates, NPS, or the HEART framework demonstrate how the experience is better for customers and users. No more explaining why numbers didn’t change, even though you improved your design. No more guessing why your numbers change by themselves, even though you didn’t deliver anything new.</p>

                <p> Outcome-driven UX Metrics focus you, your team, stakeholders, and executives on improving your customers’ and users’ lives. These improvements are so exceptional that customers immediately see the enhanced value, and users see increased benefits.</p>

                <p>Outcome-driven UX Metrics make UX distinctively visible.</p>

                <h3>Showcase precisely where you’re delivering value.</h3>

                <p>You’ll start with what we call a <i>UX Outcome.</i> Your UX outcome answers a simple question: How will you improve your users’ and customers’ lives? Ultimately, you’ll build your metrics around this question. </p>

                <p> Using your UX outcome, you’ll create three categories of metrics:</p>
                <ul>
                    <li>UX Success metrics: Report the precise moment you’ve improved your customers’ and users' lives.</li>
                    <li>UX Progress metrics: Achieve key results as your team progresses against your planned milestones.</li>
                    <li>Problem-value metrics: Pinpoint and aggregate your organization’s ongoing costs of poor UX to promote UX’s return on investment. </li>
                </ul>
                <p>Each of these metrics categories helps you tell the story of your UX journey. The story of where you’re going, where you started, and how far along you are.</p>
                <p>Outcome-driven UX Metrics are simple in their concepts. Once you acquire the fundamentals, you’re ready to implement your own. </p>
                <p>And once you implement your own Outcome-Driven UX Metrics, you've unleashed a superpower. You'll spark exceptional outcomes with your UX metrics as a foundation.</p>
                </div>
                <Modal />
            </TestComponent> */}


            <Article >
                <div className="article-content">
                <h2>Outcome-Driven UX Metrics – Measuring your users’ actual experience.</h2>
                <p><b>Outcome-Driven UX Metrics</b> is our radical approach to combating the issues caused by conventional metrics.</p>
                <p> When you use Outcome-driven UX Metrics, you’ll directly track the user experience improvements your team makes. </p>

                <p> It’s not based on the magical thinking you find in conventional UX metrics approaches. No more complicated explanations about how conversion rates, NPS, or the HEART framework demonstrate how the experience is better for customers and users. No more explaining why numbers didn’t change, even though you improved your design. No more guessing why your numbers change by themselves, even though you didn’t deliver anything new.</p>

                <p> Outcome-driven UX Metrics focus you, your team, stakeholders, and executives on improving your customers’ and users’ lives. These improvements are so exceptional that customers immediately see the enhanced value, and users see increased benefits.</p>

                <p>Outcome-driven UX Metrics make UX distinctively visible.</p>

                <h3>Showcase precisely where you’re delivering value.</h3>

                <p>You’ll start with what we call a <i>UX Outcome.</i> Your UX outcome answers a simple question: How will you improve your users’ and customers’ lives? Ultimately, you’ll build your metrics around this question. </p>

                <p> Using your UX outcome, you’ll create three categories of metrics:</p>
                <ul>
                    <li>UX Success metrics: Report the precise moment you’ve improved your customers’ and users' lives.</li>
                    <li>UX Progress metrics: Achieve key results as your team progresses against your planned milestones.</li>
                    <li>Problem-value metrics: Pinpoint and aggregate your organization’s ongoing costs of poor UX to promote UX’s return on investment. </li>
                </ul>
                <p>Each of these metrics categories helps you tell the story of your UX journey. The story of where you’re going, where you started, and how far along you are.</p>
                <p>Outcome-driven UX Metrics are simple in their concepts. Once you acquire the fundamentals, you’re ready to implement your own. </p>
                <p>And once you implement your own Outcome-Driven UX Metrics, you've unleashed a superpower. You'll spark exceptional outcomes with your UX metrics as a foundation.</p>
                </div>
            </Article >

            <Testimonials />
            <CourseSchedule />
            {/* <Calendar /> */}
            <JaredSpool />

            <TestComponent>
                <div className="pricing-content">
                    <h2>Sign up for Outcome-Driven UX Metrics Course</h2>
                    <p>Ready to dive in deep and absorb everything there is to know about Outcome-driven UX Metrics?</p>
                    <ul>
                        <li>Individual price per person <br /> $499</li>
                        <li>Team price per person ($100 off each person)<br /> $399</li>
                        <li>Unemployed UXer per person <br /> $199</li>
                    </ul>
                    <div>
                        <p>What’s included in the course:</p>
                        <ul>
                            <li><img src="./images/8.png" alt="8" className="pricing-list-image" />Eight 90-minute live sessions with Jared Spool.</li>
                            <li><img src="./images/8.png" alt="8" className="pricing-list-image" />Eight 60-minute recorded lectures by Jared Spool.</li>
                            <li><img src="./images/5-2.png" alt="book" className="pricing-list-image" />Your Outcome-driven UX Metrics Planning Workbook.</li>
                            <li><img src="./images/7.png" alt="person with glasses" className="pricing-list-image" />Direct access to ask Jared Spool questions.</li>
                            <li><img src="./images/comp.png" alt="computer" className="pricing-list-image" />6 Weeks of access to all session recordings, Q&As, and notes.</li>
                            <li><img src="./images/10.png" alt="certificate" className="pricing-list-image" />A personalized Certificate of Completion for the Outcome-driven UX Metrics program.</li>
                        </ul>
                    </div>
                </div>
                <Modal />
            </TestComponent>
            <VideoSeries />

            <Footer />
            {/*<FloatingComponent /> */}
        </div>
    );
}