import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Split from 'react-split'
import {usePageData} from 'sr/layout/master-layout'
import CardWidget1 from 'sr/partials/widgets/widgets-components/cards/CardWidget1'
import CardWidget3 from 'sr/partials/widgets/widgets-components/cards/CardWidget3'
import FooterWidget1 from 'sr/partials/widgets/widgets-components/footer/FooterWidget1'
import ExtractChequeHeaderOutput from 'sr/partials/widgets/widgets-components/header/ExtractChequeHeaderOutput'
import UploadFileListSidebar from 'sr/partials/widgets/widgets-components/sidebar/cheque/UploadFileListSidebar'
import UploadFileSidebar from 'sr/partials/widgets/widgets-components/sidebar/cheque/UploadFileSidebar'
import TableWidget2 from 'sr/partials/widgets/widgets-components/tables/TableWidget2'
import ViewWidget1 from 'sr/partials/widgets/widgets-components/view/ViewWidget1'

type Props = {}

export default function ExtractedOutput() {
  // provider
  const {setBreadCrumbState} = usePageData()

  // url
  const navigate = useNavigate()
  // redux
  // ṣtate

  const [fullScreen, setFullScreen] = useState(false)
  const [fullDoc, setFullDoc] = useState<string>('/media/img/stock/cheque.png')
  const [listSidebar, setListSidebar] = useState(false)
  const [uploadSidebar, setUploadSidebar] = useState(false)
  const [coordinates, setCoordinates] = useState({x: 0, y: 0, w: 0, h: 0})
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
  const OpenFullScreenDoc = () => {
    setFullScreen(true)
  }
  const CloseFullScreenDoc = () => {
    setFullScreen(false)
  }

  const ExtractDocuments = () => {
    setTimeout(() => {
      return navigate('/extract-cheque')
    }, 5000)
  }

  // useeffects
  useEffect(() => {
    setBreadCrumbState(true)
  }, [setBreadCrumbState])

  return (
    <>
      {listSidebar && (
        <UploadFileListSidebar upload={OpenUploadSidebar} close={CloseToggleSidebar} />
      )}
      {uploadSidebar && <UploadFileSidebar close={CloseUploadSidebar} />}

      <ExtractChequeHeaderOutput openSidebar={OpenToggleSidebar} />
      <div className='container-lg px-15'>
        <div className='next_view row pt-4 '>
          <CardWidget1 />
        </div>
        <div className='row mt-29'>
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
            <TableWidget2 setCoordinates={setCoordinates} />
            <ViewWidget1
              coordinates={coordinates}
              fullScreen={OpenFullScreenDoc}
              doc={fullDoc}
              viewTitle={'Processed Image'}
            />
          </Split>
        </div>
      </div>
      <div className='mb-24 container-fluid'>
        <FooterWidget1 nextButtonTitle={'Extract New File'} />
      </div>
      {/* full screen view of documnets */}
      {fullScreen && <CardWidget3 docPath={fullDoc} close={CloseFullScreenDoc} />}
    </>
  )
}
