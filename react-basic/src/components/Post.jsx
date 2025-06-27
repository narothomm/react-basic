import React from 'react'
import {useLoaderData} from 'react-router-dom'
export const loadpost=async({params})=>{
   const {id}=params
   const response=await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
   if (!response.ok){
      throw new Response("post not found",{status:404})  
   }
   const post=await response.json()
      return post
}

const Post = () => {
   const data=useLoaderData()  //we show only one data for this process
  return (
    <div className='mt-5'>
      {
      data &&<div className='border rounded-lg p-5 mb-5'>  
      <span> userid:{data.userId} </span> <br/>
      <span> id:{data.id} </span> <br/>
      <span> title:{data.title} </span> 
      </div>
      }
   </div>
  )
}

export default Post




// সম্পূর্ণ কোডটি দুইটা অংশে বিভক্ত:
// loadpost ফাংশন (ডেটা লোডার)
// Post কম্পোনেন্ট (ডেটা প্রদর্শন)

//  1. Loader Function: loadpost
// export const loadpost = async({ params }) => {
// export const loadpost
//  এটি একটি named export ফাংশন যেটা React Router-এ loader হিসেবে ব্যবহৃত হবে।

// async ({ params }) =>
//  এটি একটি asynchronous arrow function।
//  { params } হচ্ছে একটি object destructuring, React Router এই params পাঠায় যেখানে ডাইনামিক রাউটের :id থাকবে।

// const { id } = params
//  params object থেকে id নামক প্রপার্টি টা আলাদা করে নিচ্ছে।
//  ধরো URL ছিল /posts/3 তাহলে id = 3

// const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
//  এই লাইনে fetch() দিয়ে API কল করা হচ্ছে।
//  https://jsonplaceholder.typicode.com/albums/3 এরকম একটি API কল হবে।
//  await মানে হচ্ছে — fetch হওয়া পর্যন্ত অপেক্ষা করো।
// if (!response.ok) {
//    throw new Response("post not found", { status: 404 })
// }
//  যদি API থেকে ভালো response না আসে (যেমন 404 বা 500 error) তাহলে throw করে একটা custom Response error দেখাবে।

// const post = await response.json()
// response থেকে JSON data রূপে ডেটা পার্স করা হচ্ছে।
// return post
//  loader function ডেটা return করে, যেটা পরে useLoaderData() hook দিয়ে পাওয়া যাবে।

// 2. React Component: Post
// const Post = () => {
//    const data = useLoaderData()
// const Post = () =>
// এটি একটি React Functional Component।

// useLoaderData()
// এটি React Router এর একটি hook যেটা loader function (loadpost) থেকে পাওয়া ডেটা রিটার্ন করে।
//  data হচ্ছে সেই post object (যার মধ্যে userId, id, title আছে)।
// return (
//   <div className='mt-5'>
//     {data &&
//       <div className='border rounded-lg p-5 mb-5'> 
//         <span> userid: {data.userId} </span> <br/>
//         <span> id: {data.id} </span> <br/>
//         <span> title: {data.title} </span> 
//       </div>
//     }
//   </div>
// )
// <div className='mt-5'>
// উপরের মার্জিন 5 (Tailwind CSS ক্লাস)।

// {data && <div>...</div>}
// যদি data truthy হয় (মানে ফাঁকা না হয়), তাহলে ভিতরের div দেখাবে।

// className='border rounded-lg p-5 mb-5'
//  Tailwind CSS দিয়ে styling করা হয়েছে:

// border: বর্ডার যুক্ত
// rounded-lg: বড় রেডিয়াস
// p-5: padding
// mb-5: নিচে মার্জিন

// <span> userid: {data.userId} </span>
// ইউজার আইডি দেখাচ্ছে

// <span> id: {data.id} </span>
// পোস্ট আইডি দেখাচ্ছে

// <span> title: {data.title} </span>
// পোস্টের শিরোনাম দেখাচ্ছে

// 3. Export Default:
// export default Post
// এই কম্পোনেন্ট Post কে default export করা হচ্ছে, যাতে অন্য ফাইল থেকে import করা যায়।

// সংক্ষিপ্ত সারাংশ:
// অংশ	কাজ
// loadpost	URL-এর id দিয়ে API থেকে post fetch করে
// useLoaderData()	সেই post ডেটা component-এ আনে
// Post Component	ডেটা থাকলে তা দেখায় userId, id, এবং title সহ