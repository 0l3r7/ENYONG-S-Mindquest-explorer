import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReturnBTN from "../../ButtonPIC/returnBtn.png";
import EarnCoinLogo from './earCoinPic/EarnCoinLOGO.png'
import PlayBTN from './earCoinPic/EarnCoinPlayBTN.png'
import Trophy from './earCoinPic/EmptyTrophy.png'
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

function earnCoin() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);

  const monthName = currentDate
    .toLocaleString("default", { month: "long" })
    .toUpperCase();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <div className="min-h-screen flex flex-col">


        {/* RETURN | LOGO | TROPHY */}
        <div className="p-3 space-y-5">

            {/* Return BTN */}
            <Link to={"/"}>
                <img 
                    src={ReturnBTN}
                    alt="" 
                />
            </Link>

            {/*Earn Coin LOGO*/}
            <div className="flex justify-center items-center pt-5">
                <img 
                    src={EarnCoinLogo} 
                    alt="EARN COIN LOGO" 
                />
            </div>

            {/*Trophy*/}
            <div className="flex justify-center items-center">
                <img 
                    src={Trophy} 
                    alt="TROPHY"
                    className="" 
                />
            </div>

            
        </div>



        {/* Calendar */}
        <div className="mt-auto w-full h-[60vh] overflow-hidden bg-white shadow-2xl">
            
            <div className="p-6 w-full font-LG text-xl">
            <div className="flex items-center justify-center gap-6 mb-4  text-gray-800">
                <button onClick={prevMonth} className="">
                ‹
                </button>
                <span>{monthName}</span>
                <button onClick={nextMonth} className="">
                ›
                </button>
            </div>

            <div className="grid grid-cols-7 gap-5 text-center   ">
                {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const isToday =
                    day === today.getDate() &&
                    month === today.getMonth() &&
                    year === today.getFullYear();

                const isPast =
                    new Date(year, month, day) <
                    new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    today.getDate()
                    );

                return (
                    <div
                    key={day}
                    className={`w-9 h-9 flex items-center justify-center rounded-full text-xl
    ${
    isToday
        ? "bg-[#2FAA17] text-white"
        : isPast
        ? "text-[#30AD17]"
        : "text-[#084A97]"
    }`}
                    >
                    {day}
                    </div>
                );
                })}
            </div>

            {/* Play Button */}
            <div className="mt-8 flex justify-center">
                <img 
                    src={PlayBTN} 
                    alt="Play"
                    className="cursor-pointer active:scale-95" 
                />
            </div>

            </div>
        </div>
    </div>
  );
}

export default earnCoin;
