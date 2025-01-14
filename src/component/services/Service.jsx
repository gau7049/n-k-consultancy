import React from 'react'
import Loan from '../../assets/loan.png'
import incomeTax from '../../assets/income_tax.jpg'
import register from '../../assets/register.jpg'
import certificate from '../../assets/certificate.jpg'
import civilLaw from '../../assets/civilLaw.png'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <div id="our-service">
      <h2>Our Services:</h2>
      <p className="text-muted">
        At N & K. Consultancy, we offer a comprehensive range of legal services
        tailored to meet the diverse needs of our clients. Our areas of
        expertise include:
      </p>
      <div class="cards-container">
        <div class="cards">
          <img src={Loan} alt="" />
          <Link to={'/loan'}>
            <button class="btn btn-primary">Loan</button>
          </Link>
        </div>
        <div class="cards">
          <img src={incomeTax} alt="" />
          <Link to={'/income-tax'}>
          <button class="btn btn-primary">Income Tax</button>
          </Link>
        </div>
        <div class="cards">
          <img src={register} alt="" />
          <Link to={'/registration'}>
          <button class="btn btn-primary">Registration</button>
          </Link>
        </div>
        <div class="cards">
          <img src={certificate} alt="" />
          <Link to={'/certificate'}>
          <button class="btn btn-primary">Certificate</button>
          </Link>
        </div>
        <div class="cards">
          <img src={civilLaw} alt="" />
          <Link to={'/civil-law'}>
          <button class="btn btn-primary">Civil Law</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Service