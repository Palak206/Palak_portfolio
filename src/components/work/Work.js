import React from "react";
import "./work.css";
export default function Work() {
    return (
        <>
            <div className="work-inside-new mx-2 my-4">
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                        <span className="company-name">Internship Studio</span>
                        <span className="year-passedout">Jan 2022-Feb 2022</span>
                    </div>
                </div>

                <div className="d-flex flex-column">
                    <span className="position">Website Designer</span>
                    <span className="description-position">
                        <ul>
                            <li>
                                {" "}
                                Created an E-commerce website allows users to buy and sell tangible goods,
                                digital products or services online .
                            </li>
                            <li>
                                {" "}
                                Using HTML , CSS , JavaScript and BootStrap.
                            </li>

                        </ul>
                    </span>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <span className="company-name">Internshala</span>
                    <span className="year-passedout">Sep 2021-Feb 2021</span>
                </div>
                <div className="d-flex flex-column">
                    <span className="position">Internshala Student Partner-24</span>
                    <span className="description-position">
                        <ul>
                            <li>
                                {" "}
                                In this program, I promoted internshala and its products
                                and also conducted a talk-drive for students to learn
                                about how internships play a very important role in our career.
                            </li>


                        </ul>
                    </span>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <span className="company-name">ACM-RGTU</span>
                    <span className="year-passedout">April 2021-Dec 2021</span>
                </div>
                <div className="d-flex flex-column">
                    <span className="position">Vice Chair Person</span>
                    <span className="description-position">
                        <ul>
                            <li>
                                {" "}
                                I was working with 11 team members in it,
                                and organized many competitions ,workshops,and coding-contests for college students.

                            </li>


                        </ul>
                    </span>
                </div>
            </div>
        </>
    );
}
