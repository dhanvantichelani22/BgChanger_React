
import { useState } from 'react';
import './App.css';

function App() {
  const[color,setColor] = useState("cyan");
  return (
    <div className="container" style={{backgroundColor:color}}>
      <h1>Random Background Color Changer</h1>
      <div className='flexcontain' style={{backgroundColor:"white"}}>
      <button className='bgchange' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
      <button className='bgchange' style={{backgroundColor:"magenta"}} onClick={()=>setColor("magenta")}>Pink</button>
      <button className='bgchange' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
      <button className='bgchange' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
      <button className='bgchange' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
      
      </div>
      
    </div>
  );
}

export default App;
