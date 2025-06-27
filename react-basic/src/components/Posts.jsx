import React from 'react';
import { Link,useLoaderData } from 'react-router-dom';

export const loadposts =async() => {
   const response=await fetch("https://jsonplaceholder.typicode.com/albums")
   if(!response.ok){
      throw new Response("posts not found",{status:404})
   }
  const posts=await response.json()
  return posts
}

export const Posts=()=>{
   const data=useLoaderData()
   console.log(data)
   return(
      <div className='mt-5'>
         {
            data&& data.map((post,idx)=>(      //we show all fetch data for this process
            <div key={idx}>
               <div className='border rounded-lg p-5 mb-4'>
                  <span> id:{post.id} </span> <br/>
                  {/* <span> title:{post.title} </span> <br/> */}
                  <Link to={`/post/${idx+1}`}> Go to post:{idx+1} </Link>
               </div>
   
            </div>
            ))         
         }
      </div>
   )
}
export default Posts




// 1. Imports
// import React from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
// import React from 'react'
// 👉 React প্রয়োজন হয় JSX (<div>...</div>) ব্যবহার করার জন্য।

// { Link, useLoaderData }
// 👉 react-router-dom লাইব্রেরি থেকে দুইটি জিনিস:

// Link: SPA এর মধ্যে পেজ পরিবর্তনের জন্য (reload না করেই route পরিবর্তন করে)

// useLoaderData: route loader থেকে পাওয়া data component-এ ব্যবহারের জন্য

// 🔹 2. Loader Function: loadposts
// export const loadposts = async () => {
// export const
// 👉 এটি একটি named export, পরে router-এ loader হিসেবে ব্যবহৃত হবে।

// async () => {}
// 👉 এই ফাংশনটি asynchronous কারণ এতে await ব্যবহার হয়েছে।

// const response = await fetch("https://jsonplaceholder.typicode.com/albums")
// fetch(...)
// 👉 API কল করছে https://jsonplaceholder.typicode.com/albums থেকে।
// 👉 এটি 100টি album ডেটা দেয়।

// await
// 👉 fetch শেষ না হওয়া পর্যন্ত অপেক্ষা করে।

// if (!response.ok) {
//    throw new Response("posts not found", { status: 404 });
// }
// !response.ok
// 👉 যদি response 200 OK না হয়, অর্থাৎ কোনো error হয়, তাহলে throw করা হয়।

// throw new Response(...)
// 👉 custom error response তৈরি করে, যেটা React Router handle করতে পারে।
// const posts = await response.json()
// return posts
// .json()
// 👉 JSON format এ response কে parse করে

// return posts
// 👉 সব post data return করে (একটা array)

// 🔹 3. React Component: Posts
// export const Posts = () => {
//    const data = useLoaderData()
//    console.log(data)
// export const Posts
// 👉 একটি React functional component

// useLoaderData()
// 👉 loader (loadposts) থেকে পাওয়া data এখানে আসে।
// 👉 data হলো 100টি post এর array।

// console.log(data)
// 👉 কনসোলে ডেটা দেখতে চাইলে helpful

// 🔹 Return JSX:
// return (
//   <div className='mt-5'>
// <div className='mt-5'>
// 👉 Tailwind CSS দিয়ে margin-top 5 করা হয়েছে।

// 🔹 Loop Through Data:
// {
//   data && data.map((post, idx) => (
// data &&
// 👉 যদি data থাকে, তবে map চালানো হবে।

// data.map(...)
// 👉 post array-এর উপর loop চালিয়ে প্রত্যেকটি post নিয়ে কাজ করবে।

// (post, idx)
// 👉 post মানে হলো একটি album object।
// 👉 idx হলো এর index (0, 1, 2, ...)

// 🔹 Inner JSX (Each Post):
// <div key={idx}>
//   <div className='border rounded-lg p-5 mb-5'>
//     <span> id:{post.id} </span> <br/>
//     <span> title:{post.title} </span> <br/>
//     <Link to={`/post/${idx + 1}`}> Go to post:{idx + 1} </Link>
//   </div>
// </div>
// key={idx}
// 👉 React এর performance optimization এর জন্য unique key প্রয়োজন।

// className='border rounded-lg p-5 mb-5'
// 👉 Tailwind CSS ব্যবহার:
// border: বর্ডার
// rounded-lg: গোল কোণা
// p-5: padding
// mb-5: নিচে margin

// <span> id:{post.id} </span>
// 👉 API থেকে পাওয়া post object-এর id দেখানো হচ্ছে।

// <span> title:{post.title} </span>
// 👉 post এর title দেখানো হচ্ছে।

// <Link to={/post/${idx + 1}}> Go to post:{idx + 1} </Link>
// 👉 একটি লিংক, যা তোমাকে /post/1, /post/2, ইত্যাদিতে নিয়ে যাবে।
// 👉 idx + 1 কারণ index 0 থেকে শুরু হয়, কিন্তু URL এ 1-based করা হচ্ছে।

// ✅ সংক্ষিপ্ত সারাংশ (Summary Table):
// অংশ	ব্যাখ্যা
// loadposts()	Albums API থেকে সব post (album) ডেটা নিয়ে আসে
// useLoaderData()	ওই loader function থেকে ডেটা component এ আনে
// data.map(...)	প্রতিটি post/album এর জন্য UI বানায়
// Link to	আলাদা Post details page-এ যাওয়ার লিংক দেয়




