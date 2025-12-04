import React, {useState} from 'react'
import ScienceBG from './Sciencebackground/ScienceBG.png'
import ReturnPic from '../../../ButtonPIC/returnBtn.png'
import settingPic from '../../../ButtonPIC/setting.png';
import coinPic from './Sciencebackground/coin2.png'
import plusPic from '../../../PIC/plus icon.png'

import { Link, useNavigate, useLocation } from "react-router-dom";


function ScinceQuiz() {

    const [subject, setSubject] = useState("Science") 
    const [coin, setCoin] = useState("500") 

    const navigate = useNavigate();
    const location = useLocation();
  return (
    <div
    className='w-screen h-screen bg-cover bg-center p-6 '
    style={{backgroundImage:`url(${ScienceBG})`}}
    >
            
    {/* return botton & Settings buttons */}
      <div className=' flex justify-between pb-10 '>
        {/* return botton  */}
           <Link to= "/">
             <img 
              src={ReturnPic} 
              alt="" 
              className='w-[50px] h-12'/>
           </Link>
        {/*  Settings buttons */}
            <img
             src={settingPic}
             alt="settings"
             className="w-[50px] h-12 cursor-pointer" // setting button size
             onClick={() => navigate("/setting", { state: { backgroundLocation: location } })}/>
      </div>

    {/* subject and money */}
   <div className='flex justify-between pb-10 '>
      {/* subject  */}
        <div 
        className='  bg-[#084E99] shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] cursor-pointer  w-[190px] h-10 flex justify-center items-center rounded-full '>
            <h1 
            className='text-lg font-IN text-white font-bold'>
            {subject}{setSubject}
            </h1>
        </div>
      {/* Coins */}
        <div className=" bg-[#084E99] shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] cursor-pointer space-x-2 w-[135px] h-10 flex justify-center items-center rounded-full  ">
                {/* Coin image */}
                <img
                    src={coinPic}
                    alt="coin"
                    className="w-7 h-7 "
                />

                {/* Number */}
                <h1 className="font-IN text-white text-xl">
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

    </div>
  )
}

export default ScinceQuiz