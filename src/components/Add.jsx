import React from 'react'
import { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from '../Firebase'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const navigate=useNavigate()
  const [roll,setroll]=useState("")
  const [name,setname]=useState("")
  const [phone,setphone]=useState("")

  const handlesubmit=(e)=>{
    const db = getDatabase(app)
    set(ref(db,'student/'+roll),{
      name:name,
      phone:phone
    }).then(res=>{
        navigate("/list")
    }).catch(err=>{console.log(err);
    })
    
  }


  return (
    <div>
      <h1>Add Student</h1>
      <input type="text" placeholder='Roll Number' onChange={(e)=>{setroll(e.target.value)}} />
      <br/>
      <input type="text" placeholder='Name' onChange={(e)=>{setname(e.target.value)}} />
      <br/>
      <input type="text" placeholder='Phone' onChange={(e)=>{setphone(e.target.value)}} />
      <br/>
      <button onClick={(e)=>{handlesubmit(e)}}>ADD</button>
    </div>
  )
}

export default Add
