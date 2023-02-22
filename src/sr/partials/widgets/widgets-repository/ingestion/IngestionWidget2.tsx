import {useEffect, useState} from 'react'
import {
  CheckForExtension,
  DateFormat,
  FormatBytes,
  getFileExtension,
  getFileSizeToMb,
  KTSVG,
  XtractListComplete,
  XtractListError,
  XtractListHistory,
  XtractListReUpload,
  XtractListReUploadCircle,
  XtractListTrash,
} from 'sr/helpers'

type Props = {
  files: any
}

export function IngestionWidget2({files}: Props) {
  // console.log(files)
  // url
  // redux
  // states
  const [error, setError] = useState(false)
  // function

  // useeffects
  useEffect(() => {}, [])

  return (
    <>
      <div className='list_upload_file'>
        <p className='font-16 fonts-500 pure-black text-capitalize'>Upload List</p>
        <ul className='pt-16 hx-420 overflow-auto'>
          {files.length >= 1 ? (
            files.map((item: any, i: any) => {
              return (
                <>
                  <li
                    key={i}
                    className='uploaded d-flex align-items-center justify-content-between hx-70 px-15 radius-8 cursor'
                  >
                    <div className='d-flex flex-row cursor'>
                      {CheckForExtension(item[0].name.split('.').pop()) ? (
                        <KTSVG path={XtractListComplete} className='mr-12' />
                      ) : (
                        <KTSVG path={XtractListError} className='mr-12' />
                      )}
                      {/* <KTSVG path={XtractListReUpload} className='mr-12' /> */}
                      <div className='d-flex flex-column'>
                        <p className='fonts-500 font-14 text_black_footer'>{item[0].name}</p>
                        <p className='fonts-400 font-12 text_black_25'>
                          {DateFormat(item[0].lastModified)}
                        </p>
                      </div>
                    </div>
                    {CheckForExtension(item[0].name.split('.').pop()) ? (
                      <div className=''>
                        <div className='d-flex flex-row align-items-center'>
                          <p className='fonts-500 font-12 text_black_footer pr-12'>
                            <span className='text-capitalized'>
                              {item[0].name.split('.').pop()}
                            </span>{' '}
                            | {FormatBytes(item[0].size)}
                          </p>
                          <KTSVG path={XtractListTrash} />
                        </div>
                      </div>
                    ) : (
                      <div className=''>
                        <div className='d-flex flex-row align-items-center'>
                          <p className='fonts-500 font-12 text_black_footer pr-12 text_error'>
                            Wrong File Format
                          </p>
                          <KTSVG path={XtractListHistory} />
                        </div>
                      </div>
                    )}
                  </li>
                  <hr className='m-0 border_list' />
                </>
              )
            })
          ) : (
            <span>Not Uploaded Yet</span>
          )}
          {/* <li className='uploaded d-flex align-items-center justify-content-between hx-70 px-15 radius-8 cursor'>
            <div className='d-flex flex-row'>
              <KTSVG path={XtractListComplete} className='mr-12' />
              <div className='d-flex flex-column'>
                <p className='fonts-500 font-14 text_black_footer'>Cheque 1.png</p>
                <p className='fonts-400 font-12 text_black_25'>Dec 23, 04:00 PM</p>
              </div>
            </div>
            <div className=''>
              <div className='d-flex flex-row align-items-center'>
                <p className='fonts-500 font-12 text_black_footer pr-12'>2 Pages | 3MB</p>
                <KTSVG path={XtractListTrash} />
              </div>
            </div>
          </li>
          <hr className='m-0 border_list' />
          <li className='uploaded d-flex align-items-center justify-content-between hx-70 px-15 radius-8 cursor'>
            <div className='d-flex flex-row'>
              <div className='position-relative'>
                <KTSVG path={XtractListReUpload} className='mr-12' />
                <KTSVG path={XtractListReUploadCircle} className='mr-12 second_circle' />
              </div>
              <div className='d-flex flex-column'>
                <p className='fonts-500 font-14 text_black_footer'>Cheque 1.png</p>
                <p className='fonts-400 font-12 text_black_25'>Dec 23, 04:00 PM</p>
              </div>
            </div>
            <div className=''>
              <div className='d-flex flex-row align-items-center'>
                <p className='fonts-500 font-12 text_black_footer pr-12 text_error'>Reupload</p>
              </div>
            </div>
          </li>
          <hr className='m-0 border_list' /> */}
        </ul>
      </div>
    </>
  )
}
