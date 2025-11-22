import React from 'react'
import ReturnPic from '../../ButtonPIC/returnBtn.png'
import LogoutPic from '../../ButtonPIC/logoutBtn.png'
import profilePic from '../../PIC/profile.png'
import { Link, useNavigate, useLocation } from "react-router-dom";

function account() {
  return (
   
    <div className='m-6 '>
      {/* return botton */}
      <div className=''>
           <Link to= "/home">
             <img 
              src={ReturnPic} 
              alt="" 
              className='w-[50px] h-12'/>
           </Link>
      </div>

      <div className=' p-5 flex flex-col  items-center justify-center'>
        <img 
        src={profilePic} 
        alt="" 
        className='w-[138px] h-[138px]'/>
      </div>

      <div>
        <h1 className='font-LG text-4xl text-white'>
          Edit Profile
        </h1>

        <div className="">
          <form className="flex flex-col text-white">
            <label htmlFor="name">Full name</label>
            <input type="texts" placeholder='Juan Dela Cruz' 
            className='border-b-2 text-xl focus:outline-none focus:ring-2 focus:ring-blue-400' 
            />
          </form>
          
        </div>


      </div>




    </div>
  )
}

export default account