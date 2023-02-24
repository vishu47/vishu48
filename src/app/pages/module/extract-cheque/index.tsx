import {useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import {usePageData} from 'sr/layout/master-layout'
import Help from 'sr/partials/widgets/widgets-components/help/HelpWidget1'
import ProgressHeader1 from 'sr/partials/widgets/widgets-components/progress-breadcrumb/ProgressHeader1'

// type Props = {}

export default function ExtractCheque() {
  const {setHeaderTitle} = usePageData()
  useEffect(() => {
    setHeaderTitle('Extract Cheque')
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
