import React from 'react'
import {KTSVG, LeftShow, RightShow} from 'sr/helpers'

// type Props = {}

export default function CardWidget1() {
  return (
    <>
      <div className='next_cheque_section d-flex align-items-center'>
        <li className='hx-40 wx-40 d-flex justify-content-center align-items-center cursor steps table_border radius-8 me-4'>
          <KTSVG path={LeftShow} />
        </li>
        <p className='font-20 fonts-500'>Cheque 01 Extracted Data</p>
        <li className='hx-40 wx-40 d-flex justify-content-center align-items-center cursor steps table_border radius-8 ms-4 '>
          <KTSVG path={RightShow} />
        </li>
      </div>
    </>
  )
}
