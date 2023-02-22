import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {I18nProvider} from 'sr/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen, PageDataProvider} from 'sr/layout/master-layout'

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        {/* provide the core layout settings, classes, variables, attr and other things */}
        <LayoutProvider>
          <PageDataProvider>
            {/* <p>Working app.tsx</p> */}
            <Outlet />
          </PageDataProvider>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export {App}
