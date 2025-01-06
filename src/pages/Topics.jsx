import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Footer from "../components/Footer/Footer";
import LeftContent from "../components/LeftContent/LeftContent";
import RightContent from "../components/RightContent/RightContent";
import TestComponent from "../components/TestComponent/TestComponent";
import VerticalCohortSelector from "../components/VerticalCohortSelector/VerticalCohortSelector";
import Navbar from "../components/Navbar/Navbar";
import { fetchCohort1 } from "../components/CalendarV2/CalendarDataV2"; //the text is the same for all cohorts

export default function Topics() {
    const [cohortTopics, setCohortTopics] = useState([]);

    useEffect(() => {
        const loadCohortData = async () => {
            const courseCohortTopics = await fetchCohort1();
            setCohortTopics(courseCohortTopics.sort((a, b) => a.week - b.week));
        };
        loadCohortData();
    }, []);

    function calculateOddStep(num) {
        return num * 2 + 1;
    }

    function calculateEvenStep(num) {
        return num * 2 + 2;
    }

    return (
        <div className="topics">
            <Navbar />
            <Header />
            <GreenArticle>
                <h1>Course Topics</h1>
            </GreenArticle>
            <TestComponent>
                <div className="test-component-spacing">
                    <h2>
                        Strategic UX Research sets the business’ direction,
                        determines where to invest, and focuses the entire
                        organization’s long-term and short-term objectives on
                        prioritizing improved experiences.
                    </h2>

                    <p>
                        Join our online workshop to make UX a valuable part of
                        the organization’s strategy. During each of this
                        course’s four weeks, you’ll cover two of the eight
                        Strategic UX Research topics. For each topic, you’ll
                        watch a pre-recorded lecture and join Jared in a live
                        small-group coaching session.
                    </p>
                    <p>
                        The lectures are already recorded, so you can watch them
                        in advance or join an optional “Live Watch” session with
                        your fellow cohort members.
                    </p>
                    <p>
                        In each coaching session, you’ll work directly with
                        Jared and your fellow cohort members to create a
                        strategic UX Research plan and work through challenges
                        that are specific to your current situation. You’ll hear
                        how others are working through their challenges, and
                        you’ll share what’s worked best for you.
                    </p>
                    <p>
                        We keep the cohorts small, so you’ll have plenty of time
                        to be coached on how you’ll implement your strategic UX
                        Research.
                    </p>
                </div>
                <VerticalCohortSelector />
            </TestComponent>
            {cohortTopics.map((topic, index) => {
                
                return (
                    <div key={`topic-pair-${index}`}>
                        <LeftContent>
                            <div className="">
                                <h3>{topic.topicName1}</h3>
                                <ReactMarkdown>{topic.rich1}</ReactMarkdown>
                            </div>
                            <div>
                                <img
                                    src={`/images/topic-${calculateOddStep(
                                        index
                                    )}.png`}
                                    alt={`Topic ${
                                        calculateOddStep(index) - topic.week
                                    }`}
                                    className="left-content-image"
                                />
                            </div>
                        </LeftContent>
                        <RightContent>
                            <div>
                                <img
                                    src={`/images/topic-${calculateEvenStep(
                                        index
                                    )}.png`}
                                    alt={`Topic ${
                                        calculateEvenStep(index) - topic.week
                                    }`}
                                    className="left-content-image"
                                />
                            </div>
                            <div className="">
                                <h3>{topic.topicName2}</h3>
                                <ReactMarkdown>{topic.rich2}</ReactMarkdown>
                            </div>
                        </RightContent>
                    </div>
                );
            })}
            <TestComponent>
                <div>
                    <h2>
                        Ready to sign up for the Adv. Strategic UX Research
                        Online Course?
                    </h2>
                    <p>
                        Join one of our upcoming cohorts to dive into these
                        eight influential topics. Jared Spool will walk with you
                        every step of the way.
                    </p>
                </div>
                <VerticalCohortSelector />
            </TestComponent>
            <Footer />
        </div>
    );
}
