import { useState } from "react"

export default function FormComponent(){
  const [users] = useState([
    {UserId:'jhon'},
    {UserId:'jhon12'},
    {UserId:'david'},
    {UserId:'jhon_nit'}
  ]);
  const [userMsg,setUserMsg] = useState('');
  const [isUserValid,setUserValid] = useState(false);
  const [pwdMsg,setPwdMsg] = useState('');
  const [capsStatus,setCapsStatus] = useState(false)
  const [cityMsg,setCityMsg] = useState('');
  const [userDetails,setUserDetails] = useState({UserId:'',Password:'',City:''})

  function VarifyUserId(e){

    for(let user of users){
      if(user.UserId==e.target.value){
        setUserMsg('User Id Taken - Try Another');
        setUserValid(false)
        break;
      } else {
        setUserMsg('User Id Available');
        setUserValid(true)
      }
    }
  }

  function HideUserMsg(e){
    if(e.target.value==""){
      setUserMsg('User Id Required')
    } else {
      setUserMsg('');
    }
  }

  function VarifyPassword(e){
    if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/)){   //!regular expression

      setPwdMsg('Strong Password');
    } else if(e.target.value.length<4) {

      setPwdMsg('Poor Password')
    } else {
      setPwdMsg('Weak Password')
    }
  }

  function HidePasswordMsg(){
    setPwdMsg('');
    setCapsStatus(false)
  }

  function VarifyCaps(e){
    if(e.keyCode>=65 && e.keyCode<=90 || e.charCode>=65 && e.charCode<=90){
      setCapsStatus(true)
    } else{
      setCapsStatus(false)
    }
  }

  function VarifyCity(e){
    if(e.target.value=='notcity'){
      setCityMsg('Please Select a City');
    } else {
      setCityMsg('');
      setUserDetails({
        UserId:userDetails.UserId,
        Password:userDetails.Password,
        City:e.target.value
      })
    }
  }

  function HandleUserChange(e){
    setUserDetails({
      UserId:e.target.value,
      Password:userDetails.Password,
      City:userDetails.City
    })
  }

  function HandlePasswordChange(e){
    setUserDetails({
      UserId:userDetails.UserId,
      Password:e.target.value,
      City:userDetails.City
    })
  }

  function RegisterClick(){
    alert(JSON.stringify(userDetails))
  }

  return(
    <div className="container-fluid">
      <h2>Register User</h2>
      <dl>
        <dt>User Id</dt>
        <dd><input type="text" onChange={HandleUserChange} onBlur={HideUserMsg}  onKeyUp={VarifyUserId} /></dd>
        <dd className={(isUserValid)?'text-success':'text-danger'}>{userMsg}</dd>
        <dt>Password</dt>
        <dd><input type="password" onChange={HandlePasswordChange} onKeyPress={VarifyCaps} onBlur={HidePasswordMsg} onKeyUp={VarifyPassword} /></dd>
        <dd>{pwdMsg}</dd>
        <dd className={capsStatus?'d-block':'d-none'}>
          <span className="text-warning">
            <span className="bi bi-exclamation-triangle"></span> Caps ON
          </span>  
        </dd>
        <dt>Your City</dt>
        <dd>
          <select onChange={VarifyCity}>
            <option value="notcity">Select Your City</option>
            <option value='Delhi'>Indore</option>
            <option value='Pune'>Pune</option>
            <option value='Banglore'>Banglore</option>
          </select>
        </dd>
        <dd className={'text-danger'}>{cityMsg}</dd>
      </dl>
      <button onClick={RegisterClick}>Register</button>
    </div>
  )
}