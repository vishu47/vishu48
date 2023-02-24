import React from 'react'
import {
  AllDocumnets,
  DemoDoucuments,
  KTSVG,
  LeftShow,
  Maximize,
  NextDoubleArrow,
  PlusSearch,
  RightShow,
} from 'sr/helpers'
import {KTIMG} from 'sr/helpers/ui-components/KTIMG'

type Props = {OpenFullScreenDoc: any}

export default function ManipulationWidget2({OpenFullScreenDoc}: Props) {
  return (
    <>
      <div className='view_area w-full'>
        <div className='hx-62 bg-white px-30 w-100 align-items-center d-flex justify-content-between'>
          <div className='all_document d-flex gap-2 align-items-center'>
            <div className='d-flex'>
              <KTSVG path={AllDocumnets} />
            </div>
            <p className='font-12 fonts-500 pt-1'> All Documents</p>
            <KTSVG path={NextDoubleArrow} />
          </div>
          <div className='slide_area d-flex gap-4 align-items-center'>
            <span>
              <KTSVG path={LeftShow} />
            </span>
            <p className='font-14 fonts-500'>Cheque-1/2</p>
            <span>
              <KTSVG path={RightShow} />
            </span>
          </div>
          <div className='zoom_area d-flex gap-2'>
            <span
              className='cursor'
              onClick={() => {
                OpenFullScreenDoc()
              }}
            >
              <KTSVG path={PlusSearch} />
            </span>
            <span className='border-right'></span>
            <span
              className='cursor'
              onClick={() => {
                OpenFullScreenDoc()
              }}
            >
              <KTSVG path={Maximize} />
            </span>
          </div>
        </div>
        <div className='doc_view_area p-40'>
          <KTIMG path={DemoDoucuments} alt={'DemoDocs'} />
        </div>
      </div>
    </>
  )
}
