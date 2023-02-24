import {Table} from 'react-bootstrap'

type Props = {
  label?: string
  thead: any
  tbody: any
  actionButton?: any
}

export function TableView({thead, tbody, actionButton, label}: Props) {
  return (
    <>
      <div className='ui_table_header '>
        {label ? (
          <div className='table_header d-flex justify-content-between p-3'>
            <h4>{label}</h4>
            <span>{actionButton}</span>
          </div>
        ) : (
          ''
        )}
        <table className='table table-borderless table-hover ui_table rounded'>
          {thead}
          {tbody}
        </table>
      </div>
    </>
  )
}
