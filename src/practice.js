import React from 'react'

export default function practice() {
    var chinnodu ={
        fontSize:'60px',
        color:'red'
    }
    var Submit =()=>
    {
        console.log("YEAH IT IS WORKING")
        alert("CLICKED \n HOW ARE YOU \n YEAH I AM GOOD")
        var b= document.getElementById('aa')
        b.innerHTML = " CHINNODU"
        var c=document.getElementById('bb')
        c.innerHTML="VENKATESH"
    }
    const ven="hi hello";
    
    

  return (
    <div>
        <h1 style={chinnodu} id='aa'>NANDIGAM NARESH</h1>

        <h3 id='bb' style={chinnodu}></h3>

        <button onClick={Submit}>CLICK ME</button>

        <h2>{ven}</h2>
    </div>
  )
}
