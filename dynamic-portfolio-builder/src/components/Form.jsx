import React from 'react'

function Form({ formData, setFormData }) {
const updateField = (field, value)=>{
    setFormData({...formData, [field]:value})
}
    const addSkills =() =>{
      const skills = prompt("Enter Your Skill")
      if(skills){
        setFormData({...formData, skills: [...formData.skills, skills]})
      }
    }





  return (
    <div className='p-4'>
      <h2 className='text-2xl text-center p-4 text-[rgb(95,40,24)] font-bold'>Enter Portfolio Details</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='flex gap-2 items-center mb-2'>
          <label htmlFor="name" className='text-xl text-black'>Your Name</label>
          <input
          className='px-4 py-2 border-2 border-black text-xl outline-0 rounded-2xl w-[480px]'
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)} />
        </div>
        <div className='flex gap-2 items-center mb-2'>
          <label htmlFor="bio" className='text-xl text-black'>Short Bio</label>
          <textarea name="bio"
                    className='px-4 py-2 border-2 border-black text-xl outline-0 rounded-2xl w-[500px]'
            value={formData.bio}
            placeholder='Write Bio...'
            onChange={(e) => updateField( "bio", e.target.value)}>
          </textarea>
        </div>
        <button type='button' onClick={addSkills} className='text-black text-xl'>+ Add Skills</button>





      </form>

    </div>
  )
}

export default Form