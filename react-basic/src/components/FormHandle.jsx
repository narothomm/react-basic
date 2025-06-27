import React, { useState } from 'react';

const FormHandle = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    setSubmittedData({ name, email, phone }); //build object and go to React state 
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 border rounded shadow-lg'>
      <h2 className='text-xl font-bold mb-4 text-center text-red-400'>User Information Form</h2>
      
      <form onSubmit={handleSubmit}>  // This is event

        <div className='mb-4'>
          <label className='block mb-1 font-medium'>Name:</label>
          <input type='text' name='name' className='w-full border p-2 rounded-lg' />
        </div>

        <div className='mb-4'>
          <label className='block mb-1 font-medium'>Email:</label>
          <input type='email' name='email' className='w-full border p-2 rounded-lg' />
        </div>

        <div className='mb-4'>
          <label className='block mb-1 font-medium'>Phone Number:</label>
          <input type='number' name='phone' className='w-full border p-2 rounded-lg' />
        </div>

        <button type='submit' 
        className='bg-blue-600 text-white px-4 py-1 rounded-lg mt-5 hover:text-red-600'>
        Submit</button>
      </form>

      {
        //normally outpart or ui part catch data by . symble
        submittedData && (
          <div className='mt-6 p-4 bg-green-100 border rounded'>
            <h2 className='font-semibold text-green-700 mb-2'>Submitted Info:</h2>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Phone:</strong> {submittedData.phone}</p>
          </div>
        )
      }
    </div>
  );
};

export default FormHandle;

// মূল উদ্দেশ্য
// FormHandle হলো একটি ইউজার ইনফরমেশন ফর্ম কম্পোনেন্ট যা:
// ইউজারের ইনপুট নেয় (নাম, ইমেইল, ফোন),
// সেই ইনপুট সংগ্রহ করে রাখে,
// এবং সাবমিটের পর নিচে দেখায়।

// কাজের ধাপভিত্তিক বিশ্লেষণ (Working Process Step-by-Step)
// Step 1: Component Initialization (প্রথমবার রেন্ডার)
// React যখন অ্যাপ চালু করে এবং FormHandle কম্পোনেন্টকে DOM-এ যুক্ত করে:
// তখন useState(null) দ্বারা submittedData নামে একটি state বানানো হয়।
// এই মুহূর্তে ইউজার কিছু সাবমিট করেনি, তাই submittedData হলো null।

// React তখন JSX অনুযায়ী একটি ফর্ম তৈরি করে দেখায় (UI তে):
// Name input
// Email input
// Phone number input
// Submit button

// UI-তে এখন শুধু ফর্ম দেখা যাচ্ছে, কোনো সাবমিটেড তথ্য নয়।
//  Step 2: User Interaction – ইউজার ফর্ম পূরণ করে
// ইউজার এখন Name, Email ও Phone ফিল্ডে কিছু লিখছে।
// এই ইনপুটগুলো এখন DOM এর মধ্যে থাকে, কিন্তু React state এ নেই।
// কারণ, এই ফর্ম Unontrolled Form – ইনপুট ফিল্ডের ভ্যালুগুলো স্টেট দিয়ে নিয়ন্ত্রণ করা হয়নি, বরং form element থেকে সরাসরি নেওয়া হবে।
//  Step 3: Form Submission – সাবমিট বাটনে ক্লিক
// ইউজার যখন “Submit” বাটনে ক্লিক করে, তখন form এর onSubmit={handleSubmit} ইভেন্ট ফায়ার করে।

// handleSubmit ফাংশন কাজ শুরু করে:
//  এই ধাপে যা ঘটে:
// event.preventDefault() → ফর্ম সাবমিটে ব্রাউজার রিফ্রেশ করে না।
// event.target.name.value ইত্যাদি দিয়ে ইনপুট ফিল্ডের ভ্যালু DOM থেকে নেওয়া হয়। it occured in browser

// একটি object তৈরি করা হয়:
// { name: 'User Name', email: 'user@email.com', phone: '017...' }
// এই object setSubmittedData(...) দিয়ে React state এ সেট করা হয়।

// Step 4: React Re-render Triggered (state update)
// যখন setSubmittedData(...) চলে, তখন React বুঝে যায় যে state পরিবর্তিত হয়েছে।
// তখন React কম্পোনেন্টটিকে আবার রেন্ডার করে (re-render)।
// এবার React দেখে submittedData !== null → তাই নিচের অংশে সাবমিটেড তথ্যও রেন্ডার হয়।

// Step 5: Submitted Data Displayed
// রিরেন্ডারের পর JSX এ কন্ডিশনাল ব্লক চালু হয়:
// {
//   submittedData && (
//     <div>...</div>
//   )
// }
// অর্থাৎ, এখন ইউজারের ইনপুট তথ্য সুন্দরভাবে নিচে দেখানো হয় — নাম, ইমেইল ও ফোন নম্বর।

// পুরো প্রক্রিয়া সংক্ষেপে:
// ধাপ	কী হয়
// 1️⃣	কম্পোনেন্ট প্রথমবার রেন্ডার হয় – ফর্ম দেখায়
// 2️⃣	ইউজার ইনপুট দেয়
// 3️⃣	সাবমিট করলে ইনপুট ডেটা সংগ্রহ করা হয়
// 4️⃣	ডেটা submittedData স্টেটে রাখা হয়
// 5️⃣	React রিরেন্ডার করে এবং নিচে ইনফো দেখায়

// এই কোড থেকে কী শেখা যায়?
// Form Handling in React (Uncontrolled 방식)
// Event Prevent (পেজ রিফ্রেশ বন্ধ)
// State Change and Re-render
// conditional Rendering (যদি data থাকে, তাহলে UI তে কিছু দেখাও)

// ✨ চাইলে কী যোগ করা যায়?
// ✅ ইনপুট ফিল্ডে required দিলে ফর্ম ভ্যালিডেশন সহজ হবে।
// ✅ কনট্রোলড ফর্ম (state দিয়ে ইনপুট নিয়ন্ত্রণ) করতে পারো।
// ✅ Reset ফাংশন যোগ করে সাবমিটের পর ফর্ম খালি করা যায়।
