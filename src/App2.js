// import React from 'react'
// import Map1 from './Map@1'

// function App2() {
//   return (
//     <div>
//         <Map1 id="1" name="Naresh" number='9390091216' location="Guntur" />
//         <Map1 id="2" name="Venkatesh" number='9705729936' location="Vijayawada" />
//     </div>
//   )
// }

// export default App2








import React from 'react'
import Map2 from './Map@2'

function App21() {



  var details=[
 {
    id:1,
    name:"N.NARESH",
    location:"GUNTUR",
    number:9390091216
  },

  {
    id:2,
    name:"N.VENKATESH",
    location:"MANGALAGIRI",
    number:8367269503
  },

  {
    id:3,
    name:"K.PHANI",
    location:"VIJAYAWADA",
    number:9705729936
  },

  {
    id:4,
    name:"D.RAJESH",
    location:"AMARAVATHI",
    number:6303325672
  }
]
console.log(details);


  return (
    <div>
        {
          details.map((data)=>
          {
           return <Map2  id={data.id} name={data.name} number={data.number} location={data.location}/>
          })  

        }
    </div>
  )
}

export default App21