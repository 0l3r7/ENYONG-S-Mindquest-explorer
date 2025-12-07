
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import HomeBtn from '../../ButtonPIC/HomeBtn.png'
import coinPic from '../../PIC/coin.png'
import plusPic from '../../PIC/plus icon.png'
import NextQuestionBtn from '../../ButtonPIC/NextQuestionBtn.png'

function NextQuestion() {

const [coin, setCoin] = useState("500");  
const [rewardCoin, setrewardCoin] = useState("3")

  return (
    <div 
    className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 z-50">
        <div className="bg-[#084E99] border-2 border-white rounded-4xl 
                        w-[396px] h-auto flex flex-col p-4 space-y-5">

            {/* ----------------------------
                First layer... Home and Coin
            ---------------------------- */}
            <div className='flex justify-between'>

                {/* Home button */}
                <Link to={"/"}>
                    <img src={HomeBtn} alt="" />
                </Link>
                
                {/* Coin button */}
                    <div className="flex flex-row w-[135px] bg-[#084E99] shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] h-10 border-2 rounded-full border-white px-2 items-center gap-2   mb-2  ">
                            {/* Coin image */}
                            <img
                                src={coinPic}
                                alt="coin"
                                className="w-10 h-10"
                            />

                            {/* Number */}
                            <h1 className="font-LG text-white text-xl">
                                {coin}
                            </h1>

                            {/* Plus icon */}
                            <img
                                src={plusPic}
                                alt="plus"
                                className="w-8 h-8 mt-1 cursor-pointer"
                                onClick={() => navigate("/dailyGoals", { state: { backgroundLocation: location } })}
                            />
                    </div>

            </div>

            {/* ----------------------------
                Second layer... 
                Level Up and +Coin Reward
            ---------------------------- */}
            <div className='flex flex-col  justify-center item-center'>
                    <h1 className='font-LG text-white text-center text-4xl'>
                            LEVEL UP
                    </h1>

                    <div className='relative items-center flex justify-center '>
                            <img 
                            src={coinPic} 
                            alt="coin pic" 
                            className='w-[55px] h-[55px]'/>
                            <h1 className='text-xl font-LG text-center absolute inset-5 left-0.5 text-gray-200  '>
                                +{rewardCoin}</h1>
                    </div>
                        
            </div>
                
            {/* ----------------------------
                Third layer... 
                Spinning umbrella and
                Right Answer
            ---------------------------- */}





            {/* ----------------------------
                Fourth layer... 
                Next Question Button
            ---------------------------- */}
            <div className=' flex justify-center items-center'>
                <img 
                src={NextQuestionBtn} 
                alt="Next Question Button" 
                className='cursor-pointer'/>
            </div>


        </div>
        
    </div>
  )
}

export default NextQuestion