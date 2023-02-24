import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Help1Banner, Help1RightArrow} from 'sr/helpers'
import {KTIMG} from 'sr/helpers/ui-components/KTIMG'

// type Props = {}

export default function Help1() {
  return (
    <>
      <div className='section container help1 mb-90'>
        <div className='d-flex gradient_primary radius-12 overflow-hidden'>
          <div className='col-md-5 help_image ' style={{backgroundImage: `url(${Help1Banner})`}}>
            {/* <KTIMG path={'/media/img/stock/img-1.jpg'} alt='img' className='w-100 h-25' /> */}
          </div>
          <div className='col-md-7 d-flex flex-row justify-content-evenly align-items-center'>
            <div className=' d-flex flex-column '>
              <p className='text_primary2 fonts-500 font-20'>Looking for Help?</p>
              <p className='text_primary fonts-500 font-16'>
                You can reach us though chatbot or How to get started us
                {/* You can chat with us go to{' '}
                <Link to={'/'}>
                  {' '}
                  <u> Extract Resources </u>
                </Link> */}
              </p>
            </div>
            <div className='align-flex-start'>
              <Button icon={Help1RightArrow} className='bg_primary text-white font-14 fonts-700'>
                Tolk To us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
