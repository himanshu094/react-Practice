import React from 'react'
import { Formik, useFormik } from 'formik';


export default function FormikComponentForm() {

  const formik = useFormik({
    initialValues:{
      UserName:'',
      Password:'',
      City:'',
      Subscribe:true
    },
    onSubmit:function(values){
      alert(`Name: ${values.UserName}\nSubscription: ${(values.Subscribe)?'Subscribed':'Not Subscribed'}\nPassword:${values.Password}\nCity:${values.City}`)
    }
  })

  return (
    <div className='container-fluid'>
      <form onSubmit={formik.handleSubmit}>
        <h2>Register User</h2>
        <dl>
          <dt>User Name</dt>
          <dd><input name='UserName' onChange={formik.handleChange}  type='text' value={formik.values.UserName} /></dd>
          <dt>Password</dt>
          <dd><input name='Password' onChange={formik.handleChange} value={formik.values.Password} type='password' /></dd>
          <dt>City</dt>
          <dd>
            <select onChange={formik.handleChange} value={formik.values.City} name='City'>
              <option>Delhi</option>
              <option>Hyd</option>
            </select>
          </dd>
          <dt>Subscribe</dt>
          <dd className='form-switch'><input  type='checkbox' className='form-check-input' name='Subscribe' onChange={formik.handleChange} checked={formik.values.Subscribe}  /> Yes</dd>
        </dl>
        <button >Register</button>
      </form>
      <h2>User Details</h2>
      {formik.values.UserName}
    </div>
  )
}
