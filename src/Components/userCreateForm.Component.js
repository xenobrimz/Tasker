import React, { useState } from 'react'
import axios from 'axios';

const Create = () => {
    const [userName, setUserName] = useState(""); 
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [formError, setError] = useState('')
   
    const onSubmitHandler = e => {
        
        e.preventDefault();
      
        axios.post('http://localhost:8000/api/users/', {
            userName,
            password,
            email
        })
            .then(res =>{     
                if(res.data.results){
                    console.log(res)
                    
                }else{
                    console.log('Whoops')
                    console.log(res)
                    setError(res.data.error.errors)
                }
            })    
    }
   
    return (
        <form className='container d-flex justify-content-space-between flex-column ' onSubmit={onSubmitHandler}>
            <div className='form-group d-flex flex-column w-25'>
                <label>Name:</label><br/>
                <input type="text" onChange={(e)=>setUserName(e.target.value)} value={userName}/>
                {formError.userName? <p className='text-danger'>{formError.userName.message}</p>:''}
            </div>
            <div className='form-group d-flex flex-column '>
                <label>email:</label><br/>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                {formError.email? <p className='text-danger'>{formError.email.message}</p>:''}
            </div>
            <div className='form-group d-flex flex-column '>
                <label>password:</label><br/>
                <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                {formError.password? <p className='text-danger'>{formError.password.message}</p>:''}
            </div>
            <input className='btn btn-primary w-25' type="submit"/>
        </form>
    )   
}
export default Create;