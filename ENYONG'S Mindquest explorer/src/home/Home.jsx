import './Home.css';
import React from 'react';
import infoPic from '../ButtonPIC/info.png';
import accPic from '../ButtonPIC/acc.png';
import settingPic from '../ButtonPIC/setting.png';
import scorePic from '../PIC/scorepic.png'
import earthPic from '../PIC/earth.png'
import coinPic from '../PIC/coin.png'
import plusPic from '../PIC/plus icon.png'
import depedPic from '../PIC/DepEd.png'
import minigamepic from '../PIC/MiniGameLogo.png'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-hidden p-5 flex flex-col items-center gap-5 ">


        {/* Buttons row */}
        <div className="flex flex-row justify-between w-full  items-start">
            {/* About button */}
            <Link to="/about">
            <img
            src={infoPic}
            alt="info"
            className="w-[50px] h-12" // about button size to
            />
            </Link>

            {/* Account & Settings buttons */}
            
            <div className="flex flex-row gap-4">
           <Link to="/account">
            <img
                src={accPic}
                alt="account"
                className="w-[50px] h-12" // account button size to
            />
           </Link>

            <Link to="/setting">
            <img
                src={settingPic}
                alt="settings"
                className="w-[50px] h-12" // setting button size
            />
            </Link>
            </div>
        </div>

        {/* Button Second Row */}
        <div className="flex justify-center mb-10 ">
            <div className="flex flex-row items-center gap-4">
                
                <div className='flex flex-row mb-5'>
                    {/* Score button */}
                    <img
                    src={scorePic}
                    alt="score"
                    className="w-10 h-10"
                    />

                    {/* Score placeholder */}
                    <h1 className="text-xl px-7 border-t-2 border-r-2 border-b-2 border-[#999999] rounded-tr-full rounded-br-full  text-white mt-0.5 mb-1 font-LG">
                    123
                    </h1>

                </div>
                
                {/* Earth button */}
                <img
                src={earthPic}
                alt="earth"
                className="w-[94px] h-[94px] "
                />

                {/* Coin button */}
                <div className="flex flex-row w-[135px] h-10 border rounded-full border-white px-2 items-center gap-2 shadow-inner shadow-black/30 mb-5  ">
                {/* Coin image */}
                <img
                    src={coinPic}
                    alt="coin"
                    className="w-10 h-10"
                />

                {/* Number */}
                <h1 className="font-LG text-white text-xl">
                    10
                </h1>

                {/* Plus icon */}
                <img
                    src={plusPic}
                    alt="plus"
                    className="w-8 h-8 mt-1"
                />
                </div>

            </div>
        </div>
        
        {/* Level and title and Play*/}
        <div className='flex justify-center items-center flex-col mb-10'>

            {/* Level */}
            <h1 className='flex justify-center font-LG text-2xl text-white mr-4'>
                Level 123
            </h1>

            {/* Title */}
           <img
            src={depedPic}
            alt="deped"
            className="w-[295px] h-[236px] " // Title Logo size to
             />

             {/* Play Button */}
             <button className="bg-[#30AD17] rounded-2xl font-LG text-white text-4xl w-[191px] h-[52px] shadow-inner shadow-black/80">
              PLAY
            </button>

        </div>

        {/* Mini Games*/}
        <div className='bg-[#021934] flex justify-center items-center flex-col rounded-3xl p-2 w-[373px] h-[174px] gap-5'>
            {/* Mini Game Logo */}
           <img
            src={minigamepic}
            alt="minigamelogo"
            className="w-[220px] h-[59px] items-center justify-center " // about button size to
             />
            {/* PWP | EC | LAQ buttons */}
            <div className='font-LG text-white flex justify-center gap-1'>
                <button className='bg-[#0A5090] text-sm px-6 p-1 rounded-tl-2xl rounded-bl-2xl'>PLAY WITH <br /> PARTNER</button>
                <button className='bg-[#0A5090] text-sm px-10 p-1 '>Earn <br /> Coins</button>
                <button className='bg-[#0A5090] text-sm px-6 p-1 rounded-tr-2xl rounded-br-2xl'>PLAY WITH <br /> PARTNER</button>
            </div>

        </div>

    </div>
  );
}

export default Home;
