import React  from 'react';
import { useState } from 'react';




export default function Usestate() {

    const [a,naresh]=useState(0);
    let incre = ()=>
    {
        naresh(a+1);
    }


    let decre = ()=>
    {
        naresh(a-1);
    }



  return (
    <div>

        <h1>COUNT={a}</h1>
        <button onClick={incre}>+</button>
        <button onClick={decre}>-</button>    


    </div>
  )
}
