import React from 'react'

function Preview({ formData }) {
  return (
    <>
    <h3 className=' text-4xl pb-12 pt-8 text-center font-bold border-b-4 bg-[rgb(197,89,56)] text-[rgb(255,255,255)] '>{formData.name || "Your Name"}</h3>
    <h3 className=' text-3xl pb-2 font-bold border-b-2 border-[rgb(197,89,56)] '>Summary</h3>

    <p className='py-3 text-l '>{formData.bio || "Your Bio Goes Here..."}</p>
    <h3 className=' text-3xl pb-2 font-bold border-b-2 border-[rgb(197,89,56)] '>Skills</h3>
    <ul className='py-1'>
      {formData.skills.map((skill, index)=>(
        <li key={index}>✅{skill}</li>
      ))}
    </ul>
    </>
  )
}

export default Preview