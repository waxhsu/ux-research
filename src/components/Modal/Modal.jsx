import React from "react"
import "./Modal.css"

export default function Modal() {
    return (

        <div className="modal">
            <img src="./images/11.png" alt="Outcome-Driven UX Metrics" className="modal-image" />
            <span>Next Cohorts:</span>
            {/* <ul>
                <li><div className="modal-spans"><span>Oct 28 - Nov 21 </span> <br /><span>See Schedule</span></div> <button>Join Cohort</button></li>
                <li><div className="modal-spans"><span>Oct 28 - Nov 21 </span> <br /><span>See Schedule</span></div> <button>Join Cohort</button></li>
                <li><div className="modal-spans"><span>Oct 28 - Nov 21 </span> <br /><span>See Schedule</span></div> <button>Join Cohort</button></li>
            </ul> */}

            <div>
                <div className="cohort-1">
                    <div className="cohort-paragraphs">
                        <p><b>Oct 28 - Nov 21</b></p>
                        <p><a href="">See Schedule</a></p>
                    </div>
                    <button className="btn-shadow">Join Cohort</button>
                </div>
                <div className="cohort-1">
                    <div className="cohort-paragraphs">
                        <p> <b>Nov 18 - Dec 19</b></p>
                        <p><a href="">See Schedule</a></p>
                    </div>
                    <button className="btn-shadow">Join Cohort</button>
                </div>
                <div className="cohort-1">
                    <div className="cohort-paragraphs">
                        <p><b>Dec 10 - Jan 17</b></p>
                        <p><a href="">See Schedule</a></p>
                    </div>
                    <button className="btn-shadow" > <a href=""></a>Join Cohort</button>
                </div>


            </div>
            <span>8 or more team members?</span>
            <br />
            <span><a href="">Explore private team courses</a></span>
        </div>

    )
}