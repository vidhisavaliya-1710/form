import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'


const init={
  name:'',
  email:'',
  password:'',
  cpassword:'',
  state:'',
  gender:''
}

const validate=Yup.object({
  name:Yup.string().min(2).max(10).required('Name must be required...!'),
  email:Yup.string().email().required('Email id must be required..!'),
  password:Yup.string().max(8).matches(/^[aA-zZ0-9]+$/).required('Can follow pattern password'),
  password:Yup.string().min(6).required('Must be required Password..!'),
  cpassword:Yup.string().oneOf([Yup.ref('password'),null],"password are not same"),
  state:Yup.string().required('Choose Your State'),
  gender:Yup.string().required('Choose Your Gender')
})
function Concept() {


 const {values, handleBlur ,handleChange, handleSubmit ,touched ,errors}= useFormik({
        initialValues:init,
        validationSchema:validate,
        onSubmit:(values)=>{
            console.log(values);
        }
    })

    console.log(values)
  return (
    <>
      <div className="container mt-5">
      <form className="row g-3" onSubmit={handleSubmit}>
  <div className="col-md-12">
    <label htmlFor="inputEmail4" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="inputEmail4" name='name' onChange={handleChange} onBlur={handleBlur}/>

    {errors.name && touched.name ?(<div className='text-danger'>{errors.name}</div>):null}
  </div>
  <div className="col-md-12">
    <label htmlFor="inputPassword4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputPassword4" name='email' onChange={handleChange} onBlur={handleBlur}/>

    {errors.email && touched.email ?(<div className='text-danger'>{errors.email}</div>):null}
  </div>
  <div className="col-6">
    <label htmlFor="inputAddress" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' onChange={handleChange} onBlur={handleBlur}/>
    {errors.password && touched.password ?(<div className='text-danger'>{errors.password}</div>):null}
  </div>
  <div className="col-6">
    <label htmlFor="inputAddress" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" name='cpassword' onChange={handleChange} onBlur={handleBlur}/>
    {errors.cpassword && touched.cpassword ?(<div className='text-danger'>{errors.cpassword}</div>):null}
  </div>
  
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select" name='state' onChange={handleChange} onBlur={handleBlur}>
      <option selected>Choose...</option>
      <option>Gujarat</option>
      <option>Mumbai</option>
      <option>Delhi</option>
    </select>
    {errors.state && touched.state ?(<div className='text-danger'>{errors.state}</div>):null}
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Gender</label>
    {/* <input type="radio" className="form-control" id="inputZip" /> */}

    <div className='d-flex'>
  <div className="form-check me-3">
    <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" onChange={handleChange} onBlur={handleBlur}/>
    <label className="form-check-label" htmlFor="flexRadioDefault1">
      Male
    </label>
   
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" onChange={handleChange} onBlur={handleBlur} />
    <label className="form-check-label" htmlFor="flexRadioDefault2">
      Female
    </label>
  </div>
  
</div>
{errors.gender && touched.gender ?(<div className='text-danger'>{errors.gender}</div>):null}
  </div>
  
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>

      </div>
    </>
  )
}

export default Concept
