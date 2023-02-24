import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Button, KTSVG, toAbsoluteUrl} from 'sr/helpers'
import {IngestionWidget1} from 'sr/partials/widgets/widgets-repository/ingestion/IngestionWidget1'
import CardWidget2 from 'sr/partials/widgets/widgets-components/cards/CardWidget2'

// type Props = {}

export default function UploadTemplate() {
  const navigate = useNavigate()
  const SelectImage = (e: any) => {
    e.preventDefault()
    setTimeout(() => {
      navigate('/engine/upload-list')
    }, 200)
  }
  return (
    <>
      <IngestionWidget1 />
    </>
  )
}
