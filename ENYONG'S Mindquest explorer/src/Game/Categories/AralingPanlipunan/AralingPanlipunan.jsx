import React from 'react'
import ApLogo from '../CategoriesLogo/ApLogo.png'

function AralingPanlipunan() {
  return (
     <div className="min-h-screen bg-[#081E41] flex flex-col  text-white">
              <div className='font-FD flex flex-col items-center justify-center m-10  '>
                <div className='flex flex-col items-center justify-center gap-14'>
                  <h1 className='text-xl'>CATEGORY</h1>
                  <h1 className='text-4xl text-center'>ARALING PANLIPUNAN</h1>
                </div>
        
                <div>   
                  <img src={ApLogo} 
                  alt="Araling Panlipunan logo" 
                  className='pt-25'/>
        
                </div>
        
              </div>
        </div>
  )
}

export default AralingPanlipunan