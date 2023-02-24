import axios from 'axios'
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
  ingestion: [1, 2, 3],
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
  const onFileSave = (e: any) => {
    const formData = new FormData()
    files.forEach((fi: any) => {
      formData.append('file', fi)
    })
    setTimeout(() => {
      navigate(`${process.env.REACT_APP_BAZAAR_MANIPULATION}/xtract-cheque/manipulation`)
    }, 300)
    // axios.post(`http://localhost:3000/api/v1/uploadfile`, formData, {
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   },
    // })
  }
  return (
    <>
      <div className='master_index border-bottom'>
        <div className='d-flex flex-gap-8'>
          <div className='w-75 pb-24 pr-24 pl-30 bg_secondary_15'>
            {widgets.ingestion.includes(1) && (
              <IngestionWidget1 setFiles={setFiles} files={files} />
            )}
          </div>
          <div className='w-25 pb-18 pl-18 pt-32'>
            {widgets.ingestion.includes(2) && <IngestionWidget2 files={files} />}
          </div>
        </div>
      </div>
      {widgets.ingestion.includes(3) && <IngestionWidget3 onFileSave={onFileSave} />}
    </>
  )
}
