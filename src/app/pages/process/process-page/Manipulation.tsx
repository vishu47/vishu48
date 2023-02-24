import axios from 'axios'
import React, {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import Split from 'react-split'
import {Button, ExtractLoaderIcon, KTSVG, XtractProceed} from 'sr/helpers'
import CardWidget3 from 'sr/partials/widgets/widgets-components/cards/CardWidget3'
import FooterWidget1 from 'sr/partials/widgets/widgets-components/footer/FooterWidget1'
import ExtractChequeHeader from 'sr/partials/widgets/widgets-components/header/ExtractChequeHeader'
import ExtractLoader from 'sr/partials/widgets/widgets-components/loader/ExtractLoader'
import TableWidget3 from 'sr/partials/widgets/widgets-components/tables/TableWidget3'
import ViewWidget1 from 'sr/partials/widgets/widgets-components/view/ViewWidget1'
import {
  IngestionWidget1,
  IngestionWidget2,
  IngestionWidget3,
  IngestionWidget4,
  IngestionWidget5,
} from 'sr/partials/widgets/widgets-repository'
import {IngestionWidget6} from 'sr/partials/widgets/widgets-repository/ingestion/IngestionWidget6'
import ManipulationWidget1 from 'sr/partials/widgets/widgets-repository/manipulation/ManipulationWidget1'
import ManipulationWidget2 from 'sr/partials/widgets/widgets-repository/manipulation/ManipulationWidget2'
import {ManipulationWidget3} from 'sr/partials/widgets/widgets-repository/manipulation/ManipulationWidget3'

// type Props = {}
const widgets = {
  ingestion: [1, 2, 3],
  manipulation: [],
  output: [],
}

export default function Manipulation() {
  // url
  const navigate = useNavigate()
  const {param} = useParams()
  // redux
  // states
  const [fullDoc, setFullDoc] = useState<string>('/media/img/stock/cheque.png')
  const [fullScreen, setFullScreen] = useState(false)
  const [show, setShow] = useState(false)
  // functions
  const OpenFullScreenDoc = () => {
    setFullScreen(true)
  }
  const CloseFullScreenDoc = () => {
    setFullScreen(false)
  }

  const ExtractDocumnets = () => {}
  // use effects

  return (
    <>
      {/* loader */}
      {show && <ExtractLoader svgPath={ExtractLoaderIcon} />}
      <Split
        className='split'
        sizes={[20, 80]}
        minSize={324}
        expandToMin={false}
        gutterSize={5}
        gutterAlign='center'
        snapOffset={0}
        dragInterval={1}
        direction='horizontal'
        cursor='col-resize'
      >
        <div className='bg_secondary_15 border-right border-bottom table_view'>
          {widgets.ingestion.includes(1) && <ManipulationWidget1 />}
        </div>
        <div className='bg_secondary_15'>
          {widgets.ingestion.includes(2) && (
            <ManipulationWidget2 OpenFullScreenDoc={OpenFullScreenDoc} />
          )}
        </div>
      </Split>

      {widgets.ingestion.includes(3) && <ManipulationWidget3 onFileSave={ExtractDocumnets} />}
      {fullScreen && <CardWidget3 docPath={fullDoc} close={CloseFullScreenDoc} />}
    </>
  )
}
