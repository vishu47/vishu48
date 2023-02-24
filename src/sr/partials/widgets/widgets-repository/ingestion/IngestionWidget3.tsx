import React from 'react'
import {KTSVG, XtractProceed} from 'sr/helpers'

type Props = {
  onFileSave: any
}

export function IngestionWidget3({onFileSave}: Props) {
  return (
    <>
      <div className='d-flex justify-content-end my-10 hx-44 pr-40 hx-44'>
        <div
          className='bg_primary text-white py-12 px-30 radius-90 align-items-center d-flex justify-content-center cursor'
          onClick={onFileSave}
        >
          Proceed
          <KTSVG path={XtractProceed} className={'ml-2'} />
        </div>
      </div>
    </>
  )
}
