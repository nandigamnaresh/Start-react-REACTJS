import React, { useState } from 'react'


function Usestate1() {
    const [a,chinna]=useState(0)
    var c=()=>{
        chinna(a+1)
    }
    var d=()=>{
        chinna(a-1)
    }
    
  return (
    <div>
        <h1 >WELCOME TO PAGE:{a}</h1>
        <button onClick={c}>INCREMENT</button>
        <button onClick={d}>DECREMENT</button>


    </div>


  )
}

export default Usestate1