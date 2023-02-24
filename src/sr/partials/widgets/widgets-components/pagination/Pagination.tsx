import React from 'react'
import {Button, DropDown, KTSVG} from 'sr/helpers'

// type Props = {}

export default function Pagination() {
  return (
    <>
      <section>
        <div className='d-flex justify-content-between pagination_bar align-items-center'>
          <div className='upload_text d-flex align-items-center'>
            <small className='text-secondary font-14 fonts-500 mr-20'>Show Result:</small>
            <DropDown className={'hx-40 table_border px-16 radius-8 custom_select'}>
              <option value={2}>2</option>
              <option value={2}>2</option>
              <option value={2}>2</option>
              <option value={2}>2</option>
            </DropDown>
          </div>
          <div className='d-flex pagination_number'>
            <ul className='d-flex flex-gap-4 align-items-center'>
              <li className='radius-8 hx-40 wx-40 steps rounded table_border d-flex justify-content-center align-items-center me-4'>
                <KTSVG path={'/media/icons/duotone/general/arrow-left-short.svg'} />
              </li>
              <li className='radius-8 hx-40 wx-40 steps rounded d-flex justify-content-center align-items-center'>
                1
              </li>
              <li className='radius-8 hx-40 wx-40 steps rounded active d-flex justify-content-center align-items-center'>
                2
              </li>
              <li className='radius-8 hx-40 wx-40 steps rounded d-flex justify-content-center align-items-center'>
                3
              </li>
              <li className='radius-8 hx-40 wx-40 steps rounded d-flex justify-content-center align-items-center'>
                4
              </li>
              <li className='radius-8 hx-40 wx-40 steps rounded d-flex justify-content-center align-items-center'>
                5
              </li>
              <li className='radius-8 hx-40 wx-40 steps rounded table_border d-flex justify-content-center align-items-center ms-4'>
                <KTSVG path={'/media/icons/duotone/general/arrow-right-short.svg'} />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
