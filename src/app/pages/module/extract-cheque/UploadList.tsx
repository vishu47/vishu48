import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Split from 'react-split'
import {KTSVG} from 'sr/helpers'
import FooterWidget1 from 'sr/partials/widgets/widgets-components/footer/FooterWidget1'
import ExtractChequeHeader from 'sr/partials/widgets/widgets-components/header/ExtractChequeHeader'
import ExtractLoader from 'sr/partials/widgets/widgets-components/loader/ExtractLoader'
import Pagination from 'sr/partials/widgets/widgets-components/pagination/Pagination'
import TableWidget1 from 'sr/partials/widgets/widgets-components/tables/TableWidget1'
import ViewWidget1 from 'sr/partials/widgets/widgets-components/view/ViewWidget1'

// type Props = {}

export default function UploadList() {
  // url
  const navigate = useNavigate()
  // redux
  // ṣtate
  const [show, setShow] = useState(false)
  // function
  const ExtractDocumnets = () => {
    setShow(true)
    setTimeout(() => {
      return navigate('/engine/extract-cheque/extracted-output')
    }, 2000)
  }
  // useeffects

  return (
    <>
      {/* loader */}
      {show && <ExtractLoader svgPath='/media/img/svg/office.svg' />}

      <div className='border-bottom'>
        <ExtractChequeHeader />
      </div>
      <div className='container-lg px-17 mt-44'>
        <div className='row'>
          <Split
            className='split'
            sizes={[60, 40]}
            minSize={400}
            expandToMin={false}
            gutterSize={38}
            gutterAlign='center'
            snapOffset={50}
            dragInterval={1}
            direction='horizontal'
            cursor='col-resize'
          >
            <TableWidget1 />
            <ViewWidget1 doc={'/media/img/stock/cheque.png'} />
          </Split>
        </div>
        <div className='mt-33 col-md-7'>
          <Pagination />
        </div>
      </div>
      <div className='mb-24 container-fluid'>
        <FooterWidget1 nextButtonTitle={'Extract'} action={ExtractDocumnets} />
      </div>
    </>
  )
}
