import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Split from 'react-split'
import {usePageData} from 'sr/layout/master-layout'
import CardWidget1 from 'sr/partials/widgets/widgets-components/cards/CardWidget1'
import FooterWidget1 from 'sr/partials/widgets/widgets-components/footer/FooterWidget1'
import ExtractChequeHeaderOutput from 'sr/partials/widgets/widgets-components/header/ExtractChequeHeaderOutput'
import UploadFileListSidebar from 'sr/partials/widgets/widgets-components/sidebar/cheque/UploadFileListSidebar'
import UploadFileSidebar from 'sr/partials/widgets/widgets-components/sidebar/cheque/UploadFileSidebar'
import TableWidget4 from 'sr/partials/widgets/widgets-components/tables/TableWidget4'
import ViewWidget1 from 'sr/partials/widgets/widgets-components/view/ViewWidget1'

type Props = {}

export default function ExtractedOutput() {
  // provider
  const {setBreadCrumbState} = usePageData()
  useEffect(() => {
    setBreadCrumbState(true)
  }, [setBreadCrumbState])

  // url
  const navigate = useNavigate()
  // redux
  // ṣtate

  const [listSidebar, setListSidebar] = useState(false)
  const [uploadSidebar, setUploadSidebar] = useState(false)
  // function
  const CloseToggleSidebar = () => {
    setListSidebar(false)
  }
  const OpenToggleSidebar = () => {
    setListSidebar(true)
  }
  const OpenUploadSidebar = () => {
    setUploadSidebar(true)
    setListSidebar(false)
  }
  const CloseUploadSidebar = () => {
    setUploadSidebar(false)
    setListSidebar(true)
  }
  const ExtractDocuments = () => {
    setTimeout(() => {
      return navigate('/extract-cheque')
    }, 5000)
  }
  // useeffects
  return (
    <>
      {listSidebar && (
        <UploadFileListSidebar upload={OpenUploadSidebar} close={CloseToggleSidebar} />
      )}
      {uploadSidebar && <UploadFileSidebar close={CloseUploadSidebar} />}

      <ExtractChequeHeaderOutput openSidebar={OpenToggleSidebar} />
      <div className='container-lg px-40'>
        <div className='row pt-4'>
          <CardWidget1 />
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
            <TableWidget4 />
            <ViewWidget1
              titleClassName={'fonts-700 font-16'}
              doc={'/media/img/stock/invoice.png'}
              margin={'40px 0px 0px 0px'}
              viewTitle={'Processed Image'}
            />
          </Split>
        </div>
        <FooterWidget1 nextButtonTitle={'Extract New File'} />
      </div>
    </>
  )
}
