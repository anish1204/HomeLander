import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


function SignUp() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneno, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e){
    e.preventDefault();
    console.log(email);
    try{
      await axios.post("http://localhost:3000/signup",{
        name,email,phoneno,password
      })
    }
    catch(err)
    {
      console.log(err);
    }


  }


  return (
    <div>
      <form action='POST'>
        <br /><br />
        <input type='name' onChange={(e) => { setName(e.target.value) }} placeholder='Name' /><br /><br />
        <input type='PhoneNumber' onChange={(e) => { setPhoneNo(e.target.value) }} placeholder='PhoneNumber' /><br /><br />
        <input type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' /><br /><br />
        <input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' /><br /> <br />
        <input type='submit' onClick={submit} placeholder='Submit' />
      </form>
      <Link to='/login' >Login</Link>

    </div>
  )
}

export default SignUp