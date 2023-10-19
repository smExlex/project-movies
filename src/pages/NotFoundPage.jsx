import { Link } from "react-router-dom";
import React from "react";

import "./NotFoundPage.css";

export const NotFoundPage = () => {
    return (
        <div className="not-found">
            <div className="not-found-wrapper">
                <h2>
                    Oh, no! It seems like the page you're trying to access does
                    not exist...! 😭
                </h2>
                <Link to="/" className="back">⬅ GO BACK</Link>
            </div>
        </div>
    );
};
