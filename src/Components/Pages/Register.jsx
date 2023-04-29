import React, { useState } from 'react'
import "../Styles/Register.css"
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      mobile: '',
      name: ''
    },


    validate: (values) => {
      const errors = {};
      const phoneNumberRegex = /^\+[1-9]\d{1,14}$/;

      if (!values.name) {
        errors.name = 'name is required';
      }

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
      }

      if (!values.mobile) {
        errors.mobile = 'Mobile is required';
      } else if (isNaN(Number(values.mobile))) {
        errors.mobile = 'Mobile number must be a number';
      }
       else if (values.mobile.length < 10 || values.mobile.length > 10) {
        errors.mobile = 'mobile must be at least 10 characters';
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
      window.location.href = '/login';
    },
  })

  return (
    <div className="register">
      <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>

          <p className="inner-register">Register</p>

          <p className="name">Name :</p>
          <input id="name" name="name" className='input-tag' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur}
            value={formik.values.name} />

          {formik.touched.name && formik.errors.name ? (<div>{formik.errors.name}</div>) : null}

          <p className="name">Mobile No :</p>
          <div className="mobile">
            {/* <PhoneInput
              defaultCountry="US"
              value={phoneNumber}
              onChange={setPhoneNumber}
              placeholder="Enter phone number"
            /> */}
          </div>

          <input id="mobile" name="mobile" className='input-tag' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur}
            value={formik.values.mobile} />


          {formik.touched.mobile && formik.errors.mobile ? (<div>{formik.errors.mobile}</div>) : null}


          <p className="name">E-mail :</p>
          <input
            className='input-tag'
            id="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email} />

          {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}

          <p className="name">Password :</p>
          <div className="diplay-flex">
            <input
              className='input-tag'
              id="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password} />
          </div>

          {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}

          <p className='long-msg'>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.</p>

          <button className='submit-btn' type="submit">Submit</button>
        </form>

        <div className="flex-ah">
          <p className='already-have'>Already Have An Account? </p>
          <Link to='/login'>Sign In.</Link>
        </div>

      </div>
    </div>
  )
}

export default Register