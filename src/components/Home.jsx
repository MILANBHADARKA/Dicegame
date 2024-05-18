import React, { useState, useEffect } from 'react'
import one from '../assets/simple_dice/one.svg'
import two from '../assets/simple_dice/two.svg'
import three from '../assets/simple_dice/three.svg'
import four from '../assets/simple_dice/four.svg'
import five from '../assets/simple_dice/five.svg'
import six from '../assets/simple_dice/six.svg'
import dicesbig from '../assets/dicesbig.png'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

function Home() {

    const [mainpage, setMainpage] = useState(true)

    const [mode, setMode] = useState('hard')

    const [showrules, setShowrules] = useState(false)

    const [number, setNumber] = useState(0)
    const [dienumber, setDienumber] = useState(0)

    const [score, setScore] = useState(0)

    const [isRolling, setIsRolling] = useState(false)
    const [message, setMessage] = useState('');

    const togglerules = () => {
        setShowrules(!showrules)
    }

    const handlereset = () => {
        setScore(0)
        setNumber(0)
        setDienumber(0)
    }


    const handledies = async () => {

        if(number == 0)
        {
            alert('Please select any number')
            return;
        }

        setIsRolling(true)
        setTimeout(() => setIsRolling(false), 300)
        
        const randomnumber1 = Math.floor(Math.random() * 6) + 1;
        console.log(`random1 number is ${randomnumber1}`)


        if(mode == 'easy')
        {
            const randomnumber2 = Math.floor(Math.random() * 4) + 1;
            console.log(`random2 number is ${randomnumber2}`)

            if(randomnumber2 == 1 || randomnumber2 == 4)     //for easy win of user
            {
                setDienumber(number)
            }
            else
            {
                setDienumber(randomnumber1);
            }
        }
        else
        {
            setDienumber(randomnumber1);
        }

    }

    useEffect(() => {
        if(number == dienumber)
        {
            setTimeout(() => setScore(score + dienumber), 600); 
            setMessage(`+${dienumber}`);
        }
        else
        {
            setTimeout(() => setScore(score - 2), 600);
            setMessage('-2');
        }

        setTimeout(() => setMessage(''), 500);

        setNumber(0)

    }, [dienumber])



  return (

    <>
        {mainpage && <div className='mainpage flex items-center justify-center w-screen mt-24'>

            <div className="mainleft w-[30%]">
                    <img src={logo} alt="" width='300px' className='rounded-[50%]' />
            </div>

            <div className="mainright w-[50%] flex flex-col justify-center items-center">
                    <h1 className='font-extrabold text-7xl mb-10'>DICE GAME</h1>
                    <button onClick={ () => {setMainpage(!mainpage)}} className='bg-black text-white pt-2 pb-2 pr-7 pl-7 rounded-lg'>Get Started</button>

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

        </div>}


        {mainpage || <div className="w-screen main flex flex-col gap-[50px]">

            <div className='hometop flex justify-around items-center'>

                <div className="score">
                    <h1>Total score</h1>
                    <div className='flex justify-center items-center'>
                        <h1 className='text-center font-bold text-5xl'>{score}</h1>
                        <div className="message">{message}</div>
                    </div>
                </div>

                <div className="homeboxes flex justify-center items-center">
                    <div onClick={ () => {setNumber(1)}} className={` ${ number == 1 ? "bg-black text-white" : "bg-white text-black"} homebox border-[1px] border-black rounded-[50%] pt-2 pb-2 pr-4 pl-4 m-2 font-bold cursor-pointer`}>1</div>
                    <div onClick={ () => {setNumber(2)}} className={` ${ number == 2 ? "bg-black text-white" : "bg-white text-black"} homebox border-[1px] border-black rounded-[50%] pt-2 pb-2 pr-4 pl-4 m-2 font-bold cursor-pointer`}>2</div>
                    <div onClick={ () => {setNumber(3)}} className={` ${ number == 3 ? "bg-black text-white" : "bg-white text-black"} homebox border-[1px] border-black rounded-[50%] pt-2 pb-2 pr-4 pl-4 m-2 font-bold cursor-pointer`}>3</div>
                    <div onClick={ () => {setNumber(4)}} className={` ${ number == 4 ? "bg-black text-white" : "bg-white text-black"} homebox border-[1px] border-black rounded-[50%] pt-2 pb-2 pr-4 pl-4 m-2 font-bold cursor-pointer`}>4</div>
                    <div onClick={ () => {setNumber(5)}} className={` ${ number == 5 ? "bg-black text-white" : "bg-white text-black"} homebox border-[1px] border-black rounded-[50%] pt-2 pb-2 pr-4 pl-4 m-2 font-bold cursor-pointer`}>5</div>
                    <div onClick={ () => {setNumber(6)}} className={` ${ number == 6 ? "bg-black text-white" : "bg-white text-black"} homebox border-[1px] border-black rounded-[50%] pt-2 pb-2 pr-4 pl-4 m-2 font-bold cursor-pointer`}>6</div>
                </div>

            </div>

            <div className="homebottom flex flex-col justify-center items-center gap-5">

                <div>

                    <button onClick={() => {setMode('easy')
                        handlereset()
                    }} className={`border-[1px] border-black rounded-md p-1 mr-2 font-semibold ${ mode=='easy' ? "bg-red-600 text-white" : "bg-white"}`}>Easy</button>

                    <button onClick={() => {setMode('hard')
                        handlereset()
                    }} className={`border-[1px] border-black rounded-md p-1 ml-2 font-semibold ${ mode=='hard' ? "bg-red-600 text-white" : 'bg-white'}`}>Hard</button>

                </div>

                <div className="middle">
                    <div onClick={handledies} className={`dice flex justify-center items-center gap-5 ${isRolling ? 'animate-spin-slow' : ''} `}>
                        <img src={dienumber == 1 ? one : dienumber == 2 ? two : dienumber == 3 ? three : dienumber == 4 ? four : dienumber == 5 ? five : six} alt="" width='100px' />
                    </div>
                </div>

                <div className=' font-bold underline text-sm'>
                Click on Dice to roll
                </div>

                <div className='flex flex-col gap-3'>
                    <button onClick={handlereset} className='border-[2px] border-black pt-2 pb-2 pr-5 pl-5 rounded-lg'>Reset score</button>
                    <button onClick={togglerules} className='bg-black text-white pt-2 pb-2 pr-5 pl-5 rounded-lg'>{ showrules ? "Hide" : "Show"} rules</button>
                </div>

                {showrules && <div className='rules bg-[#FBF1F1] p-5 mb-7'>
                    <h1 className=' font-extrabold text-xl m-4'>How to play dice game</h1>
                    <ul className='list-disc'>
                        <li className='ml-4 mr-5 mt-[2px] text-[15px] font-bold'>Select any number</li>
                        <li className='ml-4 mr-5 mt-[2px] text-[15px] font-bold'>Click on dice image</li>
                        <li className='ml-4 mr-5 mt-[2px] text-[15px] font-bold'>After click on  dice  if selected number is equal to dice number you will get same point as dice</li>
                        <li className='ml-4 mr-5 mt-[2px] text-[15px] font-bold'>If you get wrong guess then  2 point will be dedcuted</li>
                    </ul>
                </div>}

            </div>

        </div>}
    </>
  )
}

export default Home