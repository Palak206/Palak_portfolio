import React from "react";
import "./testimonials.css";
export default function Testimonials() {
    const testimonials = [
        {
            name: "Nandini",
            text:
                "She is incredibly awesome, I hired her and when She delivered, I honestly fell in love with the project. She is indeed a great student."
        },
        {
            name: "Vishnu",
            text:
                "She is a fast-learner, that's the best quality of her, She has done the project before the timeline. She is a best candidate in her team"
        },
        {
            name: "Abhishek",
            text:
                "She has done a great job in her internship period. She is a quick learner,We are very proud to have her in our company ."
        }
    ];
    return (
        <>
            <div>
                <div className="row mx-5">
                    {testimonials.map((value) => {
                        return (
                            <div className="col-lg-4 col-sm-12 col-md-6 my-4">
                                <div className="card shadow testimonail-card d-flex flex-column">
                                    <span className="description">{value.text} </span>
                                    <span className="stars">⭐⭐⭐⭐⭐</span>
                                    <span className="name">{value.name}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}