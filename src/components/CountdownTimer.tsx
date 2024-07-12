"use client";

// components/CountdownTimer.tsx
import { useEffect, useState } from "react";

interface CountdownTimerProps {
  endDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endDate }) => {
  const parseDate = (date: string) => {
    const [year, month, day] = date.split(".").map(Number);
    return new Date(year, month - 1, day, 23, 59, 59);
  };

  const calculateTimeLeft = () => {
    const difference = +parseDate(endDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const isTimeLeftZero =
    timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // console.log(timeLeft);

  return (
    <div className="flex space-x-4 text-xl justify-center p-1 bg-black text-prompt-green rounded-lg shadow-lg">
      {isTimeLeftZero ? (
        <div className="bg-black p-2 rounded-md shadow-inner">공 연 마 감</div>
      ) : (
        <>
          <div className="bg-black p-2 rounded-md shadow-inner">공 연 마 감</div>
          <div className="bg-black p-2 rounded-md shadow-inner">{timeLeft.days}일</div>
          <div className="bg-black p-2 rounded-md shadow-inner">
            {String(timeLeft.hours).padStart(2, "0")} : {String(timeLeft.minutes).padStart(2, "0")} :{" "}
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
