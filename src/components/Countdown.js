import React, { useEffect, useState } from "react";
import "../style/Countdown.css";
import CanvasComponent from "./CanvasComponent";


function CountdownTracker({ label, value }) {
  const [currentValue, setCurrentValue] = useState(value);


  useEffect(() => {
    const top = document.querySelector(`.${label} .card__top`);
    const bottom = document.querySelector(`.${label} .card__bottom`);
    const back = document.querySelector(`.${label} .card__back`);
    const backBottom = document.querySelector(
      `.${label} .card__back .card__bottom`
    );


    const formattedValue = ("0" + value).slice(-2);
    if (formattedValue !== currentValue) {
      if (currentValue >= 0) {
        back.setAttribute("data-value", currentValue);
        bottom.setAttribute("data-value", currentValue);
      }
      setCurrentValue(formattedValue);
      top.innerText = formattedValue;
      backBottom.setAttribute("data-value", formattedValue);


      const el = document.querySelector(`.${label}`);
      el.classList.remove("flip");
      void el.offsetWidth; // trigger reflow
      el.classList.add("flip");
    }
  }, [value, currentValue, label]);


  return (
    <span className={`flip-clock__piece ${label}`}>
      <b className="flip-clock__card card">
        <b className="card__top"></b>
        <b className="card__bottom"></b>
        <b className="card__back">
          <b className="card__bottom"></b>
        </b>
      </b>
      <span className="flip-clock__slot">{label}</span>
    </span>
  );
}


function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());
  return {
    Total: t,
    Days: Math.floor(t / (1000 * 60 * 60 * 24)),
    Hours: Math.floor((t / (1000 * 60 * 60)) % 24),
    Minutes: Math.floor((t / 1000 / 60) % 60),
    Seconds: Math.floor((t / 1000) % 60),
  };
}


function Countdown({ targetDate, onComplete }) {
  const [time, setTime] = useState(getTimeRemaining(targetDate));


  useEffect(() => {
    const updateClock = () => {
      const updatedTime = getTimeRemaining(targetDate);
      if (updatedTime.Total < 0) {
        onComplete();
        clearInterval(interval);
      } else {
        setTime(updatedTime);
      }
    };


    const interval = setInterval(updateClock, 500);
    return () => clearInterval(interval);
  }, [targetDate, onComplete]);


  return (
    <div className="flip-clock">
      {["Days", "Hours", "Minutes", "Seconds"].map((unit) => (
        <CountdownTracker key={unit} label={unit} value={time[unit]} />
      ))}
    </div>
  );
}


export default function CountdownApp() {
  const targetDate = new Date("2025-01-29T23:59:59"); // Set your target date here


  const handleComplete = () => {
    alert("Countdown complete");
  };


  return (
    <div className="countdown-heading-container">
      <h1 className="cd-heading">Hold Your Excitement For</h1>
      <div className="countdown-container">
        <CanvasComponent />
        <div className="countdown-overlay">
          <Countdown targetDate={targetDate} onComplete={handleComplete} />
        </div>
      </div>
    </div>
  );


}


