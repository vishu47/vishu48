import React, {useState} from 'react'
import {CancelIconInHeader, Input, KTSVG, SearchIconInHeader} from 'sr/helpers'
import Search2 from '../search/Search2'

type Props = {tab: string; setTab: any; setFilter: any}

export default function TabHeader1({setTab, tab, setFilter}: Props) {
  // url
  // redux
  // state
  // function
  // useefects
  return (
    <div>
      <div className='header pt-40 d-flex justify-content-between position-relative'>
        <div className='tab_section hx-56 w-100'>
          <ul className='d-flex p-16'>
            <li
              onClick={() => setTab('infoxapis')}
              className={`p-15 cursor mr-32 fonts-500 font-16 ml-2 ${
                tab === 'infoxapis' ? 'active text-primary' : ''
              }`}
            >
              InfoX API's
            </li>
            <li
              onClick={() => setTab('imageapis')}
              className={`${
                tab === 'imageapis' ? 'active text-primary' : ''
              } p-15 cursor mr-32 fonts-400 font-16 `}
            >
              Image API's
            </li>
          </ul>
        </div>
        <Search2 setFilter={setFilter} />
      </div>
    </div>
  )
}
