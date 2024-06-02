import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Update() {
    const {id} = useParams("10");
    const[values, setValues] = useState("");
    useEffect(()=>
    {
        axios.get('http://localhost:8000/user')
        .then(res=> {
            console.log(res)
            setValues({...values, name:res.data.name, email:res.data.email})
        })
        .catch(err => console.log(err))
    },[])
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        axios.post('http://localhost:8000/user',values)
        .then(res=> {
            console.log(res)
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name :</label>
                    <input type="text" value={values.name} onChange={e => setValues({...values, name: e.target.value}) } name="name" className='form-control' placeholder='Enter Name' id="" />
                </div>
                <div>
                    <label htmlFor="name">Email :</label>
                    <input type="email" value={values.email} onChange={e => setValues({...values, email:e.target.value})} name="email" className='form-control' placeholder='Enter Email' id="" />
                </div>
                <br />
                <button className='btn btn-info'>Update</button>                
            </form>
        </div>
      
    </div>
  )
}

export default Update
