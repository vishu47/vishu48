import React from 'react'
import {
  CloseSidebar,
  DocsActive,
  DocsNotActive,
  FileListSearch,
  KTSVG,
  XtractListTrash,
} from 'sr/helpers'
import HeaderSearchInner from '../../widgets-components/header/HeaderSearchInner'

type Props = {}

export default function ManipulationWidget1({}: Props) {
  return (
    <>
      <div className=''>
        <div className='header py-32 px-36 position-relative border-bottom'>
          <p className='font-16 fonts-500'>All Documents</p>
          <p className='font-12 fonts-400 text_black_70'>
            You can select all processed documents here
          </p>
          <div className='position-absolute cancel_icon cursor'>
            <KTSVG path={CloseSidebar} className={'rounded-circle bg-white shadow-sm'} />
          </div>
        </div>
        <div className='list_view py-30 px-36 hx-525 overflow-auto'>
          <div className='search_bar'>
            <HeaderSearchInner
              className={'hx-40 w-100 table_border'}
              inputClass={'fonts-500 font-12'}
              placeholder={'Search Upload Files'}
              icon={FileListSearch}
            />
          </div>
          <div className='files'>
            <div className='d-flex justify-content-between py-16 px-20'>
              <div className='d-flex'>
                <KTSVG path={DocsActive} className='' />
                <div className='d-flex flex-column px-12'>
                  <p className='font-14 fonts-500'>Cheque-1</p>
                  <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                </div>
              </div>
              <KTSVG path={XtractListTrash} className='' />
            </div>
            <hr className='m-0 table_border' />
            <div className='d-flex justify-content-between py-16 px-20'>
              <div className='d-flex'>
                <KTSVG path={DocsNotActive} className='' />
                <div className='d-flex flex-column px-12'>
                  <p className='font-14 fonts-500'>Cheque-1</p>
                  <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                </div>
              </div>
            </div>
            <hr className='m-0 table_border' />
            <div className='d-flex justify-content-between py-16 px-20'>
              <div className='d-flex'>
                <KTSVG path={DocsNotActive} className='' />
                <div className='d-flex flex-column px-12'>
                  <p className='font-14 fonts-500'>Cheque-1</p>
                  <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                </div>
              </div>
            </div>
            <hr className='m-0 table_border' />
            <div className='d-flex justify-content-between py-16 px-20'>
              <div className='d-flex'>
                <KTSVG path={DocsNotActive} className='' />
                <div className='d-flex flex-column px-12'>
                  <p className='font-14 fonts-500'>Cheque-1</p>
                  <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                </div>
              </div>
            </div>
            <hr className='m-0 table_border' />
            <div className='d-flex justify-content-between py-16 px-20'>
              <div className='d-flex'>
                <KTSVG path={DocsNotActive} className='' />
                <div className='d-flex flex-column px-12'>
                  <p className='font-14 fonts-500'>Cheque-1</p>
                  <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                </div>
              </div>
            </div>
            <hr className='m-0 table_border' />
          </div>
        </div>
      </div>
    </>
  )
}
