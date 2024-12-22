import { useRef, useState } from "react"
import ResultModal from "./ResultModal"

export default function TimerChallenge({title,targetTime}){
    const timer = useRef() 
    const dailog = useRef() 
    const [timerStarted, setTimerStarter]=useState(false)
    const [timerExpired, setTimerExpired]=useState(false)
    function handleStart(){
        timer.current=setTimeout(()=>{
            setTimerExpired(true)
        },targetTime*1000)
        setTimerStarter(true)
        setTimerExpired(false) 
    }
    function handleClear(){
        clearTimeout(timer.current)
        setTimerStarter(false) // Update button to 'Start' again
        setTimerExpired(false) 
    }
    if (timerExpired && dailog.current) {
        dailog.current.showModal();
      }

    return (
    <>
    <ResultModal ref={dailog} targetTime={targetTime} result='lost'/>
    <section className="challenge">
        <h2>{title}</h2> 
        {timerExpired && <p>You Lost!!</p>}
        <p className="challenge-time">
            {targetTime} second{targetTime>1 ?'s':''}
        </p>
        <p>
            <button onClick={timerStarted?handleClear:handleStart}>{timerStarted ? 'Stop' : 'Start'}</button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running' : "Time Over"} 
        </p>
    </section></>)
}