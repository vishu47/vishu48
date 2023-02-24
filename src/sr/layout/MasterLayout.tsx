import {useAuth} from 'app/pages/module/auth'
import clsx from 'clsx'
import {useEffect, useState} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {getUrlForHeader} from 'sr/helpers'
import {ThemeContext} from 'sr/partials/partials'
import {Content} from './components/Content'
import {Footer} from './components/footer/Footer'
import {MainFooter} from './components/footer/MainFooter'
import {HeaderWrapper} from './components/header/HeaderWrapper'
import {MainHeaderWrapper} from './components/header/main-header/MainHeaderWrapper'
import {usePageData} from './master-layout'

const MasterLayout = () => {
  // context
  const {pageHeader, setPageHeader} = usePageData()
  const {currentUser} = useAuth()
  // urls
  const {pathname} = useLocation()
  // states
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (getUrlForHeader(pathname, 'use-case')) return setPageHeader('use-case')
    setPageHeader('')
  }, [pageHeader, pathname, setPageHeader])

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <>
        <div data-testid='master-layout-1' className={`theme-${theme}`}>
          <div className={clsx('d-flex flex-column flex-root main-page')}>
            {/* begin::Page */}
            <div className='page d-flex flex-row flex-column-fluid'>
              {/* <div className={clsx('d-flex flex-column p-4 pt-4 aside_layout_main')}> */}
              {/* <AsideDefault /> */}
              {/* </div> */}
              {/* begin::Wrapper */}
              <div className='d-flex flex-column w-100'>
                <div className='master_layout_main' id={'main_header'}>
                  {pageHeader ? <HeaderWrapper /> : <MainHeaderWrapper />}
                  {/* main layout header */}
                </div>
                {/* begin::Content */}
                <div className='page_background'>
                  <Outlet />
                </div>
                {/* end::Content */}
                <div className='master_layout_main' id={'main_footer'}>
                  {pageHeader ? <Footer /> : <MainFooter />}
                </div>
              </div>
              {/* end::Wrapper */}
            </div>
            {/* end::Page */}
          </div>
        </div>
      </>
    </ThemeContext.Provider>
  )
}

export {MasterLayout}
