import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Login() {

  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // onChange={(e)=>{e.target.value}}


  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/", {
        email, password
      }).then(res=>{
        if(res.data==="notexist"){
          history('/home',{state:{id:email}})
        }else if(res.data === "exist")
        {
            alert('Missing Data')
        }
      })

      console.log(email + '  ' + password);

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Google Form</h1>
      <form action='POST'>
        <br /><br />
        <input type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' /><br /><br />
        <input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' /><br /> <br />
        <input type='submit' onClick={submit} placeholder='Submit' />
      </form>
      <Link to='/signup' >SignUp</Link>

    </div>
  )
}

export default Login