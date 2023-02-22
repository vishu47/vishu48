import React from 'react'
import {Link} from 'react-router-dom'

export default function CardWidget2() {
  return (
    <>
      <div className='container text-center py-4'>
        <div className='row'>
          <div className='col-md-12'>
            <p className='font-18 font-400'>
              Would you like to continue with Last uploaded 30 files?
              <Link to={'/'}> Click Here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
