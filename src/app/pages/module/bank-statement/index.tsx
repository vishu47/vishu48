import {createContext, useEffect, useState} from 'react'
import {Outlet, useOutletContext} from 'react-router-dom'
import {HeaderTitle} from 'sr/helpers'
import {usePageData} from 'sr/layout/master-layout'
import Help from 'sr/partials/widgets/widgets-components/help/HelpWidget1'
import ProgressHeader1 from 'sr/partials/widgets/widgets-components/progress-breadcrumb/ProgressHeader1'

// method from
// https://reactrouter.com/en/main/hooks/use-outlet-context

export default function ExtractBankStatement() {
  const {setHeaderTitle} = usePageData()
  useEffect(() => {
    setHeaderTitle('IRU Bank Statement')
  }, [setHeaderTitle])

  return (
    <>
      <ProgressHeader1 />
      <Outlet />
      {/* help components */}
      <div className=''>
        <Help />
      </div>
    </>
  )
}
