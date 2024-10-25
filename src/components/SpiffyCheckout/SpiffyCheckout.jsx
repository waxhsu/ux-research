import React, { useEffect, useRef } from 'react';
import ReactIframe from 'react-iframe';
import "./SpiffyCheckout.css"


export default function SpiffyCheckout() {

    return (
        <div className="spiffyCheckout-box">
            <h2>Join the October UX Metrics Cohort</h2>
            {/* <ReactIframe
                url="https://centercentre.spiffy.co/checkout/ux-metrics-oct"
                width="100%"
                height="800px"
            /> */}
            <spiffy-checkout url="https://centercentre.spiffy.co/checkout/ux-metrics-oct" ></spiffy-checkout>
            {/* <iframe
                src="https://centercentre.spiffy.co/checkout/ux-metrics-oct"
                width="100%"
                height="800px"
                frameBorder="0"
                allow="payment"
                title="Spiffy Checkout"
            /> */}
            {/* <ReactIframe
                url="https://blog.openreplay.com/"
                width="500px"
                height="300px"
            /> */}

        </div>


    )
}


