import React,{useReducer} from 'react'

//Step 2: Reducer Function তৈরি, এই reducer ফাংশন ২টি ইনপুট নেয়:
const reducer = (state,action) => {    //state → বর্তমান অবস্থা (যেমন: {count: 0})
   switch(action.type){                //action → তুমি যেটা করতে চাও (যেমন: বাড়ানো, কমানো, রিসেট করা)
      case'increment':                 //action.type=কোন টাইপের অ্যাকশন পাঠানো হয়েছে তা যাচাই করে
      return{count:state.count+1}      //action.type এর উপর ভিত্তি করে বিভিন্ন কাজ চালাতে সাহায্য করে।

      case'decrement':
      if(state.count<=0){
         return{count:0}
      }
      else return{count:state.count-1}
      case'reset':
      return{count:0}
      default: 
         return state
   }
  
   }     
   // React-এ যখনই আমরা কোনো হুক (hook) ব্যবহার করি, তখন অবশ্যই একটি Component তৈরি করতে হয়, 
   // কারণ হুক কেবলমাত্র ফাংশনাল কম্পোনেন্টের ভিতরে ব্যবহার করা যায়।
      //Component তৈরি করা
    const CounterUsingReducer=()=>{
      const [state,dispatch]=useReducer(     //useReducer হুক ব্যবহার
         reducer,{count:0})
       
   //UI তৈরি করা
      return (
        <div className='flex gap-3 items-center'>
         <button 
         onClick={()=> dispatch({type:'increment'})}
         className='px-2 py-1 rounded-lg bg-gray-300'>
         +</button>

         <h2 className='text-xl font-semibold'>Count:{state.count}</h2>
         <button 
         onClick={()=>dispatch({type:'decrement'})} 
         className='px-3 py-1 rounded-lg bg-gray-300'>
         -</button>

         <button 
          onClick={()=>dispatch({type:'reset'})} 
          className='px-3 py-1 rounded-lg bg-gray-300'>
         Reset</button>
        </div>
  )
}
// Component Export
export default CounterUsingReducer

// তুমি যখন - বাটনে ক্লিক করো,
// তখন () => dispatch({ type: 'decrement' }) ফাংশন চালু হয়,
// আর সেটা dispatch কে বলে দেয়: "তুমি 'decrement' type অ্যাকশন পাঠাও"।
// এর মানে হলো → count এর মান ১ কমিয়ে দাও (যদি ০-এর নিচে না হয়)।