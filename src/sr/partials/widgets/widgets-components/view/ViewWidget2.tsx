import {KTSVG, toAbsoluteUrl} from 'sr/helpers'
import {KTIMG} from 'sr/helpers/ui-components/KTIMG'

type Props = {
  setDocView: any
}

export default function ViewWidget2({setDocView}: Props) {
  return (
    <>
      <section className='view_section sidebar_view_section table_border'>
        <div
          className='cancel_icon position-absolute bg-white rounded-circle'
          onClick={() => {
            setDocView(false)
          }}
        >
          <KTSVG
            path={'/media/icons/duotone/general/caret-left.svg'}
            svgClassName={'text_primary w-100 h-100'}
          />
        </div>
        <div className='h-100 d-flex align-items-center'>
          <div className='d-flex justify-content-center flex-column inside_box radius-12 mr-60 ml-30'>
            <div className='d-flex justify-content-between view_header py-20 px-24'>
              {/* <p className={titleClassName}>{viewTitle}</p> */}
              <p>{'Name here'}</p>
            </div>
            <div className='view_image p-16 position-relative'>
              <div>
                <img
                  style={{height: '100%', width: '100%'}}
                  src={toAbsoluteUrl('/media/img/stock/cheque.png')}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className='view_image p-3 d-flex justify-content-end me-4'>
        <KTIMG path={'/media/img/stock/cheque.png'} alt='' />
      </div> */}
    </>
  )
}
