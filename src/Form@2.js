import React, { useState } from 'react'

function Form2() {
    const [a, b] = useState(
        {
            name: '',
            age: '',
            location: ''
        });

    


    const x = (e) => {
        b({...a,name:e.target.value});
    }
    const y = (e) => {
        b({...a,age:e.target.value});
    }
    const z = (e) => {
        b({...a,location:e.target.value});
    }

    const chinna =(e)=>
    {
        e.preventDefault();
        console.log("YOUR DETAILS",a);
        
    }
    

    







    return (
        <div>
            <center>
            <h1>FORM</h1>
            <form onSubmit={chinna}>
                <input type='text' value={a.name} onChange={x}></input><br></br>
                <input type='text' value={a.age} onChange={y}></input><br></br>
                <input type='text' value={a.location} onChange={z}></input><br></br>
                <button type='submit'>SHOW</button>
            </form>
            
            </center>
        </div>
    )
}

export default Form2