import { useRef, useState } from "react"
import ResultsModal from "./ResultsModal";

export default function TimerChallenge({title,targetTime}){
    const timer = useRef();
    const dialog = useRef();
    const [remainingTime,setRemainingTime] = useState(targetTime*1000);

    const isActive = remainingTime>0 && remainingTime<targetTime*1000;

    if(remainingTime<=0){
        clearInterval(timer.current);
        dialog.current.open();
    }
    
    function handleStart(){
        timer.current = setInterval(()=>setRemainingTime(prev=>prev-10),10);
        
    }
    function handleStop(){
        clearInterval(timer.current);
        dialog.current.open()
    }
    function onReset(){
        setRemainingTime(targetTime*1000);
    }

    console.log(isActive);
    return(
        <section className="challenge">
            <ResultsModal ref={dialog} remainingTime={remainingTime} targetTime={targetTime} onReset={onReset}/>
            <h2>{title}</h2>
            <p className="challenge-time">{targetTime} second</p>
            <p>
                <button onClick={isActive?handleStop:handleStart}>{isActive?"Stop":"Start"} Challenge</button>
            </p>
            <p className={isActive?"active":undefined}>{isActive?"Timer is running...":"Timer Inactive"}</p>
        </section>
    )
    
}