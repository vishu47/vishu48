import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Button, KTSVG, toAbsoluteUrl} from 'sr/helpers'
import CardWidget2 from 'sr/partials/widgets/widgets-components/cards/CardWidget2'

// type Props = {}

export default function UploadFile() {
  const navigate = useNavigate()
  const SelectImage = (e: any) => {
    e.preventDefault()
    console.log('kjhjk')
    setTimeout(() => {
      navigate('/extract-cheque/upload-list')
    }, 200)
  }
  return (
    <>
      <div className='upload_area pb-34'>
        <div className='container'>
          {/* new one design */}

          <div className='header_upload_text w-100 text-center pt-50 pb-16'>
            <p className='font-24 fonts-500'>Upload Here</p>
            <p className='font-18 fonts-400 '>Drag or choose file to upload</p>
          </div>
          <div className='bg_secondary_25 section_upload radius-16 drag position-relative pointer-event d-flex justify-content-center flex-column align-items-center text-center'>
            <input
              className='w-100 h-100 position-absolute opacity-0 '
              type='file'
              // onChange={(e: any) => navigate('/extract-cheque/upload-list')}
              onChange={(e: any) => SelectImage(e)}
            />
            <KTSVG
              path={'/media/icons/duotone/general/upload-file.svg'}
              svgClassName={'text_primary w-100'}
            />
            <p className='text_black_70 fonts-500 font-12 pt-26 pb-20'>PNG,GIF,WEBP,Max 5MB</p>
            <p className='fonts-500 font-12'>
              Would you like to continue with Last uploaded 5 files?
              <Link to='/extract-cheque/upload-list' className='cursor'>
                Click here
              </Link>
            </p>
          </div>
          {/* old one design */}
          {/* <div className='section_upload d-flex mt-5 radius-16 drag position-relative pointer-event'>
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
                <Button
                  type='file'
                  icon={'/media/icons/duotone/general/upload-button.svg'}
                  className={'bg-white text-primary px-5 py-3 border_primary font-14 fonts-700'}
                >
                  <Link to={'/extract-cheque/upload-list'}>Browse</Link>
                </Button>
              </div>
              <span className='text_secondary text-center font-12 fonts-400'>
                <small> PNG, GIF, WEBP,. Max 5MB.</small>
              </span>
            </div>
          </div> */}
        </div>
      </div>
      {/* <CardWidget2 /> */}
    </>
  )
}
