import { useState } from "react";

const Advice = () => {
    const[advice,setAdvice]=useState("");
    const[count,setCount]=useState(0)

    const getAdvice=async ()=>{
        const response=await fetch("https://api.adviceslip.com/advice");
        const data=await response.json()
        setAdvice(data.slip.advice)
        setCount(prevCount=>prevCount+1)
    }
  return (
    <div>
      <h3 className="heading">Advice App</h3>
      <h4>{advice}</h4>
      <button className="getAdvice" onClick={getAdvice}>Get Advice</button>
      <p>You have clicked <span>{count}</span>number of times</p>
    </div>
  );
};


export default Advice;
