import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {DropDown, Input, KTSVG} from 'sr/helpers'
import Loader from 'sr/helpers/ui-components/Loader'
import {
  ActionDeleteMenu,
  ActionGetMenuItem,
  ActionListMenu,
} from 'sr/redux/admin/actions/HomepageAction'

type Props = {
  list: any
  loading: boolean
}

export default function CardWidget5({list, loading}: Props) {
  // url
  // redux
  const dispatch = useDispatch()
  // states
  // function
  const DeleteMenu = async (e: any) => {
    e.preventDefault()
    const id = e.currentTarget.id
    if (window.confirm('Are you want to delete?')) {
      await dispatch(ActionDeleteMenu(id))
      await dispatch(ActionListMenu())
    }
  }
  const EditSection = async (e: any) => {
    const id = e.currentTarget.id
    await dispatch(ActionGetMenuItem(id))
  }

  // useeffects
  return (
    <>
      <div className='py-20 border_secondary mt-3 radius-8 p-4 gap-3'>
        <h5>Menu Section</h5>
        <div className='d-flex gap-4'>
          {loading ? (
            list ? (
              list.map((item: any, key: any) => {
                return (
                  <>
                    <div key={key} className='radius-8 p-3 mt-2 w-33 bg_secondary_85'>
                      <div className='d-flex justify-content-between flex-row align-items-center'>
                        <h6 className='fonts-600 '>Menu Link {key + 1}</h6>
                        <div className='d-flex gap-3 '>
                          <span
                            id={item.id}
                            onClick={(e: any) => {
                              DeleteMenu(e)
                            }}
                          >
                            <KTSVG
                              className='cursor'
                              path={'/media/icons/duotone/general/delete.svg'}
                            />
                          </span>
                          <span
                            id={item.id}
                            onClick={(e: any) => {
                              EditSection(e)
                            }}
                          >
                            <KTSVG
                              className='cursor'
                              path={'/media/icons/duotone/abstract/edit.svg'}
                            />
                          </span>
                        </div>
                      </div>
                      <h6 className='pt-2'>Title : {item.title}</h6>
                      <h6 className='pt-2'>Link : {`${item.link}`}</h6>
                    </div>
                  </>
                )
              })
            ) : (
              'Not Found'
            )
          ) : (
            <span className='mt-2'>
              <Loader />
            </span>
          )}
        </div>
      </div>
    </>
  )
}
