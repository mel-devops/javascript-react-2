import React,{useState} from "react";


export const UpDownCounter =()=>{
    let [counter,setCounter]=useState(0)

    const onhandleClick =(direction)=>{
            if(direction==="Up"){
                setCounter(counter++)
            }else if(direction==="down"){
                setCounter(counter--)
            }

    }
    //return
    return(
        <div>
            <button onClick={()=>onhandleClick("Up")} >Up</button>
            {counter}
            <button onClick={()=>onhandleClick("down")}>Down</button>
        </div>
    )
}