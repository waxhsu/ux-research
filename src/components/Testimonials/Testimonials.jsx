import React from "react";
import './Testimonials.css';


export default function Testimonials({ }) {
    return (
        <section className="testimonials-container">
            <div className="testimonials-content">
                <div className="testimonials-test">
                    <img src="images/star.png" alt="star" className="testimonials-star" />
                    <p>“Each day’s takeaways are built upon the next to thread the story and explain a mature way of looking at human-centric design and user experience to the product team. I connected with new friends and members, which was an unexpected bonus!”
                    </p>
                <span><strong>T.H., Design Consultant</strong></span>
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