
import { useState } from 'react';
import './App.css';
import { FaTrashAlt } from 'react-icons/fa';

function App() {

  
  const [jobs,setJobs]=useState([])
  const [job,setJob]=useState('')


  // handle submit
  const handleSubmit = ()=>{
    setJobs(prev =>{
      const newJobs=[...prev,job]

      // save local
      localStorage.setItem("jobs",JSON.stringify(newJobs))
      return newJobs;
    })
    setJob('')
  }


  // handle delete
  const handleDelete= (index)=>{
    const removeItem=jobs.filter((job,key)=>{
      return key!==index
    })
    setJobs(removeItem)
  }
  return (
    
    <div className="App">
      <h1>todo-list</h1>

      <input value={job} onChange={(e)=> setJob(e.target.value)} placeholder="input"></input>
      <button onClick={()=>handleSubmit()}>Add</button>
      <ul>
        {jobs.map((job,index)=>(
          <li key={index}>{index +1}-{job}  <button onClick={()=>handleDelete(index)}><FaTrashAlt /></button></li>
          
        ))}
      </ul>
    </div>
  );
}

export default App;
