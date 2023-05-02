import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const RegisterAndStartDetail = () => {

  const countries = require("country-state-city").Country
  const States = require("country-state-city").State
  const Cities = require("country-state-city").City

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const [inputValue, setInputValue] = useState('');
  const [isInputCorrect, setIsInputCorrect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === '123') {
      setIsInputCorrect(true);
    } else if (inputValue === '') {
      setIsInputCorrect(alert("Please Enter Something!!"));
    } else {
      setIsInputCorrect(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className='register'>
        <div className="container-fluid">
          <p className='inner-rands'>Register and Start Selling</p>
          <form onSubmit={handleSubmit}>
            <div className="outer-cb">
              <p className='company-bussiness'>Store Name<span style={{ color: "red" }}>*</span></p>
              <button className='check-availability' type="submit">Check Availability</button>
            </div>
            <input type="text" className='input-type-text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </form>
          {isInputCorrect && isInputCorrect ? (<p style={{ color: 'green' }}>Store Name Available</p>) : (<p style={{ color: 'red' }}>Store Name Not Available</p>)}

          <p className='company-bussiness'>Select Product Category<span style={{ color: "red" }}>*</span></p>
          <select name="" id="" className='select'>
            <option disabled selected value="">Choose the category</option>
            <option value="">Auto Motive</option>
            <option value="">Camara</option>
            <option value="">Power bank</option>
            <option value="">Watch</option>
            <option value="">Phone</option>
            <option value="">Bag</option>
            <option value="">Parch</option>
            <option value="">Shows</option>
            <option value="">Head Phone</option>
          </select>

          <p className='inner-rands'>Enter Your Address Details</p>

          <p className='company-bussiness'>Pin code<span style={{ color: "red" }}>*</span></p>
          <input type="text" className='input-type-text' required />
          <p className='company-bussiness'>Address Line 1<span style={{ color: "red" }}>*</span></p>
          <input type="text" className='input-type-text' required />
          <p className='company-bussiness'>Address Line 2<span style={{ color: "red" }}>*</span></p>
          <input type="text" className='input-type-text' required />

          <p className='company-bussiness'>Country<span style={{ color: "red" }}>*</span></p>
          <select className='select' value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select Country</option>
            {countries.getAllCountries().map((country) => (
              <option key={country.isoCode} value={country.isoCode}>
                {country.name}
              </option>
            ))}
          </select>

          <p className='company-bussiness'>State<span style={{ color: "red" }}>*</span></p>
          <select className='select' value={selectedState} onChange={handleStateChange}>
            <option value="">Select State</option>
            {States.getStatesOfCountry(selectedCountry).map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))}
          </select>

          <p className='company-bussiness'>City<span style={{ color: "red" }}>*</span></p>
          <select className='select' value={selectedCity} onChange={handleCityChange}>
            <option value="">Select City</option>
            {Cities.getCitiesOfState(selectedCountry, selectedState).map((city) => (
              <option key={city.isoCode} value={city.isoCode}>
                {city.name}
              </option>
            ))}
          </select>
          <Link to='/twostepdetail'><button className="Continue123" type="submit">Continue</button></Link>
          <div className="flex-ah">
            <p className='already-have'>Like to create new account?</p>
            <Link to='/register'>Click here</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default RegisterAndStartDetail