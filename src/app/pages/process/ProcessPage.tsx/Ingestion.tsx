import React, {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {Button, KTSVG, XtractProceed} from 'sr/helpers'
import {
  IngestionWidget1,
  IngestionWidget2,
  IngestionWidget3,
  IngestionWidget4,
  IngestionWidget5,
} from 'sr/partials/widgets/widgets-repository'
import {IngestionWidget6} from 'sr/partials/widgets/widgets-repository/ingestion/IngestionWidget6'

// type Props = {}
const widgets = {
  ingestion: [1, 4, 6],
  manipulation: [],
  output: [],
}

export default function Ingestion() {
  // url
  const navigate = useNavigate()
  const {param} = useParams()
  // redux
  // states
  const [files, setFiles] = useState<any>([])

  // functions
  const SelectImage = (e: any) => {
    e.preventDefault()
    setTimeout(() => {
      navigate('/engine/upload-list')
    }, 200)
    // useeffects
  }
  return (
    <>
      <div className='master_index border-bottom'>
        {widgets.ingestion.includes(1) && (
          <div className='d-flex flex-gap-8'>
            <div className='w-75 pb-24 pr-24 pl-30 bg_secondary_15'>
              <IngestionWidget1 selectImage={SelectImage} setFiles={setFiles} files={files} />
            </div>
            <div className='w-25 pb-18 pl-18 pt-32'>
              <IngestionWidget2 files={files} />
            </div>
          </div>
        )}
        {/* {widgets.ingestion.includes(2) ? <IngestionWidget2 /> : ''}
        {widgets.ingestion.includes(3) ? <IngestionWidget3 /> : ''}
        {widgets.ingestion.includes(4) ? <IngestionWidget4 /> : ''}
        {widgets.ingestion.includes(5) ? <IngestionWidget5 /> : ''}
        {widgets.ingestion.includes(6) ? <IngestionWidget6 /> : ''} */}
      </div>
      <div className='d-flex justify-content-end mr-5 mt-10 hx-44'>
        <div className='bg_primary text-white py-12 px-30 radius-90 align-items-center d-flex justify-content-center cursor'>
          Proceed
          <KTSVG path={XtractProceed} className={'ml-2'} />
        </div>
      </div>
    </>
  )
}
