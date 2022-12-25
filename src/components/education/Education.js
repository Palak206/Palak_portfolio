import React from "react";
import "./education.css";
export default function Education() {
    return (
        <>
            <div className="d-flex flex-column">
                <div className="education-one my-4 justify-content-between d-flex flex-row">
                    <div className="d-flex flex-column new-one">
                        <span className="university-name">
                            School Of Information Technology RGPV Bhopal{" "}
                        </span>
                        <span className="university-degree">
                            Bachelors of Technology in Computer Science Business System{" "}
                        </span>
                    </div>{" "}
                    <div>
                        <span className="year-passedout">2020-2024 </span>
                    </div>
                </div>

            </div>
        </>
    );
}