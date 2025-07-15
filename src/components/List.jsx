import React from 'react'
import {app} from '../Firebase'
import { useEffect, useState } from 'react'
import { getDatabase, onValue, ref, remove } from 'firebase/database'
import { useNavigate } from 'react-router-dom'


const List = () => {
  const [li,setli]=useState(null)
  const navigate= useNavigate()
  useEffect(()=>{
    const db=getDatabase(app)
    const stref=ref(db,'student')
    onValue(stref,(snapshot)=>{
      const data=snapshot.val()
      setli(data)
    })
  },[])

  const handeldelete=(key)=>{
    const db = getDatabase(app)
    const stdref=ref(db,'student/'+key)
    remove(stdref)
  }
  const handleupdate= (key,value)=>{
    navigate('/update',{state:[key,value]})
  }

  return (
    <div>
      <h1>Student List</h1>
      {li && (
        <div> 
          {
            Object.entries(li).map(([key,value])=>(
              <div key={key}>
                {console.log(value)}
                
                <p>name- {value.name}  number- {value.phone}</p>
                <button onClick={()=>{handeldelete(key)}}>Delete</button>
                <button onClick={()=>{handleupdate(key,value)}}>Update</button>

              </div>
              )
          )
          }
        </div>
      )}
    </div>
  )
}

export default List
