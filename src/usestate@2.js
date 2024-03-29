import React, { useState } from 'react'

function Usestate2() {
    const [a,b] = useState("NARESH")
    let c = ()=>
    {
      
        let d=document.getElementById('name').value;
        b(d);

    }
  return (
    <div>
        <h1>{a}</h1>

        <input id='name' />

        <button onClick={c}>CLICK</button>

    </div>
  )
}

export default Usestate2