import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Button} from 'sr/helpers'

export default function ErrorsPage() {
  // url
  const navigate = useNavigate()
  const GoBack = () => {
    navigate(-1)
  }
  return (
    <>
      <div className='d-flex align-items-center justify-content-center vh-100'>
        <div className='text-center'>
          <h1 className='display-1 fw-bold'>404</h1>
          <p className='fs-3'>
            <span className='text-danger'>Opps!</span> Page not found.
          </p>
          <p className='lead'>The page you’re looking for doesn’t exist.</p>
          {/* <Button
            onClick={GoBack}
            className='px-28 mt-20 font-16 fonts-500 text-white bg_primary border border-white'
          >
            Go Back
          </Button> */}
          <Link to={'/'} className='btn btn-primary mt-5'>
            Go Home
          </Link>
        </div>
      </div>
    </>
  )
}
