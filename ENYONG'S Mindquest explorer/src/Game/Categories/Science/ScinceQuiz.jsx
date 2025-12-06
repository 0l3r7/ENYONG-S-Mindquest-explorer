import React, {useState} from 'react'
import ScienceBG from './Sciencebackground/ScienceBG.png'
import ReturnPic from '../../../ButtonPIC/returnBtn.png'
import settingPic from '../../../ButtonPIC/setting.png';
import coinPic from '../../../PIC/coin.png'
import plusPic from '../../../PIC/plus icon.png'
import HintBtn from '../../../ButtonPIC/HintBtn.png'
import QuizCard from '../../../PIC/QuizCard.png'

import { Link, useNavigate, useLocation } from "react-router-dom";


function ScinceQuiz() {

    const [subject, setSubject] = useState("SCIENCE") 
    const [coin, setCoin] = useState("500") 
    const [difficulity, setDifficulity] = useState("EASY") 
    const [hint, setHint] = useState("10") 

    const [questionNumber, setQuestionNumber] = useState("1") 
    const [question, setQuestion] = useState("Which planet in the Solar System is the smallest?") 
    const [choiceA, setChoiceA] = useState("Pluto") 
    const [choiceB, setChoiceB] = useState("Mercury") 
    const [choiceC, setChoiceC] = useState("Earth") 
    const [choiceD, setChoiceD] = useState("Mars") 

    const navigate = useNavigate();
    const location = useLocation();
  return (
    <div
    className='w-[300px]l min-h-screen bg-cover bg-center bg-no-repeat p-6 item-center'
    style={{backgroundImage:`url(${ScienceBG})`}}
    >
            
      {/* return botton & Settings buttons */}
        <div className=' flex justify-between pb-2 '>
          {/* return botton  */}
            <Link to= "/">
              <img 
                src={ReturnPic} 
                alt="" 
                className='w-[300px]px] h-12'/>
            </Link>
          {/*  Settings buttons */}
              <img
              src={settingPic}
              alt="settings"
              className="w-[50px] h-12 cursor-pointer" // setting button size
              onClick={() => navigate("/setting", { state: { backgroundLocation: location } })}/>
        </div>

        {/* subject  */}
        <div className='flex justify-center pb-4'>
          <div 
            className='  bg-[#081E41] border-2 border-white shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] cursor-pointer  px-19 h-10 flex justify-center items-center rounded-full '>
              <h1 
              className=' font-IN text-white font-bold'>
              {subject}{setSubject}
              </h1>
          </div>
        </div>
      

      {/* subject and money */}
        <div className='flex justify-between  '>

          {/* Dificulity */}
          <div 
            className='  bg-[#081E41] border-2 border-white shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] cursor-pointer  px-3 h-10 flex justify-center items-center rounded-full '>
              <h1 
              className=' font-IN text-white font-bold'>
              {difficulity}
              </h1>
          </div>

        {/* Coin button and Hint */}
        <div>
              
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

          {/* Hint button */}
          <div className='flex justify-end cursor-pointer'>
            <div className="flex p-0 flex-row justify-center bg-[#299C2F] shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] 
                            border-2 rounded-full border-white px-1 items-center  mb-5 w-auto ">
                    {/* Coin image */}
                    <img
                        src={HintBtn}
                        alt="hint"
                        className="w-9 h-9"
                    />

                    {/* Number */}
                    <div className='bg-black/50 rounded-4xl px-2 items-center py-1 flex justify-center'>
                    <img
                        src={coinPic}
                        alt="hint"
                        className="w-6 h-6"/>
                      <h1 className="font-LG text-center text-white text-sm ">
                          {hint}
                      </h1>
                    </div>
                    
            </div>
          </div>

        </div>

        </div>

      
      <div className='flex flex-col justify-center'>
          {/* quiz placeholder */} 
          <div className='flex justify-center items-center pb-4'>
            {/* Question Card */}
            <img 
            src={QuizCard} 
            alt="Quiz Card" 
            className='w-[293px] sm:w-[360px] md:w-[393px] h-auto'/>
            {/* Level circle */}
                <div
                  className="absolute top-60 left-1/2 -translate-x-1/2
                            w-[72px] h-[72px] rounded-full
                            flex items-center justify-center
                            text-white text-2xl font-FD
                            "
                >
                  {questionNumber}
                </div>

            {/* Question text */}
              <div className='flex justify-center pt-8 absolute'>
                <h1 className=" px-6 p-6 w-[238px] items-center 
                              text-white text-center text-xl font-FD">
                  {question}
                </h1>
              </div>

              
              
          </div>

        {/* Choices */}
        <div className="flex flex-col items-center space-y-2 mx-auto ">
          
          {/* Choice A */}
          <div className="relative w-[300px] md:w-[400px]"> 
            {/* Rounded label */} 
              <div className="relative flex items-center h-12  rounded-full 
                            bg-[#004C99] shadow-[inset_0_0_15px_rgba(0,0,0,0.6)]
                            text-white text-xl font-FD cursor-pointer">
                    <h1 className="absolute border-9 rounded-full p-2 px-4 border-[#0C0A1F]/99 left-0">A</h1> 
                    <h1 className="mx-auto">{choiceA}</h1>
                </div>
          </div>

          {/* Choice B */}
          <div className="relative w-[300px] md:w-[400px]"> 
            {/* Rounded label */} 
              <div className="relative flex items-center h-12  rounded-full 
                            bg-[#004C99] shadow-[inset_0_0_15px_rgba(0,0,0,0.6)]
                            text-white text-xl font-FD cursor-pointer">
                    <h1 className="absolute border-9 rounded-full p-2 px-4 border-[#0C0A1F]/99 left-0">B</h1> 
                    <h1 className="mx-auto">{choiceB}</h1>
                </div>
          </div>


          {/* Choice C */}
          <div className="relative w-[300px] md:w-[400px]"> 
            {/* Rounded label */} 
              <div className="relative flex items-center h-12  rounded-full 
                            bg-[#004C99] shadow-[inset_0_0_15px_rgba(0,0,0,0.6)]
                            text-white text-xl font-FD cursor-pointer">
                    <h1 className="absolute border-9 rounded-full p-2 px-4 border-[#0C0A1F]/99 left-0">C</h1> 
                    <h1 className="mx-auto">{choiceC}</h1>
                </div>
          </div>


          {/* Choice D */}
          <div className="relative w-[300px] md:w-[400px]"> 
            {/* Rounded label */} 
              <div className="relative flex items-center h-12  rounded-full 
                            bg-[#004C99] shadow-[inset_0_0_15px_rgba(0,0,0,0.6)]
                            text-white text-xl font-FD cursor-pointer">
                    <h1 className="absolute border-9 rounded-full p-2 px-4 border-[#0C0A1F]/99 left-0">D</h1> 
                    <h1 className="mx-auto">{choiceD}</h1>
                </div>
          </div>

        </div>

      </div>

    </div>

  )
}

export default ScinceQuiz