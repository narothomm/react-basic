import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


const HookForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  //  const user={name:'joy',email:'joy@gmail.com'}
  //  const newuser={...user,phone:'01737028006'}
  //  console.log(newuser)
   const onSubmit=(data)=>{
    setSubmittedData(data)
    //const onSubmittedData(data)
    //console.log('submitted data:',data)
   }
  const [submittedData,setSubmittedData]=useState(null)
  return (
    <div className='max-w-md mx-auto mt-1 p-6 border rounded shadow-lg'>
      <h2 className='text-xl font-bold mb-4'>User Information using react hook form</h2>

      <form onSubmit={handleSubmit(onSubmit)}className='space-y-3'>
      <div>
         <label className='block mb-1 font-semibold'>Name:</label>
         <input type='text' 
         {...register('name',{required:"name is required"})}
         className='w-full border p-2 rounded-lg'/> 
      </div>
        <div>
            <label className='block mb-1 font-semibold'>Email:</label>
            <input type='text' {...register('email',{required:"email is required",
            pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            message:"Enter a valid email address"}})} 
            className='w-full border p-2 rounded-lg'/> 
            {errors.email &&(<p className='text-500'>{errors.email.message}</p>)}
        </div>
        <div>
            <label className='block mb-1 font-semibold'>Phone Number:</label>
            <input type='number' 
            {...register('phone',{required:"phone number is required",
            pattern:{value: /^(?:\+88|88)?01[3-9]\d{8}$/,
            message:'Enter a valid phone number'}})}
            className='w-full border p-2 rounded-lg'/> 
            {errors.phone &&(<p className='text-500'>
            {errors.phone.message}</p>)}
          </div>

          <button type='submit' className='bg-blue-600 text-white px-4 py-1 rounded-lg mt-5'>Submit
          </button>

            {
        submittedData && (
          <div className='mt-6 p-4 bg-green-100 border rounded'>
            <h2 className='font-semibold text-green-700 mb-2'>Submitted Info:</h2>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Phone:</strong> {submittedData.phone}</p>
          </div>
        )
      }
      </form>
    </div>
  )
}

export default HookForm

// এই কম্পোনেন্টটি একটি রেসপনসিভ, ভ্যালিডেশন-সহ একটি ইউজার ইনফরমেশন ফর্ম তৈরি করে,
//  যেখানে ব্যবহারকারী তথ্য ইনপুট দিলে তা যাচাই করে সঠিকভাবে সাবমিট করলে নিচে দেখায়।

// ব্যবহৃত টেকনোলজি:
// React
// React Hook Form (form handling এবং validation এর জন্য)
// Tailwind CSS (স্টাইলিং এর জন্য)
//  মূল ফিচারসমূহ:
// Form Input Field:
// Name
// Email
// Phone Number

// Validation:
// নাম: অবশ্যই দিতে হবে।
// ইমেইল: দিতে হবে এবং তা একটি ভ্যালিড ইমেইল ফরম্যাট হতে হবে।
// ফোন: বাংলাদেশি ফোন নাম্বার ফরম্যাট অনুযায়ী দিতে হবে (যেমন: 017xxxxxxxx).
// Data Submission Handling:
// ফর্ম সাবমিট করলে onSubmit ফাংশন কাজ করে।
// submittedData নামে একটি state ব্যবহার করে ইউজারের ইনপুট সংরক্ষণ করা হয়।
// Data Display:
// সফলভাবে সাবমিট করলে ইউজারের ইনপুট করা তথ্য নিচে “Submitted Info” নামে দেখানো হয়।


  //Main Description
//  1. ফর্ম তৈরির জন্য Hook ব্যবহার (useForm)
// const { register, handleSubmit, formState: { errors } } = useForm()
// useForm() হুক ব্যবহার করে:
// register: ইনপুট ফিল্ডকে React Hook Form-এর সাথে কানেক্ট করে।
// handleSubmit: সাবমিশনের সময় ভ্যালিডেশন চেক করে এবং ডেটা প্রসেস করে।
// errors: ফর্ম ফিল্ডে কোনো ভ্যালিডেশন এরর থাকলে সেটা ধরতে সাহায্য করে।

