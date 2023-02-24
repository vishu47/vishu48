import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from 'sr/helpers'
import {AiIconAccount} from 'sr/helpers/constants/IconConstants'

type Props = {list: any; filter: any}

export default function CardWidget11({list, filter}: Props) {
  const [click, setClick] = useState('')
  return (
    <>
      <div className='card_content'>
        {list
          .filter((flt: any) => {
            if (filter) {
              if (filter === '') {
                return flt
              } else if (flt.name.toLowerCase().includes(filter.toLowerCase())) {
                return flt
              }
              return ''
            } else {
              return flt
            }
          })
          .map((item: any, i: 'any') => {
            return (
              <div
                key={i}
                className={`main_card ${
                  click === item.name ? 'active' : ''
                } text-center pt-60 cursor-pointer`}
                onClick={() => {
                  setClick(item.name)
                }}
              >
                <div className='icon hx-120 wx-120 bg_secondary_15 '>
                  <KTSVG path={AiIconAccount} />
                </div>
                <div className='text font-20 fonts-600 pt-26'>{item.name}</div>
              </div>
            )
          })}
      </div>
    </>
  )
}
