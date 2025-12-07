import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import coinPic from '../../PIC/coin.png'
import closeBtn from '../../ButtonPIC/CloseBtn.png'
import checkComp from '../../PIC/CheckComplete.png'
import checkINC from '../../PIC/checkINC.png'
import checkMrk from '../../PIC/checkMrk.png'
import goBtn from '../../ButtonPIC/GoBtn.png'
import { Link,  } from "react-router-dom";
function DailyGoals() {

  const navigate = useNavigate();
  const [coins,setCoins] = useState("10")
  const [earncoin,setEarnCoins] = useState("25")
  const [goal1coin,setGoal1Coins] = useState("10")
  const [goal2coin,setGoal2Coins] = useState("10")
  const [goal3coin,setGoal3Coins] = useState("5")
  return (
    <div>
      <div className='absolute inset-0 flex items-center justify-center  bg-black/50 z-50 '>
      <div className='bg-[#084E99] m-6 w-full h-auto p-5 gap-5 rounded-2xl border border-white'>


       {/* First layer coins and close */}
       <div className='flex flex-row justify-between '>
         {/* Coins */}
          <div  className="flex flex-row px-2  border rounded-full border-white  items-center gap-2 shadow-[inset_0_0_20px_rgba(0,0,0,0.4)]  mb-5 ">
              {/* Coin image */}
              <img
                  src={coinPic}
                  alt="coin"
                  className="w-12 h-12"
                  />
            
              {/* Number */}
                  <h1 className="font-LG pr-2 text-white text-xl"
                  >{coins}{setCoins}            
                  </h1>
          </div>
         {/* close */}
         <div>
            <img 
            src={closeBtn}
            alt="" 
            onClick={() => navigate(-1)}
            className='cursor-pointer'/>
         </div>
       </div>


        {/* second layer title and earn coin */}
        <div className='flex flex-col items-center justify-center  font-LG text-white'>
          <h1 className='text-4xl '>DAILY GOALS</h1>
          <div className='relative '>
            <img 
            src={coinPic} 
            alt="coin pic" 
            className='w-[68px] h-[68px]'/>
            <h1 className='text-lg absolute inset-7 left-0.5 text-gray-200  '>+{earncoin}{setEarnCoins}</h1>
          </div>
        </div>

        {/* Third layer check list NO LOGIC */}
        <div className=' flex flex-row gap-2 pb-2 pt-2 items-center justify-center'>
          <img 
          src={checkComp} 
          alt="check" 
          />
          <img 
          src={checkComp} 
          alt="check" 
          />
          <img 
          src={checkINC} 
          alt="check" 
          />
          
        </div>
        <h1 className='font-LG text-xs pb-2 text-white text-center'>Complete 3 tasks today and earn more coins.</h1>

        {/* fourth layer daily goals NO LOGIC */}
        <div className='flex flex-col items-center justify-center gap-2'>
          
          {/* GOAL 1 NO LOGIC */}
          <div className='relative bg-[#1C7CE2] p-1 rounded-2xl flex flex-row gap-5 w-[340px] items-center justify-center text-white'>

            {/* award NO LOGIC */}
             <div className='  bg-[#031B37] w-[55px]  items-center justify-center rounded-2xl '>
              <img 
              src={coinPic} 
              alt="coin pic" 
              className='w-[50px] h-[50px]'/>
              <h1 className='text-lg absolute font-LG inset-6 left-2 text-gray-200  '>+{goal1coin}{setGoal1Coins}</h1>
            </div>
            {/* task NO LOGIC */}
            <div>
              <h1 className='text-l font-extrabold'>Answer 5 questions</h1>
              <h1 className='text-l font-old'>diko pa ala kung pano</h1>
            </div>

            {/* Check NO LOGIC */}
            <div className='cursor-pointer'>
              <Link to= "/">
              <img src={goBtn}
              alt="" 
              className='w-[73px] h-[43px] '/>
              </Link>
            </div>

          </div>
          
          {/* GOAL 2 NO LOGIC */}
          <div className=' bg-[#1C7CE2] p-1 rounded-2xl flex flex-row gap-5 w-[340px] items-center justify-center text-white'>
            {/* award NO LOGIC */}
             <div className='relative right-4 bg-[#031B37] w-[55px]  items-center justify-center rounded-2xl '>
              <img 
              src={coinPic} 
              alt="coin pic" 
              className='w-[50px] h-[50px]'/>
              <h1 className='text-lg absolute font-LG inset-6 left-0.5 text-gray-200  '>+{goal1coin}{setGoal1Coins}</h1>
            </div>
            {/* task NO LOGIC */}
            <div>
              <h1 className='text-l font-extrabold'>Play mini game</h1>
              <h1 className='text-l font-old'>diko pa ala kung pano</h1>
            </div>

            {/* Check NO LOGIC */}
            <div>
              <img src={checkMrk}
              alt="" 
              className='w-[43px] h-9 '/>
            </div>

          </div>

          {/* GOAL 3 NO LOGIC */}
        </div>




       
      </div>
      </div>
    </div>
  )
}

export default DailyGoals