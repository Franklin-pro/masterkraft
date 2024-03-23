import React from "react";
import kk from "../assets/kkk.png";

const CountDown=()=>{
    return(
        <>
        <div className="home-bottom">
                <div className="home-bottom-img">
                    <img src={kk} alt="" />
                </div>
                <div className="home-bottom-txt">
                    <h2><span>Holiday Course</span> Countdown</h2>
                    <p>Exciting learning adventures for festive seasons!</p>
                </div>
                <div className="home-bottom-date">
                    <div className="days">
                        <h1>69</h1>
                        <p>Days</p>
                    </div>
                    <p className="colon">:</p>
                    <div className="hours">
                        <h1>09</h1>
                        <p>hours</p>
                    </div>
                    <p className="colon">:</p>
                    <div className="minutes">
                        <h1>59</h1>
                        <p>minutes</p>
                    </div>
                    <p className="colon">:</p>
                    <div className="seconds">
                        <h1>60</h1>
                        <p>seconds</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CountDown