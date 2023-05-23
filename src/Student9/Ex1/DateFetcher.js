import React from "react";

import { useState } from "react";




export const DateFetcher = () => {

    const [date, setDate] = useState('Unknown')

    const changeDate = () => {

        const date = new Date();

        const utcDate = date.toUTCString();

        setDate(utcDate);

        console.log(date)

    };

    return (

        <div>





            <button onClick={() => changeDate()}>Push</button>

            <span>UTC Date:</span>

            {date}

        </div>

)
}
