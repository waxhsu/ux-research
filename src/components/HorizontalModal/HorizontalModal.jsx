import React, { useState, useEffect } from 'react';
import "./HorizontalModal.css"
import { Link } from "react-router-dom"
import { COHORT_DATE_RANGE_OCTOBER } from '../Calendar/CalendarData'
import { COHORT_DATE_RANGE_NOVEMBER } from '../Calendar/CalendarData'
import { COHORT_DATE_RANGE_DECEMBER } from '../Calendar/CalendarData'
import { COHORT_DATE_RANGE_JANUARY } from '../Calendar/CalendarData'

export default function HorizontalModal() {

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

        <div className="horizontalModal">

            <div className="horizontalModal-container">
            <span><b>{isMobile ? "Next Cohorts" : "Check Out Schedules for Future Dates"}:</b></span>

                <div className="cohort-1-container">
                    {/* <div className="horizontal-cohort-1">
                        <div className="horizontal-cohort-paragraphs">
                            <p><b>
                            {COHORT_DATE_RANGE_OCTOBER[0].start} - {COHORT_DATE_RANGE_OCTOBER[0].end}
                            </b></p>
                            <Link to="/octoberschedule">See Schedule</Link>
                        </div>
                        <button className="btn-shadow">
                            <Link to="/october" className="modal-button-link">Join Cohort</Link>
                        </button>
                    </div> */}

                    <div className="horizontal-cohort-1">
                        <div className="horizontal-cohort-paragraphs">
                            <p><b>
                            {COHORT_DATE_RANGE_DECEMBER[0].start} - {COHORT_DATE_RANGE_DECEMBER[0].end}
                            </b></p>
                            <Link to="/decemberschedule">See Schedule</Link>
                        </div>
                        <button className="btn-shadow">
                            <Link to="/december" className="modal-button-link">Join Cohort</Link>
                        </button>
                    </div>

                    <div className="horizontal-cohort-1">
                        <div className="horizontal-cohort-paragraphs">
                            <p><b>
                            {COHORT_DATE_RANGE_JANUARY[0].start} - {COHORT_DATE_RANGE_JANUARY[0].end}
                            </b></p>
                            <Link to="/januaryschedule">See Schedule</Link>
                        </div>
                        <button className="btn-shadow">
                            <Link to="/january" className="modal-button-link">Join Cohort</Link>
                        </button>
                    </div>

                </div>
            </div>
            {/* <Link to="/teams">Explore private team courses</Link> */}
        </div>

    )
}