import React, { useState } from 'react'
import "../Styles/Register.css"
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import eye from "../Images/eye.png"
import closedEye from "../Images/closed-eyes.png"
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

const Register = () => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      mobile: '',
    },
    validate: (values) => {
      const errors = {};
      // perform validation logic and add error messages to the `errors` object
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
      return errors;
    },
    onSubmit: (values) => {
      // handle form submission logic
      console.log(values);
      // redirect to another page
      window.location.href = '/Login';
    },
  })

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function isValidEmail(email) {
    return emailRegex.test(email);
  }

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="register">
      <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
          <p className="inner-register">Register</p>
          <p className="name">
            Name :
          </p>
          <input className='input-tag' type="text" />
          <p className="name">
            Mobile No :
          </p>
          <div className="mobile">
            <PhoneInput
              international
              defaultCountry="IN"
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </div>
          <p className="name">
            E-mail :
          </p>
          <input className='input-tag' type="email" onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email} />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <p className="name">
            Password :
          </p>
          <div className="diplay-flex">
            <input className='input-tag' type={showPassword ? 'text' : 'password'} onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password} />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <button onClick={toggleShowPassword}>
              {showPassword ? <img src={closedEye} alt=" " className='button-img' /> : <img src={eye} alt=" " className='button-img' />}
            </button>
          </div>
          <p className='long-msg'>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.</p>
          <button type='submit' className='submit-btn' disabled={!formik.isValid}>Submit</button>
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