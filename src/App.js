import axios from 'axios'
import React from 'react'
function App() {


 // var paydunya = require('paydunya')
  //console.log(paydunya)
  const handleClick =()=>{    
    
    axios.get('https://springapiucad.herokuapp.com/paydunya').then(resp=>{
      alert(resp.data); 
    }).catch(err=>{
      alert(err) ;
    });


  }
  return (
    <div>
      <h1>Hello </h1>
      <button onClick={handleClick} >Hello Word</button>
    </div>
  )
}

export default App
