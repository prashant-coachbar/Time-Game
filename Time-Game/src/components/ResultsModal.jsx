import { forwardRef, useImperativeHandle, useRef } from "react"

const ResultsModal = forwardRef(function ResultsModal({remainingTime,targetTime, onReset},ref){

    const dialog = useRef();

    remainingTime = (remainingTime/1000).toFixed(2);
    const userlost = remainingTime<=0?true:false;
    const score = Math.round((1-remainingTime/targetTime)*100)


    useImperativeHandle(ref,()=>{
        return {
            open(){
                dialog.current.showModal();
            },
        }
    })

    return(
        <dialog ref={dialog} className="result-modal">
            <h2>You {userlost?"Lost":"Won"}</h2>
            {!userlost &&<h2>Your Score: {score} </h2>}
            <p>The Target Time was <strong>{targetTime} seconds</strong></p>
            <p>You stopped the timer with <strong>{remainingTime} seconds left</strong></p>
            <form method="dialog">
                <button onClick={onReset}>Close</button>
            </form>
        </dialog>
    )
})

export default ResultsModal;