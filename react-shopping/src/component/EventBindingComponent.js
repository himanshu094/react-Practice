import {useEffect,useState} from 'react'

export default function EventBindingComponent() {

  const [userName,setUserName]=useState('Mitali');

  function handleUserName(e){
    setUserName(e.target.value);
  }

  return (
    <div className='container-fluid'>
      <dl>
        <dt>User Name</dt>
        {/* //! value will be set if we use onChange event otherwise for other event (onKeyUp,OnBlur) input field will be readonly */}
        <dd><input type='text' value={userName} onChange={handleUserName}/></dd> 
      </dl>
      <h3>Hello ! {userName}</h3>
    </div>
  )
}
