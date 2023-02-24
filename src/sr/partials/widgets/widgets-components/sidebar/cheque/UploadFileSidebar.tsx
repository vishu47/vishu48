import {useState, useEffect, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import {Input, KTSVG} from 'sr/helpers'
import FooterWidget1 from '../../footer/FooterWidget1'
import ViewWidget2 from '../../view/ViewWidget2'

type Props = {
  close: () => void
}

export default function UploadFileSidebar({close}: Props) {
  // refs
  const sidebar = useRef<any>(null)
  // url
  const navigate = useNavigate()
  // redux
  // state
  const [docView, setDocView] = useState(false)
  // function
  const ExtractDocuments = () => {
    setTimeout(() => {
      return navigate('/extract-cheque')
    }, 5000)
  }
  useEffect(() => {
    console.log(sidebar.current.offsetWidth)
  }, [])

  return (
    <>
      <aside
        ref={sidebar}
        className='cheque_aside bg-white position-fixed top-0 bottom-0 left-0 right-0 sidebar_box_shadow'
        style={{width: !docView ? '25rem' : '68.75rem'}}
      >
        <div className='wx-400'>
          <div className='header d-flex justify-content-between py-22 px-50'>
            <span className='p-2'>
              <p className='font-18'>Upload Documents</p>
              <small className='font-12'>You can upload documents here</small>
            </span>
            {!docView ? (
              <div
                className='cancel_icon position-absolute bg-white rounded-circle'
                onClick={close}
              >
                <KTSVG
                  path={'/media/icons/duotone/general/cancel.svg'}
                  svgClassName={'text_primary2 w-100 h-100'}
                />
              </div>
            ) : (
              ''
            )}
          </div>
          <div className='body py-3 px-36 pt-8 gap-20 d-flex flex-column flex-gap-15'>
            <div className='upload_file bg_secondary_75 radius-8 position-relative upload_file_section'>
              <input type='file' className='w-100 h-100 position-absolute opacity-0 cursor' />
              <div className='py-11 px-26'>
                <div className='d-flex'>
                  <KTSVG path='/media/icons/duotone/general/upload.svg' />
                  <div className='d-flex flex-column pl-19'>
                    <p className='font-12 text_primary'>Upload new Files?</p>
                    <small className='font-10 text_black_75'>Choose Files/Drag & Drop</small>
                  </div>
                </div>
              </div>
            </div>
            <div className='cursor search_tag bg-white radius-8 position-relative'>
              <div className='py-6 px-26'>
                <div className='d-flex align-items-center'>
                  <KTSVG path='/media/icons/duotone/general/upload-24.svg' className='pr-12' />
                  <p className='font-12 fonts-400'>3 Files uploaded</p>
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
                  <div className='d-flex justify-content-center align-content-center flex-gap-5 align-items-center'>
                    <span
                      onClick={() => setDocView(true)}
                      className='bg_secondary_50 radius-8 wx-40 hx-40 d-flex justify-content-center align-content-center align-items-center'
                    >
                      <KTSVG path='/media/icons/duotone/general/eye.svg' className='' />
                    </span>
                    <span className='bg_secondary_50 radius-8 wx-40 hx-40 d-flex justify-content-center align-content-center align-items-center'>
                      <KTSVG path='/media/icons/duotone/general/delete-20.svg' className='' />
                    </span>
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
          </div>
          <FooterWidget1
            parentElem={'bg-white position-absolute bottom-0 mb-20'}
            preClassName={'px-18 py-11 font-14'}
            nextClassName={'px-18 py-11 font-14'}
            preButtonTitle={'Delete All'}
            nextButtonTitle={'Extract'}
            action={ExtractDocuments}
          />
        </div>
        {docView ? <ViewWidget2 setDocView={setDocView} /> : ''}
      </aside>
      <aside></aside>
    </>
  )
}
