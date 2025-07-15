import React from 'react'
import { useState } from 'react'
import { getDatabase, ref, set, update } from 'firebase/database'
import { app } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Update = () => {
  const navigate=useNavigate()
   const location= useLocation()
  const [roll,setroll]=useState(location.state[0])
  const [name,setname]=useState(location.state[1].name)
  const [phone,setphone]=useState(location.state[1].phone)
 
  console.log(location);
  

  const handleupdate=(e)=>{
    const db = getDatabase(app)
    const stref=ref(db,'student/'+location.state[0])
    update(stref,{name:name,phone:phone})
    .then(res=>{
        navigate("/list")
    }).catch(err=>{console.log(err);
    })
    
  }


  return (
    <div>
      <h1>Update Student</h1>
      <input type="text" value={roll} disabled  placeholder='Roll Number' onChange={(e)=>{setroll(e.target.value)}} />
      <br/>
      <input type="text" value={name} placeholder='Name' onChange={(e)=>{setname(e.target.value)}} />
      <br/>
      <input type="text" value={phone} placeholder='Phone' onChange={(e)=>{setphone(e.target.value)}} />
      <br/>
      <button onClick={(e)=>{handleupdate(e)}}>Update</button>
    </div>
  )
}

export default Update
