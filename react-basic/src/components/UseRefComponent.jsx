import React,{useRef,useState} from 'react'

// UseRefComponent নামের component তৈরি করলাম, যেখানে আমরা input নিয়ে কাজ করবো
const UseRefComponent = () => {
  const inputRef=useRef(null) //useRef(null)দিয়েএকটা reference objectতৈরিকরলাম যারinitial মানহচ্ছে null
  //এই inputRef আমরা input boxএরসাথে connect করবো যাতেআমরা JSদিয়ে input-এর মান access করতে পারি

  //এটা একটা function যেটা Save বাটনে ক্লিক করলে চলে।
  const handleSave=()=>{      
    const value=inputRef //inputRefমানে হচ্ছেপুরোreference objectকিন্তু আমরাচাইinput box-এরমধ্যে লেখামানvalue     
    //const value = inputRef.current.value; যাতে আমরা JavaScript দিয়ে input-এর মান access করতে পারি।
    console.log(value)      //এটা console-এ value দেখায়।
    //console.log('Input value:', value);
  }

  // Component-এর UI অংশ। এখানে আমরা দুইটা জিনিস return করছি:
  // return ( <div> ... </div> );
  return (
    <div>
      <input className='border' ref={inputRef} type='text'/>
      <button 
      onClick={()=>handleSave()}>
      Save</button>
    </div>
  )
}
export default UseRefComponent

{/* <input className='border' ref={inputRef} type='text' />
এটা একটা input field।
ref={inputRef} → এই input field-টা এখন inputRef-এর reference হয়ে গেলো।
আমরা এর ভেতরের মান useRef দিয়ে JS থেকে access করতে পারবো। */}

{/* <button onClick={() => handleSave()}>Save</button>
এটা একটা button।
onClick={() => handleSave()} → এই বাটনে ক্লিক করলে handleSave() function চালু হয়।
যেটা console-এ input box-এর value দেখায়। */}

// অংশ	                    ব্যাখ্যা
// useRef	                 DOM element-এর reference রাখে
// ref={inputRef}	         input box-এর সাথে ref attach করে
// inputRef.current.value	 input box-এর ভেতরের লেখা access করে
// handleSave()	           ক্লিক করলে console-এ লেখা প্রিন্ট করে
// ভুল	inputRef মানে শুধু ref object, value পেতে .current.value দরকার

