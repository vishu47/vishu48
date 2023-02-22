import {Input, KTSVG} from 'sr/helpers'

type Props = {
  close: () => void
  upload: () => void
}

export default function UploadFileListSidebar({close, upload}: Props) {
  return (
    <>
      <aside className='cheque_aside bg-white position-fixed top-0 bottom-0 left-0 right-0 sidebar_box_shadow'>
        <div className='wx-400'>
          <div className='header d-flex justify-content-between py-22 px-50 position-relative'>
            <span className='p-2'>
              <p className='font-18'>All Documents</p>
              <small className='font-12'>You can select all processed documents here</small>
            </span>
            <div className='cancel_icon position-absolute bg-white rounded-circle' onClick={close}>
              <KTSVG
                path={'/media/icons/duotone/general/cancel.svg'}
                svgClassName={'text_primary2 w-100 h-100'}
              />
            </div>
          </div>
          <div className='body py-3 px-36 pt-8 gap-20 d-flex flex-column flex-gap-15'>
            <div className='upload_file bg_secondary_25 radius-8 position-relative'>
              {/* <input type='file' className='w-100 h-100 position-absolute opacity-0 cursor' /> */}
              <div className='py-11 px-26 cursor upload_file_section radius-8' onClick={upload}>
                <div className='d-flex'>
                  <KTSVG path='/media/icons/duotone/general/upload.svg' />
                  <div className='d-flex flex-column pl-19'>
                    <p className='font-12 text_primary'>Upload new Files?</p>
                    <small className='font-10 text_black_75'>Choose Files/Drag & Drop</small>
                  </div>
                </div>
              </div>
            </div>
            <div className='cursor search_tag bg-white table_border radius-8 position-relative'>
              <div className='py-6 px-26'>
                <div className='d-flex'>
                  <KTSVG path='/media/icons/duotone/general/search-doc.svg' className='pr-12' />
                  <Input
                    type={'text'}
                    onChange={() => {}}
                    placeholder={'Search Documents'}
                    inputClass='w-100 h-100 border-0 font-12'
                  />
                </div>
              </div>
            </div>
            <div className='file_section d-flex flex-column flex-gap-15 '>
              <div className='cursor search_tag radius-8 position-relative bg_secondary_25'>
                <div className='p-12 d-flex justify-content-between'>
                  <div className='d-flex '>
                    <span className='rounded-circle bg_secondary_85 p-12'>
                      <KTSVG path='/media/icons/duotone/abstract/cheque.svg' className='' />
                    </span>
                    <div className='d-flex flex-column px-12'>
                      <p className='font-14 fonts-500'>Cheque-1</p>
                      <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                    </div>
                  </div>
                  <KTSVG path='/media/icons/duotone/abstract/right-arrow.svg' className='' />
                </div>
              </div>
              <div className='cursor search_tag radius-8 position-relative bg-white bottom_border'>
                <div className='p-12 d-flex justify-content-between'>
                  <div className='d-flex '>
                    <span className='rounded-circle border_primary p-12'>
                      <KTSVG path='/media/icons/duotone/abstract/cheque.svg' className='' />
                    </span>
                    <div className='d-flex flex-column px-12'>
                      <p className='font-14 fonts-500'>Cheque-1</p>
                      <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cursor search_tag radius-8 position-relative bg-white bottom_border'>
                <div className='p-12 d-flex justify-content-between'>
                  <div className='d-flex '>
                    <span className='rounded-circle border_primary p-12'>
                      <KTSVG path='/media/icons/duotone/abstract/cheque.svg' className='' />
                    </span>
                    <div className='d-flex flex-column px-12'>
                      <p className='font-14 fonts-500'>Cheque-1</p>
                      <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cursor search_tag radius-8 position-relative bg-white bottom_border'>
                <div className='p-12 d-flex justify-content-between'>
                  <div className='d-flex '>
                    <span className='rounded-circle border_primary p-12'>
                      <KTSVG path='/media/icons/duotone/abstract/cheque.svg' className='' />
                    </span>
                    <div className='d-flex flex-column px-12'>
                      <p className='font-14 fonts-500'>Cheque-1</p>
                      <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cursor search_tag radius-8 position-relative bg-white bottom_border'>
                <div className='p-12 d-flex justify-content-between'>
                  <div className='d-flex '>
                    <span className='rounded-circle border_primary p-12'>
                      <KTSVG path='/media/icons/duotone/abstract/cheque.svg' className='' />
                    </span>
                    <div className='d-flex flex-column px-12'>
                      <p className='font-14 fonts-500'>Cheque-1</p>
                      <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cursor search_tag radius-8 position-relative bg-white bottom_border'>
                <div className='p-12 d-flex justify-content-between'>
                  <div className='d-flex '>
                    <span className='rounded-circle border_primary p-12'>
                      <KTSVG path='/media/icons/duotone/abstract/cheque.svg' className='' />
                    </span>
                    <div className='d-flex flex-column px-12'>
                      <p className='font-14 fonts-500'>Cheque-1</p>
                      <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cursor search_tag radius-8 position-relative bg-white bottom_border'>
                <div className='p-12 d-flex justify-content-between'>
                  <div className='d-flex '>
                    <span className='rounded-circle border_primary p-12'>
                      <KTSVG path='/media/icons/duotone/abstract/cheque.svg' className='' />
                    </span>
                    <div className='d-flex flex-column px-12'>
                      <p className='font-14 fonts-500'>Cheque-1</p>
                      <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cursor search_tag radius-8 position-relative bg-white bottom_border'>
                <div className='p-12 d-flex justify-content-between'>
                  <div className='d-flex '>
                    <span className='rounded-circle border_primary p-12'>
                      <KTSVG path='/media/icons/duotone/abstract/cheque.svg' className='' />
                    </span>
                    <div className='d-flex flex-column px-12'>
                      <p className='font-14 fonts-500'>Cheque-1</p>
                      <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cursor search_tag radius-8 position-relative bg-white bottom_border'>
                <div className='p-12 d-flex justify-content-between'>
                  <div className='d-flex '>
                    <span className='rounded-circle border_primary p-12'>
                      <KTSVG path='/media/icons/duotone/abstract/cheque.svg' className='' />
                    </span>
                    <div className='d-flex flex-column px-12'>
                      <p className='font-14 fonts-500'>Cheque-1</p>
                      <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cursor search_tag radius-8 position-relative bg-white bottom_border'>
                <div className='p-12 d-flex justify-content-between'>
                  <div className='d-flex '>
                    <span className='rounded-circle border_primary p-12'>
                      <KTSVG path='/media/icons/duotone/abstract/cheque.svg' className='' />
                    </span>
                    <div className='d-flex flex-column px-12'>
                      <p className='font-14 fonts-500'>Cheque-1</p>
                      <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cursor search_tag radius-8 position-relative bg-white bottom_border'>
                <div className='p-12 d-flex justify-content-between'>
                  <div className='d-flex '>
                    <span className='rounded-circle border_primary p-12'>
                      <KTSVG path='/media/icons/duotone/abstract/cheque.svg' className='' />
                    </span>
                    <div className='d-flex flex-column px-12'>
                      <p className='font-14 fonts-500'>Cheque-1</p>
                      <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cursor search_tag radius-8 position-relative bg-white bottom_border'>
                <div className='p-12 d-flex justify-content-between'>
                  <div className='d-flex '>
                    <span className='rounded-circle border_primary p-12'>
                      <KTSVG path='/media/icons/duotone/abstract/cheque.svg' className='' />
                    </span>
                    <div className='d-flex flex-column px-12'>
                      <p className='font-14 fonts-500'>Cheque-1</p>
                      <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cursor search_tag radius-8 position-relative bg-white bottom_border'>
                <div className='p-12 d-flex justify-content-between'>
                  <div className='d-flex '>
                    <span className='rounded-circle border_primary p-12'>
                      <KTSVG path='/media/icons/duotone/abstract/cheque.svg' className='' />
                    </span>
                    <div className='d-flex flex-column px-12'>
                      <p className='font-14 fonts-500'>Cheque-1</p>
                      <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cursor search_tag radius-8 position-relative bg-white bottom_border'>
                <div className='p-12 d-flex justify-content-between'>
                  <div className='d-flex '>
                    <span className='rounded-circle border_primary p-12'>
                      <KTSVG path='/media/icons/duotone/abstract/cheque.svg' className='' />
                    </span>
                    <div className='d-flex flex-column px-12'>
                      <p className='font-14 fonts-500'>Cheque-1</p>
                      <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cursor search_tag radius-8 position-relative bg-white bottom_border'>
                <div className='p-12 d-flex justify-content-between'>
                  <div className='d-flex '>
                    <span className='rounded-circle border_primary p-12'>
                      <KTSVG path='/media/icons/duotone/abstract/cheque.svg' className='' />
                    </span>
                    <div className='d-flex flex-column px-12'>
                      <p className='font-14 fonts-500'>Cheque-1</p>
                      <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cursor search_tag radius-8 position-relative bg-white bottom_border'>
                <div className='p-12 d-flex justify-content-between'>
                  <div className='d-flex '>
                    <span className='rounded-circle border_primary p-12'>
                      <KTSVG path='/media/icons/duotone/abstract/cheque.svg' className='' />
                    </span>
                    <div className='d-flex flex-column px-12'>
                      <p className='font-14 fonts-500'>Cheque-1</p>
                      <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cursor search_tag radius-8 position-relative bg-white bottom_border'>
                <div className='p-12 d-flex justify-content-between'>
                  <div className='d-flex '>
                    <span className='rounded-circle border_primary p-12'>
                      <KTSVG path='/media/icons/duotone/abstract/cheque.svg' className='' />
                    </span>
                    <div className='d-flex flex-column px-12'>
                      <p className='font-14'>Cheque-last</p>
                      <small className='font-12 fonts-500 text_black_50'>28 Aug, 3:00 PM</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
