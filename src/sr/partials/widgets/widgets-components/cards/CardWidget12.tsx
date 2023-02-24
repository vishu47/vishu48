import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from 'sr/helpers'
import {RightArrowIcon} from 'sr/helpers/constants/IconConstants'

type Props = {
  url: string
  title: string
  description: string
  tag: string
  icon: string
}

export default function CardWidget12({tag, description, title, url, icon}: Props) {
  return (
    <>
      <div className='p-30 pt-10 h-100 cards radius-8'>
        <div className='tag d-flex py-2 justify-content-end'>
          {/* {tag || tag === undefined ? ( */}
          <span
            className={`font-8 text-uppercase ${
              tag || tag === undefined ? 'bg_primary' : 'py-10'
            } text-white radius-8`}
          >
            {tag}
          </span>
          {/* ) : (
            ''
          )} */}
        </div>
        <div className='title d-flex '>
          <KTSVG className='pr-12' path={icon} />
          <p className='font-16 fonts-600'>{title}</p>
        </div>
        <p className='font-14 fonts-500 py-20 desc'>{description}</p>
        <div className='use '>
          <Link
            className='d-flex font-16 pr-12 fonts-700 text-dark'
            to={`${process.env.REACT_APP_BAZAAR_INGESTION}${url}/upload`}
          >
            Try This
            <KTSVG className='pl-12' path={RightArrowIcon} />
          </Link>
        </div>
      </div>
    </>
  )
}
