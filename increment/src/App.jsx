import React, { useState } from 'react'

function App(){
  var [a,b] = useState(1);  
  return (
    <div>
      <h1>{a}</h1>
      <button onClick= {()=>b(a+1)} className=' bg-green-500 '>Click</button>
    </div>
  )
}

export default App
