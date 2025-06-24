import React from 'react'
import Form from './components/Form'
import Preview from './components/Preview'
import { useState,useEffect } from 'react'
function App() {
  const [formData, setFormData] = useState({
    name:"",
    bio:"",
    skills:[]
  })

const [isInitial, setIsInitial] = useState(true);

// Load from localStorage
useEffect(() => {
  const saved = localStorage.getItem("portfolioData");
  if (saved) {
    setFormData(JSON.parse(saved));
  }
}, []);

// Save to localStorage only after first render
useEffect(() => {
  if (isInitial) {
    setIsInitial(false);
    return;
  }
  localStorage.setItem("portfolioData", JSON.stringify(formData));
}, [formData]);

  return (
    <>
      <div className='max-w-full min-h-[100vh] flex justify-between p-10 gap-10'>
        <div className="flex-1 bg-[rgb(106,106,106)] text-white">
          <Form formData={formData} setFormData={setFormData} />
        </div>
        <div className="flex-1 bg-[rgb(255,255,255)] text-black">
          <Preview formData={formData}/>
        </div>
      </div>

    </>
  )
}

export default App
