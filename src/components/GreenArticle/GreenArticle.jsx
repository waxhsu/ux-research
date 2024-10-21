import React from "react";
import './GreenArticle.css'


export default function GreenArticle({ children }) {
    return (
        <section className="GreenArticle">
            <div className="GreenArticle-content">
                {children}
            </div>
        </section>

    )
}



//   <p>To get real results we can measure. We need to focus on the real needs of our customers and users.</p>
//                 <p>Everything we do and measure should be outcome-based. No more measuring for measuring sake. </p>