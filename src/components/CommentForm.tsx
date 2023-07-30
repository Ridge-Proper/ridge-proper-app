'use client'

import { useState, useEffect } from 'react'
import { submitComment } from '@/services/graphql'

const CommentForm = (
  { slug }: { slug:string }
) => {

  const [error, setError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [formData, setFormData] = useState(
    {
      comment: "",
      name: "",
      email: ""
    }
  )

  useEffect(() => {
    setFormData(
      {
        ...formData, 
        name: window.localStorage.getItem('name') || "",
        email: window.localStorage.getItem('email') || "" 
      }
    )
  },[])

  function handleChange(e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void {
    const {name, value} = e.currentTarget;
    setFormData({...formData, [name]: value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setError(false);

    if (!formData.comment || !formData.email || !formData.name) {
      setError(true);
      return;
    }

    const commentObj = { 
      name: formData.name,
      email: formData.email,
      comment: formData.comment,
      slug: slug
    }

    // Save the user's name and email for the next time they comment
    window.localStorage.setItem('name', formData.name)
    window.localStorage.setItem('email', formData.email)
     
    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false)
        }, 3000)
      })
  }

  return (
    <form 
      className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'
      onSubmit={handleSubmit}>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Leave a reply
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea 
          name="comment"
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' 
          placeholder='Comment'
          onChange={handleChange} />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2'>
        <input
          type='text'
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' 
          placeholder='Name'
          name='name' 
          onChange={handleChange} 
          value={formData.name} />
          <input
          type='text'
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' 
          placeholder='Email'
          name='email' 
          onChange={handleChange} 
          value={formData.email} />
      </div>
      { error && <p className='text-xs text-red-500'>All fields are required.</p>}
      <div className='mt-8'>
        <button
          type='submit' 
          className='transition duration-500 ease hover:bg-[#DDB109] inline-block bg-[#7048CF] text-lg rounded-full text-white px-8 py-3 cursor-pointer' >
          Submit Comment
        </button>
        { showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment submitted for review.</span>}
      </div>
    </form>
  )
}

export default CommentForm