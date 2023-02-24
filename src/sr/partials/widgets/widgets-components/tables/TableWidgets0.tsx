import React from 'react'
import {CheckBox, KTSVG} from 'sr/helpers'
import {Progressbar} from 'sr/helpers/ui-components/ProgressBar'
import Pagination from '../pagination/Pagination'

// type Props = {}

export default function TableWidget0() {
  return (
    <>
      <section className='table_border radius-12'>
        <div className='container table_container p-0 overflow-auto'>
          <table className='table'>
            <thead>
              <tr>
                <th className='pl-40 hx-85'>
                  <CheckBox
                    type={'checkbox'}
                    onChange={() => {}}
                    labelClass={'font-16 fonts-500'}
                  />
                </th>
                <th className='fonts-500 font-16 hx-85 '>Name</th>
                <th className='fonts-500 font-16 hx-85 '>Date</th>
                <th className='fonts-500 font-16 hx-85 pr-40'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='pl-40 hx-58'>
                  <CheckBox
                    type={'checkbox'}
                    onChange={() => {}}
                    labelClass={'font-16 fonts-500'}
                  />
                </td>
                <td className='hx-58 fonts-500'>Cheque1.png</td>
                <td className='hx-58 fonts-500'>28 Dec 2022</td>
                <td className='pr-40 hx-58'>
                  <ul className='d-flex justify-content-start gap-4 align-items-center'>
                    <li>
                      <KTSVG path={'/media/icons/duotone/general/delete-20.svg'} />
                    </li>
                    <li>
                      <KTSVG path={'/media/icons/duotone/general/eye.svg'} />
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className='pl-40 hx-58'>
                  <CheckBox
                    type={'checkbox'}
                    onChange={() => {}}
                    labelClass={'font-16 fonts-500'}
                  />
                </td>
                <td className='hx-58 fonts-500'>Cheque1.png</td>
                <td className='hx-58 fonts-500'>28 Dec 2022</td>
                <td className='pr-40 hx-58'>
                  <ul className='d-flex justify-content-start gap-4 align-items-center'>
                    <li>
                      <KTSVG path={'/media/icons/duotone/general/delete-20.svg'} />
                    </li>
                    <li>
                      <KTSVG path={'/media/icons/duotone/general/eye.svg'} />
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className='pl-40 hx-58'>
                  <CheckBox
                    type={'checkbox'}
                    onChange={() => {}}
                    labelClass={'font-16 fonts-500'}
                  />
                </td>
                <td className='hx-58 fonts-500'>Cheque1.png</td>
                <td className='hx-58 fonts-500'>28 Dec 2022</td>
                <td className='pr-40 hx-58'>
                  <ul className='d-flex justify-content-start gap-4 align-items-center'>
                    <li>
                      <KTSVG path={'/media/icons/duotone/general/delete-20.svg'} />
                    </li>
                    <li>
                      <KTSVG path={'/media/icons/duotone/general/eye.svg'} />
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className='pl-40 hx-58'>
                  <CheckBox
                    type={'checkbox'}
                    onChange={() => {}}
                    labelClass={'font-16 fonts-500'}
                  />
                </td>
                <td className='hx-58 fonts-500'>Cheque1.png</td>
                <td className='hx-58 fonts-500'>28 Dec 2022</td>
                <td className='pr-40 hx-58'>
                  <ul className='d-flex justify-content-start gap-4 align-items-center'>
                    <li>
                      <KTSVG path={'/media/icons/duotone/general/delete-20.svg'} />
                    </li>
                    <li>
                      <KTSVG path={'/media/icons/duotone/general/eye.svg'} />
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className='pl-40 hx-58'>
                  <CheckBox
                    type={'checkbox'}
                    onChange={() => {}}
                    labelClass={'font-16 fonts-500'}
                  />
                </td>
                <td className='hx-58 fonts-500'>Cheque1.png</td>
                <td className='hx-58 fonts-500'>28 Dec 2022</td>
                <td className='pr-40 hx-58'>
                  <ul className='d-flex justify-content-start gap-4 align-items-center'>
                    <li>
                      <KTSVG path={'/media/icons/duotone/general/delete-20.svg'} />
                    </li>
                    <li>
                      <KTSVG path={'/media/icons/duotone/general/eye.svg'} />
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
