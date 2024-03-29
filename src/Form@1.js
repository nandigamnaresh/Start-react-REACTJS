import React, { useState } from 'react'

function Form1() {
    const [Name,setName] = useState('');

    const submit = (e) =>{
        e.preventDefault();
        console.log("YOUR NAME IS:",Name)
    }


    const A =(e)=>{
      setName(e.target.value)
    }
    
  return (
    <div>
        <h1>NANDIGAM NARESH</h1>
        <form onSubmit={submit}> 
            <input type='text' value={Name} onChange={A} />
            <button type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Form1