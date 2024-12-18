import React from "react";
import './CourseSchedule.css'
// UPDATE THIS
// UPDATE THIS
import Calendar from '../CalendarV2/Cohort1Calendar';
// UPDATE THIS
// UPDATE THIS

export default function CourseSchedule() {
    return (
        <section >
            <section className='courseSchedule' >
                <h2>Strategic UX Research: Your Online Course Schedule
                </h2>
                <h3>8 Hours live with Jared Spool in small group coaching, plus 8 hours of recorded content.
                </h3>

                <p>During each of this course’s four weeks, you’ll cover two of the eight topics. For each topic, you’ll watch a lecture recording and join Jared in a live small-group coaching session. 
                </p>

                <p>The lectures are already recorded, so you can watch them in advance or join an optional “Live Watch” session with your fellow cohort members. 
                </p>

                <p>In each coaching session, you’ll work directly with Jared and your fellow cohort members to identify your own metrics and work through challenges that are specific to your current situation. You’ll hear how others are working through their challenges, and you’ll share what’s worked best for you.
                </p>
                <p>We keep the cohorts small, so you’ll have plenty of time to be coached on how you’ll implement your Outcome-driven UX metrics.
                </p>
                <p>We know that schedules are tough, so we record every coaching session with Jared. If you miss a session, or you just want to review what you discussed, you’ll have access to the recordings for 6 months after the course ends. (You can also watch the recordings from other cohorts, to hear how they worked through their biggest challenges.)
                </p>
                <h2>Strategic UX Research sets the business’ direction, determines where to invest, and focuses the entire organization’s long-term and short-term objectives on prioritizing improved experiences.
                </h2>
                <p>Join our online workshop to make UX a valuable part of the organization’s strategy. During each of this course’s four weeks, you’ll cover two of the eight Strategic UX Research topics. For each topic, you’ll watch a pre-recorded lecture and join Jared in a live small-group coaching session. 
                </p>
                <p>The lectures are already recorded, so you can watch them in advance or join an optional “Live Watch” session with your fellow cohort members.
                </p>
                <p>In each coaching session, you’ll work directly with Jared and your fellow cohort members to create a strategic UX Research plan and work through challenges that are specific to your current situation. You’ll hear how others are working through their challenges, and you’ll share what’s worked best for you.
                </p>
                <p>We keep the cohorts small, so you’ll have plenty of time to be coached on how you’ll implement your strategic UX Research.
                </p>
                <Calendar />

            </section>
        </section>
    )


}