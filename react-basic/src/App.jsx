import React from 'react';
import logo from './assets/react.svg'; // ইমেজ পাথ

function App() {

  return (
    <div>
     <h1>hello world</h1>
     <p>Today my first react class name</p>
     <Cardcomponent></Cardcomponent>
     <Cardcomponent></Cardcomponent>
    </div>
  )
}
function Cardcomponent(){
  return(
    <div>
      <p>my first page </p>
      <img src={logo} alt="logo"/>
      <button>click me</button>
    </div>
  )
}
export default App
