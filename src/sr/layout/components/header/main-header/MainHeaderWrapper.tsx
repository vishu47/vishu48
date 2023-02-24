/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import {MainHeader} from './MainHeader'

export function MainHeaderWrapper() {
  return (
    <div id='kt_header' className={clsx('header', 'align-items-stretch', 'sw_main_header')}>
      {/* begin::Container */}
      <div className={clsx('d-flex justify-content-between', 'container')}>
        {/* begin::Wrapper */}
        <div className={'d-flex align-items-stretch justify-content-between flex-lg-grow-1'}>
          <div className='d-flex  w-100' id='kt_header_nav'>
            <MainHeader />
          </div>

          {/* <Topbar /> */}
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Container */}
    </div>
  )
}
