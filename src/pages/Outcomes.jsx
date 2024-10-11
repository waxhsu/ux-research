import React from "react";


// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Article from "../components/Article/Article";
import LeftContent from "../components/LeftContent/LeftContent";
import RightContent from "../components/RightContent/RightContent";
import Modal from "../components/Modal/Modal";
import TestComponent from "../components/TestComponent/TestComponent";



import Footer from "../components/Footer/Footer";
import Pricing from "../components/Pricing/Pricing";


export default function Outcomes() {
    return (
        <div className="outcomes">
            <Header />
            < GreenArticle >
                <h1>Why UX Outcomes?</h1>
            </GreenArticle >
            <Article >
                <h2>Why develop your own organization’s Outcome-driven UX Metrics?</h2>
                <p><b>Outcome-Driven UX Metrics</b>  is our radical approach to combating the issues caused by conventional metrics. They focus your entire organization to…</p>

                <ul>
                    <li>Define organization-wide UX goals that capture the attention of your stakeholders and executives.</li>
                    <li>Elevate “improving your customers’ and users’ lives” to become a top organization objective.</li>
                    <li>Take the lead on measuring and reporting the organization’s progress with the full support of your senior management.</li>
                </ul>
                <p><b>We have eight topics on Outcome-Driven UX Metrics.</b> Dive into what we cover in each topic.</p>
            </Article >
            <LeftContent>

                <div className="">
                    <h2>Outcome-driven UX Metrics makes your work visible.</h2>
                    <p>You and your team work hard to improve things for your users, customers, and employees. Yet, it seems nobody sees how hard you labor.</p>

                    <p>How visible are your UX efforts?</p>

                    <p>Do your stakeholders see how vital your work is? Are they seeing the benefits of delivering exceptional UX?</p>

                    <p>Do your executives know the value that your team brings to your customers and users? Do they understand how delivering poor UX holds your organization back?</p>
                    <p>You can’t expect executives and stakeholders to invest in and prioritize your team’s efforts without making your UX work visible.</p>

                    <p>Delivering a great user experience will contribute to every essential business objective. Yet, how can you drive your organization to consistently deliver great UX in every product and service when the UX is invisible? </p>
                </div>
                <div>
                    <img src="/images/goals.png" alt="Jared" className="left-content-image" />
                </div>
            </LeftContent>


            <RightContent>
                <div>
                    <img src="/images/stopwatch.png" alt="Jared" className="left-content-image" />
                </div>
                <div className="">
                    <h2>Visibility is your number one UX leadership priority.</h2>
                    <p>What are you doing to make UX visible in your organization?</p>

                    <p>How do you make sure that, at all levels across your organization, UX efforts are seen as a significant strategic contributor to what your organization is working to accomplish?</p>

                    <p><b>UX Metrics make the invisible visible.</b> <br />
                        Effective UX metrics track the critical improvements to the user experience of your products or services.</p>

                    <p>With robust metrics, your UX team’s work and the benefits that come from that work become highly visible. UX metrics make your work visible to your stakeholders, to your executives, and across your organization.</p>
                    <p><b>Not all UX metrics are equal.</b> <br />
                        We hear about UX metrics often. They sometimes have fancy names, such as HEART, SUS, Net Promoter Score, time on page, conversion rate, task time, satisfaction, or sentiment analysis. </p>
                    <p>These conventional metrics are what teams gravitate to. Unfortunately, these metrics do not make their work more visible. </p>
                    <p>Conventional metrics embody magical thinking. These metrics don’t help your organization see the value of UX. They don’t make your UX effort more visible.</p>
                    <p>They often end up hiding the real achievements the team has had because these conventional What good is it doing if your metrics do not show improvements in the users’ experiences? Sometimes, it’s not clear what they show. (We’re looking at you, Net Promoter Score.)</p>
                </div>
            </RightContent>


            {/* MIGHT NEED TO SWITCH TO PRICING COMPONENT */}
            <TestComponent>
                <div>
                    <div className="">
                        <h2>Are you measuring the UX improvements you’re delivering?</h2>
                        <p>Conventional UX metrics don’t measure a user’s actual experience. They don’t measure what was frustrating about the experience for the user. They don’t show when new designs have eliminated those frustrations.</p>

                        <p>Conventional UX metrics don’t measure when your users and customers find your unique designs delightful. They don’t measure when you’ve exceeded the users’ expectations or anticipated your customers’ needs.</p>
                        <p>Conventional UX metrics don’t measure whether your team has improved users’ or customers’ lives. What good is all your hard work if your UX isn’t improving your users’ lives? </p>

                        <p>If you don’t know if your customers’ and users’ lives improved because of your UX work, how will your stakeholders and executives? You need far better metrics to make these improvements work.</p>
                    </div>
                </div>
                <Modal />
            </TestComponent >



            <Footer />
        </div>


    )


}