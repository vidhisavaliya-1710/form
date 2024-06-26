import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const init={
  fname:'',
  mname:'',
  lname:'',
  date:'',
  sid:'',
  add:'',
  city:'',
  state:'',
  zip:'',
  email:'',
  no:'',
  course:''
}

const validate=Yup.object({
    fname:Yup.string().min(2).max(15).required('Must be requied..!'),
    mname:Yup.string().min(2).max(15).required('Must be requied..!'),
    lname:Yup.string().min(2).max(15).required('Must be requied..!'),
    date:Yup.string().required('Must be requied..!'),
    sid:Yup.number().min(3).required('Must be numrical requied..!'),
    add:Yup.string().required('Address can be Required'),
    city:Yup.string().required('City can be Required'),
    state:Yup.string().required('State can be Required'),
    zip:Yup.number().min(6).required('zipcode  can be numrical Required'),
    email:Yup.string().email().required('Email can be Required..!'),
    no:Yup.number().min(10).required('Phone no  can be numrical Required'),
    course:Yup.string().required('Choose Your Course')
})
function Res() {

  const {values,handleBlur ,handleChange ,handleSubmit ,touched ,errors}=useFormik({
    initialValues:init,
    validationSchema:validate,
    onSubmit:(values)=>{
      console.log(values);
    }
     

  })
  console.log(values)

  return (
    <>
      <div className="container">
      <form className="row g-3 mt-5" onSubmit={handleSubmit}>
        <h2>Student Information</h2>
  <div className="col-md-4">
    {/* <label htmlFor="inputEmail4" className="form-label">First Name</label> */}
    <input type="text" className="form-control" id="inputEmail4" placeholder='First Name' name='fname' onChange={handleChange} onBlur={handleBlur}/>
    {errors.fname && touched.fname?(<div className='text-danger'>{errors.fname}</div>):null}
  </div>
  <div className="col-md-4">
    {/* <label htmlFor="inputPassword4" className="form-label">Middle Name</label> */}
    <input type="text" className="form-control" id="inputPassword4" placeholder='Middle Name' name='mname' onChange={handleChange} onBlur={handleBlur}/>
    {errors.mname && touched.mname?(<div className='text-danger'>{errors.mname}</div>):null}
  </div>
  <div className="col-md-4">
    {/* <label htmlFor="inputAddress" className="form-label">Last Name</label> */}
    <input type="text" className="form-control" id="inputAddress" placeholder="Last Name" name='lname' onChange={handleChange} onBlur={handleBlur}/>
    {errors.lname && touched.lname?(<div className='text-danger'>{errors.lname}</div>):null}
  </div>
  <div className="col-md-6">
    {/* <label htmlFor="inputAddress2" className="form-label">Address 2</label> */}
    <input type="date" className="form-control" id="inputAddress2" placeholder="Date of Birth" name='date' onChange={handleChange} onBlur={handleBlur}/>
    {errors.date && touched.date?(<div className='text-danger'>{errors.date}</div>):null}
  </div>
  <div className="col-md-6">
    {/* <label htmlFor="inputCity" className="form-label">City</label> */}
    <input type="text" className="form-control" id="inputCity" placeholder='Student ID' name='sid' onChange={handleChange} onBlur={handleBlur}/>
    {errors.sid && touched.sid?(<div className='text-danger'>{errors.sid}</div>):null}
  </div>

  <h2>Address</h2>
  <div className="col-md-12">
  <input type="text" className="form-control" id="inputCity" placeholder='Street Address' name='add' onChange={handleChange} onBlur={handleBlur}/>
  {errors.add && touched.add?(<div className='text-danger'>{errors.add}</div>):null}
  </div>
  <div className="col-md-4">
  <input type="text" className="form-control" id="inputCity" placeholder='City' name='city' onChange={handleChange} onBlur={handleBlur}/>
  {errors.city && touched.city?(<div className='text-danger'>{errors.city}</div>):null}
  </div>
  <div className="col-md-4">

  <input type="text" className="form-control" id="inputCity" placeholder='State' name='state' onChange={handleChange} onBlur={handleBlur}/>
  {errors.state && touched.state?(<div className='text-danger'>{errors.state}</div>):null}
  </div>
  <div className="col-md-4">
    {/* <label htmlFor="inputZip" className="form-label">Zip</label> */}
    <input type="text" className="form-control" id="inputZip" placeholder='Zip Code' name='zip' onChange={handleChange} onBlur={handleBlur}/>
    {errors.zip ?(<div className='text-danger'>{errors.zip}</div>):null}
  </div>

  <h2>Contact Information</h2>
  <div className="col-md-6">
  <input type="email" className="form-control" id="inputCity" placeholder='Email' name='email' onChange={handleChange} onBlur={handleBlur}/>
  {errors.email && touched.email?(<div className='text-danger'>{errors.email}</div>):null}
  </div>
  <div className="col-md-6">
  <input type="text" className="form-control" id="inputCity" placeholder='Phone No' name='no' onChange={handleChange} onBlur={handleBlur}/>
  {errors.no ?(<div className='text-danger'>{errors.no}</div>):null}
  </div>

  <h2>Course</h2>
  <div className="col-md-6">
    {/* <label htmlFor="inputState" className="form-label">State</label> */}
    <select class="form-select" aria-label="Default select example" name='course' onChange={handleChange} onBlur={handleBlur}>
        <option selected>Open this select menu</option>
        <option value="BCA">BCA</option>
        <option value="BBA">BBA</option>
        <option value="B.Com">B.Com</option>
        {/* <option value="3">Bsc</option> */}
</select>
{errors.course && touched.course?(<div className='text-danger'>{errors.course}</div>):null}
  </div>
  
 
  <div className="col-12 d-flex justify-content-center">
    <button type="submit" className="btn btn-primary mt-5 ">Sign in</button>
  </div>
</form>

      </div>
    </>
  )
}

export default Res
