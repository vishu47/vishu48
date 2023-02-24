import clsx from 'clsx'
import {useState} from 'react'
import {Outlet} from 'react-router-dom'
import {ThemeContext} from 'sr/partials/partials'
import {AdminFooter} from './components/footer/AdminFooter'
import {AdminHeaderWrapper} from './components/header/admin/AdminHeaderWrapper'
import {PageDataProvider} from './master-layout'

const AdminMasterLayout = () => {
  const [theme, setTheme] = useState('light')

  return (
    <PageDataProvider>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <>
          <div data-testid='master' className={`theme-${theme}`}>
            <div className={clsx('d-flex flex-column flex-root main-page')}>
              {/* begin::Page */}
              <div className='page d-flex flex-row flex-column-fluid'>
                <div className='d-flex flex-column w-100'>
                  <div className='master_layout_main'>
                    {/* admin layout header */}
                    <AdminHeaderWrapper />
                  </div>
                  {/* begin::Content */}
                  <div className='page_background'>
                    <Outlet />
                  </div>
                  {/* end::Content */}
                  <div className='master_layout_main'>
                    {/* <Footer /> */}
                    <AdminFooter />
                  </div>
                </div>
                {/* end::Wrapper */}
              </div>
              {/* end::Page */}
            </div>
          </div>
        </>
      </ThemeContext.Provider>
    </PageDataProvider>
  )
}

export {AdminMasterLayout}
