import { useState } from 'react';
import './App.css';
import Mocha from "../src/assets/annoyingmocha.gif"
import MochaValentines from "../src/assets/MochaValentines.gif"
import MochaClapping from "../src/assets/MochaClapping.gif"
import Crying from "../src/assets/crying.gif"
import Face from "../src/assets/Face.gif"
import Yass from "../src/assets/YASS.gif"
import Couch from "../src/assets/Couch.gif"
import Dance from "../src/assets/Dance.gif"

function App() {
  const [yesPressed, setYesPressed] = useState(false)
  const [noCount, setNoCount]= useState(0);


  const phrases = [
    "No",
    "Are you sure?",
    "Like really sure?",
    "Ya Right, click the Yes",
    "K, one more time",
    "Yes",
  ]

  const Title=[
    "Will you be my Valentines?",
    "NO?!?",
    "You're not funny, try again",
    "Still trying huh",
    "NAHHHHH",
    "hehe."
  ]
  
  const images= [
    MochaValentines,
    Mocha,
    Crying,
    Face,
    Couch,
    Dance,
  ]

  function noText(){
   return phrases[Math.min(noCount, phrases.length -1)] 
  }

  function noTitle(){
    return Title[Math.min(noCount, phrases.length -1)]
  }
  function noImages(){
    return images[Math.min(noCount, phrases.length -1)]
  }

  function onClickNo(){
    if(noCount < 5){
      setNoCount(noCount + 1)
    }else{
      setYesPressed(true);
    }
   
  }

  return (
    <div className='bg-red-300 w-screen h-screen'>
      {yesPressed ? (
        <div className='w-screen h-screen'>  
        <div className='absolute bottom-5'>
          <img src={MochaClapping}/>
        </div>
        <div className='relative top-5 left-4'>
            <p className='text-white animate-pulse'>Tony has been notified. </p>
        </div> 
        <div className='flex items-center justify-center p-10'>
          <div className='lg:text-[10rem] sm:text-[2rem] text-white animate-bounce'> YAY!
          </div>
        </div>
        <div className='flex items-center justify-center p-10'>
         <img src={Yass}/>
        </div>  
        <div className='flex items-center justify-center p-4'>
         <h2 className='lg:text-[5rem] sm:text-[1rem] text-white'>EXCELLENT CHOICE
          </h2> 
        </div>
        
        </div>
      ):(
        <div className='w-screen h-screen '>  
        <div className='flex items-center justify-center p-5 '>
           <h1 className='text-white font-bold sm:text-[1.5rem] lg:text-[5rem]'>
            {noTitle()}
          </h1>
        </div>
        <div className='flex items-center justify-center p-10'>
        <img src={noImages()} className='w-[25%] h-[25%]'/>
        </div>
     
        <div className='flex gap-8 items-center justify-center'>
          <button className='bg-red-500 p-5 rounded-lg hover:scale-[1.1] text-white hover:bg-red-700'
          onClick={()=> setYesPressed(true)}>Yes</button>
          <button className='bg-red-500 p-5 rounded-lg hover:scale-[1.1] text-white hover:bg-red-700'
        onClick={onClickNo} >{noText()}</button>
        </div>

        </div>
      )

      }
      


    </div>
  );
}

export default App;
