import React from 'react'
import { useEffect,useState } from 'react';
import { useCookies } from 'react-cookie';
import { useCaptcha } from '../customHooks/useCaptcha';

export default function Cookie() {

  const [cookies,setCookie,removeCookie]=useCookies(['username']);
  const [userDetails,setUserDetails] = useState({UserName:'',Password:''});
  const {code} = useCaptcha();
  console.log(code);

  useEffect(()=>{
    if(cookies.username==undefined){
      alert('Please Login')
    }
  },[])

  function handleUserName(e){
    setUserDetails({
      UserName:e.target.value,
      Password:userDetails.Password
    })
  }
  function handlePassword(e){
    setUserDetails({
      UserName:userDetails.UserName,
      Password:e.target.value
    })
  }
  function handleLogin(){
    setCookie('username',userDetails.UserName,{path:'/',expires:new Date('2023-12-06 20:22')});
    alert('Login Success..');
  }
  function handleSignout(){
    removeCookie('username');
    alert('signed out Successfully')
  }
  function handleNewCode(){
    
  }

  return (
    <div className='container-fluid'>
      <h2>User Login</h2>
      <dl>
        <dt>User Name</dt>
        <dd><input onChange={handleUserName} type='text'/></dd>
        <dt>Password</dt>
        <dd><input onChange={handlePassword} type='password'/></dd>
        <dt>Verify Code <button>New Code</button></dt>
        <dd>{code}</dd>
      </dl>
      <button onClick={handleLogin}>Login</button>
      <hr/>
      <h3>Home <button onClick={handleSignout} className='btn btn-link'>SignOut</button></h3>
      Hello! cookie - {cookies.username}
    </div>
  )
}
