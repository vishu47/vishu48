import React from 'react'
import {Link} from 'react-router-dom'
import {Button, toAbsoluteUrl} from 'sr/helpers'

type Props = {}

export default function UploadFile() {
  return (
    <>
      <div className='upload_area'>
        <div className='container-lg'>
          <div className='row mt-5 radius-16 drag position-relative pointer-event'>
            <input className='w-100 h-100 position-absolute opacity-0 ' type='file' />
            <div className='col-md-7 d-flex justify-content-end  drag'>
              <img src={toAbsoluteUrl('/media/img/svg/upload.svg')} alt='upload' />
            </div>
            <div className='col-md-5 d-flex align-items-center ps-5 flex-column gap-3 w-25'>
              <p className='text-center font-24 fonts-400'>
                Drag Your <br /> files here to upload
              </p>
              <span className='text_secondary text-center font-600'>
                <small> or click to browser</small>
              </span>
              <div className='position-relative text-center mt-3 upload_button'>
                {/* <input type='file' /> */}
                <Button
                  type='file'
                  icon={'/media/icons/duotone/general/upload-button.svg'}
                  className={'bg-white text-primary px-5 py-3 border_primary font-14 fonts-700'}
                >
                  <Link to={'/extract-bank-statement/upload-list'}>Browse</Link>
                </Button>
              </div>
              <span className='text_secondary text-center font-12 fonts-400'>
                <small> PNG, GIF, WEBP,. Max 5MB.</small>
              </span>
            </div>
          </div>
        </div>
      </div>
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
