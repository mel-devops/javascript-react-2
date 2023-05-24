import React,{useState} from "react";


export const MinMaxCounter  =()=>{
    let [counter,setCounter]=useState(0)
    let [max,setMax]=useState(0)
    let [min,setMin]=useState(0)

    const onhandleMax =()=>{
       let currentValue = counter+1
       setCounter(currentValue);
        if (currentValue>max) {
            setMax(currentValue)
        }   
    }

    const onhandleMin =()=>{
        let currentValue = counter--
        setCounter(currentValue);
         if (currentValue<min) {
             setMin(currentValue)
         }   
     }
     
    
    return(
        <div>
            <button onClick={()=>onhandleMax()} >Up</button>
            {counter}
            <button onClick={()=>onhandleMin()}>Down</button>
            <p>Min: {min}</p>
            <p>Max:{max}</p>
        </div>
    )
}
//update Ex4

// up and down counter
// we want to store the max value and the min value
//2 states 1 for the min and the other for the max