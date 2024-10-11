import React from "react";
import './VideoSeries.css'
import PurchaseBox from '../PurchaseBox/PurchaseBox';


export default function VideoSeries() {
    return (
        <section className="container video-series">
            <div>
                <h3>Can’t attend the course live? <br />
                    Purchase the Recorded Outcome-Driven UX Metrics Video Series.</h3>
                <p>We know that not everyone has the resources to join us live. That’s ok. You can purchase the UX Metrics to Drive Your Organization's video series.
                </p>
                <p>You can watch all nine sessions of the Outcome-driven UX Metrics Course broken up into two parts in our UX Strategy Essentials Library.</p>
                <span><b>What’s included for $227:</b></span>
                <ul>
                    <li>The lectures from all eight of the topic sessions and their notes.</li>
                    <li>The Outcome-driven UX Metrics Planning Workbook</li>
                    <li>Catch the lectures on your own schedule.</li>
                    <li>Access is for 90 days.</li>
                </ul>
            </div>
            <PurchaseBox
                src="./images/93.png"
                text="Outcome-Driven UX Metrics Video Series"
                buttonText="PURCHASE VIDEO SERIES"
            />
        </section>

    )


}