// 2. ফর্ম ডেটা স্টোর করার জন্য স্টেট
// const [submittedData, setSubmittedData] = useState(null)
// submittedData হলো এমন একটা স্টেট যেটাতে ফর্ম সাবমিট করার পর ইউজারের ইনপুট করা ডেটা রাখা হয়।

// 3. ফর্ম সাবমিট হ্যান্ডলার (onSubmit)
// const onSubmit = (data) => {
//   setSubmittedData(data)}
//  যখন ইউজার সাবমিট করে:
// ফর্ম ডেটা data প্যারামিটার দিয়ে আসে।
// setSubmittedData(data) দিয়ে সেই ডেটা স্টোর করা হয়, যাতে নিচে আমরা তা শো করতে পারি।

// 4. ফর্মের ইনপুট ফিল্ডগুলো
//  Name Field:
// <input {...register('name', { required: "name is required" })} />
// যদি ইউজার নাম না দেয়, তাহলে name is required মেসেজ দেখাবে।

// Email Field:
// <input {...register('email', {
//   required: "email is required",
//   pattern: {
//     value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
//     message: "Enter a valid email address"
//   }
// })} />
// ইমেইল দেওয়া বাধ্যতামূলক এবং সেটা নির্দিষ্ট ফরম্যাটে হতে হবে।
//  Phone Number Field:
// <input {...register('phone', {
//   required: "phone number is required",
//   pattern: {
//     value: /^(?:\+88|88)?01[3-9]\d{8}$/,
//     message: "Enter a valid phone number"
//   }
// })} />
// বাংলাদেশের ফোন নম্বরের মতো ফরম্যাটে ইনপুট দিতে হবে।

// 5. Error Message দেখানো
// {errors.email && (<p>{errors.email.message}</p>)}
// {errors.phone && (<p>{errors.phone.message}</p>)}
// যদি কোনো ইনপুট ভুল হয়, তাহলে তার নিচে Error মেসেজ দেখায়।

//  6. সাবমিট করার পর রেজাল্ট দেখানো
// {submittedData && (
//   <div>
//     <p>Name: {submittedData.name}</p>
//     <p>Email: {submittedData.email}</p>
//     <p>Phone: {submittedData.phone}</p>
//   </div>
// )}
//  ফর্ম সফলভাবে সাবমিট হলে ইউজারের ইনপুট করা ডেটা নিচে শো হয়।
// উপসংহার:
// তোমার কম্পোনেন্টটি যা করে:
// ইউজারের নাম, ইমেইল ও ফোন ইনপুট নেয়।
// ইনপুটগুলোকে ভ্যালিডেট করে।
// যদি ইনপুট ঠিক থাকে, তাহলে সেই ডেটা সাবমিট করে এবং নিচে প্রদর্শন করে।
// চমৎকার ও প্র্যাক্টিক্যাল একটা ফর্ম কম্পোনেন্ট, যেটা future project এ contact form, user register বা booking form-এর মতো কাজে লাগবে।
// চাইলে আমি এটাতে আরও কিছু উন্নয়ন (যেমন রিসেট বাটন, রিয়েল টাইম validation) অ্যাড করতে পারি। বলতে পারো! ✅

//  দিক:	    FormHandle (Traditional Form):	                 HookForm (React Hook Form):
// ফর্ম হ্যান্ডলিং	Traditional React Form Handling	                React Hook Form লাইব্রেরি ব্যবহার করে
// ডেটা রিড	event.target.name.value দিয়ে DOM থেকে ডেটা পড়া	    register() হুক দিয়ে ইনপুট নিয়ন্ত্রণ করা
// ফর্ম কন্ট্রোল	Uncontrolled (DOM থেকে সরাসরি রিড)	             Controlled (React Hook Form দ্বারা কন্ট্রোলড)
// Error Handling	  নিজে করতে হয়	                             errors object দিয়ে সহজে হ্যান্ডল করা যায়
//Dependency	    কোনো লাইব্রেরি ছাড়াই চলে	                      react-hook-form ইনস্টল থাকতে হয়
// সারাংশ	ছোট ও সাধারণ ফর্মের জন্য উপযুক্ত	                       প্রফেশনাল ও বড় ফর্ম হ্যান্ডল করার জন্য উপযুক্ত