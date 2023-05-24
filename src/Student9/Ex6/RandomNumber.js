//create component RandomNumber
//Create Generate Button
//when button is clicked random number between 1-10 is displayed
//call RanddomNumber compnent in main

import React, {useState} from "react";


export const RandomNumber = () => {
    
    let [number, setNumber] = useState(0)

    const onHandleClick = () => {

      setNumber(Math.floor(Math.random() * 10))
    }

    return (

        <div>
            
        <p> Random Number: {number} </p>

        <button onClick={()=>onHandleClick()} >Generate</button>

        </div>
    )
}

