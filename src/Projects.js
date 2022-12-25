import React from "react";

export default function Projects() {
    return (
        <>
            <div className="d-flex flex-column">
                <div className="education-one my-4 justify-content-between d-flex flex-row">
                    <div className="d-flex flex-column new-one">
                        <span className="university-name">E-commerce Website </span>
                        <span className="university-degree">HTML, CSS, JS, BootStrap </span>
                    </div>{" "}
                    <div>
                        <span className="year-passedout"><a href="https://palak206.github.io/Ecommerce-website/"> Project-Link</a></span>
                    </div>

                </div>
                <div className="education-one my-4 justify-content-between d-flex flex-row">
                    <div className="d-flex flex-column new-one">
                        <span className="university-name">Indian Railway System </span>
                        <span className="university-degree">Python</span>
                    </div>{" "}
                    <div>
                        <span className="year-passedout"><a href="https://github.com/Palak206/Indian-railway-system"> Project-Link</a></span>
                    </div>

                </div>

            </div>
        </>
    );
}
