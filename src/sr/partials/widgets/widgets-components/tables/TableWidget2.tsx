import {useState} from 'react'
import {CheckBox, KTSVG} from 'sr/helpers'
import {file1} from 'sr/helpers/raw-data'

// interface Coordinates : {
//   x:number,y:number,w:number,h:number
// }
type Props = {
  setCoordinates: (e: any) => void
}

export default function TableWidget2({setCoordinates}: Props) {
  // states
  // functions
  const GetHighlighted = (e: any) => {
    const x = e.target.getAttribute(['data-x'])
    const y = e.target.getAttribute(['data-y'])
    const h = e.target.getAttribute(['data-h'])
    const w = e.target.getAttribute(['data-w'])
    setCoordinates({x, y, w, h})
  }

  return (
    <>
      <section className='table_border radius-12'>
        <div className='container table_container p-0 overflow-auto'>
          <table className='table'>
            <thead>
              <tr>
                <th className='pl-40 hx-85'>
                  <CheckBox
                    type={'checkbox'}
                    onChange={() => {}}
                    labelClass={'font-16 fonts-500'}
                  />
                </th>
                <th className='fonts-500 font-16 hx-85 '>Entry</th>
                <th className='fonts-500 font-16 hx-85 '>Value</th>
                <th className='fonts-500 font-16 hx-85 pr-40'>Action</th>
              </tr>
            </thead>
            <tbody>
              {file1.map((item: any, index: any) => {
                return (
                  <>
                    <tr>
                      <td className='pl-40 hx-58'>
                        <CheckBox
                          type={'radio'}
                          id={item.id}
                          x={item.x}
                          y={item.y}
                          w={item.w}
                          h={item.h}
                          onChange={(e: any) => GetHighlighted(e)}
                        />
                      </td>
                      <td className='hx-58 fonts-500'>{item.name}</td>
                      <td className='hx-58 fonts-500'>XXXXXXXXXXXXXX</td>
                      <td className='pr-40 hx-58'>
                        {index === 0 ? (
                          <div className='font-16 fonts-500 col-md-2 d-flex align-items-center justify-content-center text-center'>
                            <KTSVG path={'/media/icons/duotone/abstract/edit.svg'} />
                          </div>
                        ) : (
                          ''
                        )}
                      </td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
      {/* <div className='container table_container flex-gap-9'>
          <div className='row py-27 px-40'>
            <div className='font-600 col-md-5 d-flex align-items-center justify-content-start text-start'>
              <CheckBox
                type={'checkbox'}
                onChange={() => {}}
                label={'Entry'}
                inputClass={'mr-34'}
                labelClass={'font-16 fonts-500'}
              />
            </div>
            <div className='fonts-500 font-16 col-md-4 d-flex align-items-center justify-content-start text-center'>
              Value
            </div>
            <div className='fonts-500 font-16 col-md-3 d-flex align-items-center justify-content-end text-end pe-3'>
              Action
            </div>
          </div>
          {file1.map((item: any, index: any) => {
            return (
              <>
                <div className='row py-23 px-40'>
                  <div className='col-md-5'>
                    <CheckBox
                      type={'radio'}
                      id={item.id}
                      x={item.x}
                      y={item.y}
                      w={item.w}
                      h={item.h}
                      onChange={(e: any) => GetHighlighted(e)}
                      label={item.name}
                      name={'high'}
                      inputClass={'mr-34'}
                      labelClass={'font-16 fonts-500'}
                    />
                  </div>
                  <div className='font-16 fonts-500 col-md-5 d-flex align-items-center justify-content-start text-center'></div>
                </div>
              </>
            )
          })}
        </div> */}
    </>
  )
}
