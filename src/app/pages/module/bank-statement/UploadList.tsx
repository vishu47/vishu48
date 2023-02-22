import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Split from 'react-split'
import {KTSVG} from 'sr/helpers'
import FooterWidget1 from 'sr/partials/widgets/widgets-components/footer/FooterWidget1'
import ExtractChequeHeader from 'sr/partials/widgets/widgets-components/header/ExtractChequeHeader'
import ExtractLoader from 'sr/partials/widgets/widgets-components/loader/ExtractLoader'
import TableWidget3 from 'sr/partials/widgets/widgets-components/tables/TableWidget3'
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
      return navigate('/extract-bank-statement/extracted-output')
    }, 10000)
  }
  // useeffects

  return (
    <>
      {/* loader */}
      {show && <ExtractLoader svgPath='/media/img/svg/office.svg' />}

      <div className='border-bottom'>
        <ExtractChequeHeader />
      </div>
      <div className='container-lg px-25'>
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
            <TableWidget3 />
            <ViewWidget1 doc={'/media/img/stock/invoice.png'} />
          </Split>
        </div>
        <FooterWidget1
          nextButtonTitle={'Extract'}
          preButtonTitle={'Delete All'}
          action={ExtractDocumnets}
        />
      </div>
    </>
  )
}
