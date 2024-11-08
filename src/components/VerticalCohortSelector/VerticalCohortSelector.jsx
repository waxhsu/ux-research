import React from "react"
import "./VerticalCohortSelector.css"
import { Link } from "react-router-dom"
import { COHORT_DATE_RANGE_NOVEMBER } from "../Calendar/CalendarData"
import { COHORT_DATE_RANGE_DECEMBER } from "../Calendar/CalendarData"
import { COHORT_DATE_RANGE_JANUARY } from "../Calendar/CalendarData"

export default function VerticalCohortSelector() {
    return (

        <div className="verticalCohortSelector">
            <img src="./images/11.png" alt="Outcome-Driven UX Metrics" className="cohortSelector-image" />
            <span>Next Cohorts:</span>
            <div>

                {/* FIRST COHORT START */}
                <div className="cohort-1">
                    <div className="cohort-paragraphs">
                        <p><b>{COHORT_DATE_RANGE_NOVEMBER[0].start} - {COHORT_DATE_RANGE_NOVEMBER[0].end}</b></p>
                        <Link to="/novemberschedule">See Schedule</Link>
                    </div>
                    <button className="btn-shadow">  <Link to="/november" className="cohortSelector-button-link">Join Cohort</Link></button>
                </div>
                {/* FIRST COHORT END */}


                {/* SECOND COHORT START */}
                <div className="cohort-1">
                    <div className="cohort-paragraphs">
                    <p><b>{COHORT_DATE_RANGE_DECEMBER[0].start} - {COHORT_DATE_RANGE_DECEMBER[0].end}</b></p>
                        <Link to="/decemberschedule">See Schedule</Link>
                    </div>
                    <button className="btn-shadow">  <Link to="/december" className="cohortSelector-button-link">Join Cohort</Link></button>
                </div>
                {/* SECOND COHORT END */}



                {/* THIRD COHORT START */}
                <div className="cohort-1">
                    <div className="cohort-paragraphs">
                    <p><b>{COHORT_DATE_RANGE_JANUARY[0].start} - {COHORT_DATE_RANGE_JANUARY[0].end}</b></p>
                        <Link to="/januaryschedule">See Schedule</Link>
                    </div>
                    <button className="btn-shadow">  <Link to="/january" className="cohortSelector-button-link">Join Cohort</Link></button>
                </div>
                {/* THIRD COHORT END */}




            </div>
            <span className="mt-2">8 or more team members?</span>
            <br />
            <Link to="/teams">Explore private team courses</Link>
        </div>

    )
}