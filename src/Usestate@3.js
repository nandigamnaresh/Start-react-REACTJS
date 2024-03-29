import React, { useState } from 'react'





function Usestate3() {

    
    const[a,b] = useState("NARESH");

    const [g,p] = useState(21);




    var but = ()=>
    {
        var d=document.getElementById('aaa').value;
        b(d);

        
        var e=document.getElementById('ccc').value;
        p(e);
    }
    



    const style=
    {
        color:'red'
    }

    const f ={
        fontSize:'30px',
        marginTop:'180px',
        textAlign:'center'
    }
    const e ={
        backgroundColor:"red",
        color:'white',
        border:'1px solid white',
        padding:'12px 20px 12px 20px',
        fontWeight:'900'
    }

    const inp = {
        padding:'10px 12px 10px 12px'
    }








  return (

    <div style={f}>



        <h6>UPDATE NAME:<h1 style={style}>     {a}    </h1></h6>

        <h6>UPDATE AGE:   <h1 style={style}>     {g}    </h1></h6>

        <input id='aaa' placeholder='NAME' style={inp} /><br/>
        <input id='ccc' placeholder='AGE' style={inp} /><br/>



        <button onClick={but} style={e}>Click Me</button>
       






    </div>

  )
}



export default Usestate3