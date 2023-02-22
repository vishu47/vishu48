import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {getFileExtension, KTSVG, XtractFileUpload} from 'sr/helpers'
import ActionMenuList from 'sr/redux/client/actions/HomepageAction'
import {useClientSelector} from 'sr/redux/reducers'
import {useDropzone} from 'react-dropzone'
import {toast} from 'react-toastify'

type Props = {
  selectImage: (e: any) => void
  setFiles?: any
  files?: any
}

export function IngestionWidget1({selectImage, setFiles, files}: Props) {
  // url
  // redux
  // states
  // functions
  // dropzone area
  const onDrop = (acceptedFiles: any) => {
    // check for exixtance
    const Existance = files.find((file: any) => file[0].name === acceptedFiles[0].name)
    // gaurd
    if (Existance) return toast.warning(`${acceptedFiles[0].name} is already exist.`)
    // add in uploaded files array
    setFiles([
      ...files,
      acceptedFiles.map((file: any) =>
        Object.assign(file, {
          file,
        })
      ),
    ])
  }

  // [files]
  // )
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  // useeffects

  return (
    <>
      <div className='upload_area'>
        <div className='px-2'>
          {/* new one design */}
          <div className='header_upload_text w-100 text-start pt-50 pb-16'>
            <p className='font-16 fonts-500 text_black_footer'>Upload Files</p>
            <p className='font-16 fonts-400 text_black_25'>Drag or choose file to upload</p>
          </div>
          <div
            className='section_upload bg-white radius-4 drag position-relative pointer-event d-flex justify-content-center flex-column align-items-center text-center'
            {...getRootProps()}
          >
            <input
              multiple
              className='w-100 h-100 position-absolute opacity-0 '
              type='file'
              {...getInputProps()}
              // onChange={(e: any) => navigate('/extract-cheque/upload-list')}
              onChange={(e: any) => selectImage(e)}
            />
            <KTSVG path={XtractFileUpload} svgClassName={'text_primary w-100'} />
            <p className='text_black_25 fonts-500 font-12 pt-12'>PNG, GIF, WEBP,. Max 5MB.</p>
            <p className='fonts-500 font-12 py-12 text_black_footer'>
              Drag and drop here or <span className='text_primary'>Choose file</span>
            </p>
            <p className='fonts-500 font-12 text_black_25'>
              Would you like to continue with Last uploaded 5 files?
              {/* <Link to='/extract-cheque/upload-list' className='cursor'> */}
              <Link to='#' className='cursor'>
                Click here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
