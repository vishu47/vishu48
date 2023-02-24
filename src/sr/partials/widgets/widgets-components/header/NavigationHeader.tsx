import React from 'react'
import {KTSVG} from 'sr/helpers'
import {ChevronArrow} from 'sr/helpers/constants/IconConstants'

type Props = {list: string[]}

export default function NavigationHeader({list}: Props) {
  return (
    <>
      <div className='navigation_header  d-flex align-items-end'>
        {list.map((item: any, i: any) => {
          return (
            <>
              <span className={`font-12 fonts-600 ${list.length - 1 === i ? 'text_black_75' : ''}`}>
                {item}
              </span>
              {list.length - 1 > i ? <KTSVG path={ChevronArrow} className={'hx-16 px-10'} /> : ''}
            </>
          )
        })}
      </div>
    </>
  )
}
