import clsx from 'clsx'
import React, {useContext, useEffect} from 'react'
import {useOutletContext} from 'react-router-dom'
import {KTSVG, XtractCompleteSign, XtractPendingSign} from 'sr/helpers'
import {usePageData} from 'sr/layout/master-layout'

export default function ProgressHeader1() {
  const {breadCrumbState, setBreadCrumbState} = usePageData()
  useEffect(() => {
    setBreadCrumbState(false)
  }, [setBreadCrumbState])

  return (
    <>
      <div className='progress_header_wrapper bg_primary px-35 hx-50'>
        <div className=' '>
          <div className='element bg_primary'>
            <KTSVG path={XtractCompleteSign} svgClassName={'text-white fonts-400 font-14'} />
            <p className='text-white font-14'>Upload File</p>
            <span className='line'></span>
            <KTSVG
              path={`${breadCrumbState ? XtractCompleteSign : XtractPendingSign}`}
              svgClassName={clsx(breadCrumbState && 'text-white fonts-400 font-14')}
            />
            <p className={clsx('fonts-40 font-14 text-white')}>Extracted Output</p>
          </div>
        </div>
      </div>
    </>
  )
}
