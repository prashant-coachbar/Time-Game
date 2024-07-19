import { useRef, useState } from "react";

export default function Player() { 
  const [playerName,setPayerName] = useState("")
  const setName = useRef();

  function handleClick(){
    if(setName.current.value!==""){
      setPayerName(setName.current.value);
      // setName.current.value="";
    }
    else{
      alert("Please Enter Your Name")
    }
  }
  function handleKey(event){
    if(event.key==="Enter"){
      handleClick();
    }
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input onKeyDown={handleKey} ref={setName} type="text" required placeholder="Your Name" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
