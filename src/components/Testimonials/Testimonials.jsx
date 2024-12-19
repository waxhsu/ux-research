import React from "react";
import './Testimonials.css';


export default function Testimonials({ children }) {
    return (
        <section className="testimonials-container">
            <div className="testimonials-content">
                <div className="testimonials-test">
                    <img src="images/star.png" alt="star" className="testimonials-star" />
                    {children}
                </div>
            </div>



            {/* <hr className="divider" /> */}
{/* 
            <div className="testimonials-content">
                <div className="testimonials-test">
                    <img src="images/star.png" alt="star" className="testimonials-star" />
                    <p>“After the first session, I was incredibly inspired by topics like “How to translate research findings into executive’s language,” “Strategic research that goes along the lines of where the business is heading,” and “change focus from output to outcome.”
                    </p>
                    <p>“I would definitely recommend this for any UX leader or UXer looking to make a change.”
                    </p>
                <span><strong>N.K., Lead Product Designer</strong></span>
                </div>
            </div> */}
        </section>

    )

}