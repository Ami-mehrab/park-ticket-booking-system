import React from 'react'
import Navigation from '../components/Navigation'
import Card from 'react-bootstrap/Card';
const RegistrationPage = () => {
  return (
    <>
    <Navigation/>
      <div className=" w-100 h-100 d-flex justify-content-center align-items-center">
      <Card style={{ width: '25rem' }} className=' text-start my-4'>
      <Card.Body>
        <Card.Title className=' mb-5'>Registration</Card.Title>
        <Card.Text>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Mobile Number</label>
              <input type="tel" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default RegistrationPage