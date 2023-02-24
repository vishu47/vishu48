import React from 'react'
import {Button, CheckBox, KTSVG} from 'sr/helpers'
import Pagination from '../pagination/Pagination'

// type Props = {}

export default function TableWidget2() {
  return (
    <>
      <section className='whole_section_3 '>
        <div className='table_container_3 mt-40 table_border_50 radius-16 py-20 px-25 container'>
          <div className='row view_header'>
            <div className='font-600 col-md-5 p-0 d-flex align-items-center justify-content-start text-start'>
              Entry
            </div>
            <div className='font-600 col-md-5 p-0 d-flex align-items-center justify-content-start text-center'>
              Value
            </div>
            <div className='font-600 col-md-2 p-0 d-flex align-items-center justify-content-end text-end pe-3'>
              Action
            </div>
          </div>
          <div className='pt-33 px-26 pr-35  content '>
            <div className='row m-0 pb-22'>
              <div className='col-md-4 p-0 d-flex align-items-center'>
                <CheckBox
                  type={'checkbox'}
                  onChange={() => {}}
                  label={`Market Profit`}
                  inputClass={'hx-8 w-8 mr-20 bg_secondary_75'}
                  labelClass={'font-14 '}
                />
                <span className='font-14 fonts-700 px-10'>81%</span>
                <KTSVG
                  path={'/media/icons/duotone/general/trend.svg'}
                  svgClassName='text-primary'
                />
              </div>
              <div className=' col-md-4 p-0 d-flex align-items-center justify-content-start text-center'>
                <span className='font-14 '>Performance</span>
                <span className='font-14 fonts-700 px-10'>81%</span>
                <KTSVG
                  path={'/media/icons/duotone/general/trend.svg'}
                  svgClassName='text-primary'
                />
              </div>
              <div className=' col-md-4 p-0 d-flex align-items-center justify-content-end text-center'>
                <span className='font-14 '>Market Trend</span>
                <span className='font-14 fonts-700 px-10'>81%</span>
                <KTSVG
                  path={'/media/icons/duotone/general/trend.svg'}
                  svgClassName='text-primary'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
