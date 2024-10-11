import React from "react";

import "./PurchaseBox.css"


export default function PurchaseBox({ src, text, buttonText }) {
    return (
        <div className="purchase-box">

            <img src={src} alt="computer" />
            <p><b>{text}</b></p>
            <button className="btn-shadow btn purchase-box-button">{buttonText}</button>

        </div>


    )


}