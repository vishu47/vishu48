import React from 'react'
import {CheckBox, KTSVG} from 'sr/helpers'
import {Progressbar} from 'sr/helpers/ui-components/ProgressBar'
import Pagination from '../pagination/Pagination'

// type Props = {}

export default function TableWidget1() {
  return (
    <>
      <section className='table_border radius-12'>
        <div className='container table_container flex-gap-9'>
          <div className='row py-27 px-40'>
            <div className='font-600 col-md-5 d-flex align-items-center justify-content-start text-start'>
              <CheckBox
                type={'checkbox'}
                onChange={() => {}}
                label={'Name'}
                inputClass={'mr-34'}
                labelClass={'font-16 fonts-500'}
              />
            </div>
            <div className='fonts-500 font-16 col-md-4 d-flex align-items-center justify-content-start text-center'>
              Date
            </div>
            <div className='fonts-500 font-16 col-md-3 d-flex align-items-center justify-content-start text-end pe-3'>
              Action
            </div>
          </div>
          <div className='row py-23 px-40'>
            <div className='col-md-5'>
              <CheckBox
                type={'checkbox'}
                onChange={() => {}}
                label={'Cheque1.png'}
                inputClass={'mr-34'}
                labelClass={'font-16 fonts-500'}
              />
            </div>
            <div className='font-16 fonts-500 col-md-4 d-flex align-items-center justify-content-start text-center'>
              28 Dec 2022
            </div>
            <div className='font-600 col-md-3 d-flex align-items-center justify-content-between text-end actions'>
              <ul className='d-flex justify-content-evenly gap-4 align-items-center'>
                <li>
                  <KTSVG path={'/media/icons/duotone/general/delete-20.svg'} />
                </li>
                <li>
                  <KTSVG path={'/media/icons/duotone/general/eye.svg'} />
                </li>
                <li>
                  <KTSVG path={'/media/icons/duotone/general/arrange.svg'} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
