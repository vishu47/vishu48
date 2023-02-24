import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from 'sr/helpers'

type Props = {
  selectImage: (e: any) => void
}

export default function UploadWidget1({selectImage}: Props) {
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
              onChange={(e: any) => selectImage(e)}
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
        </div>
      </div>
    </>
  )
}
