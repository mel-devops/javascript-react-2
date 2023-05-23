import React, { useState } from "react";

export const TenCounter =() => {
    let [counter, setCounter] = useState(0)
    const onHandleClick = () => 
    setCounter (counter++)
    if (counter >10) {setCounter(0)}
 
 
    return  (
        <div>
            <button onClick = {() => onHandleClick ()} > Push</button>
        Counter: { counter }
        </div>
    )
}

    