import React from 'react'
import dicesbig from '../assets/dicesbig.png'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

function Mainpage() {
  return (
    <>
        <div className='mainpage flex items-center justify-center w-screen mt-24'>

            <div className="mainleft w-[30%]">
                    <img src={logo} alt="" width='300px' className='rounded-[50%]' />
            </div>

            <div className="mainright w-[50%] flex flex-col justify-center items-center">
                    <h1 className='font-extrabold text-7xl mb-10'>DICE GAME</h1>
                    <Link to="/home" className='bg-black text-white pt-2 pb-2 pr-7 pl-7 rounded-lg'>Get started</Link>

                    <div className='mainrule bg-[#FBF1F1] p-5 mb-7 mt-5'>
                        <h1 className='font-extrabold text-[15px] m-4'>How to play dice game</h1>
                        <ul className='list-disc'>
                            <li className='ml-4 mr-5 mt-[2px] text-[10px] font-bold '>Select any number</li>
                            <li className='ml-4 mr-5 mt-[2px] text-[10px] font-bold'>Click on dice image</li>
                            <li className='ml-4 mr-5 mt-[2px] text-[10px] font-bold'>After click on  dice  if selected number is equal to dice number you will get same point as dice</li>
                            <li className='ml-4 mr-5 mt-[2px] text-[10px] font-bold'>If you get wrong guess then  2 point will be dedcuted</li>
                        </ul>
                    </div>
            </div>

        </div>
    </>
  )
}

export default Mainpage