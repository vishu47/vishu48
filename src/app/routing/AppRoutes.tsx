/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import {App} from 'app/App'
import DashboardWrapper from 'app/pages/dashboard/client/DashboardWrapper'
import {useAuth} from 'app/pages/module/auth/core/Auth'
import AuthPage from 'app/pages/module/auth/Login'
import ErrorsPage from 'app/pages/module/errors/ErrorsPage'
import {FC} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {MasterLayout} from 'sr/layout/MasterLayout'
import {PrivateRoutes} from './PrivateRoutes'

const {PUBLIC_URL} = process.env

const AppRoutes: FC = () => {
  const {currentUser} = useAuth()
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          {/* master layout provides all the necessary components */}G
          <Route element={<MasterLayout />}>
            {/* <Route path='/*' element={<ErrorsPage />} /> */}
            <Route path='error/*' element={<ErrorsPage />} />
            {/* <Route path='logout' element={<Logout />} /> */}
            {!currentUser ? (
              <>
                <Route path='/*' element={<PrivateRoutes />} />
                <Route index element={<Navigate to='/dashboard' />} />
              </>
            ) : (
              <>
                {/* all path redirect to /auth */}
                <Route path='*' element={<Navigate to='/dashboard' />} />
                <Route path='/dashboard' element={<DashboardWrapper />} />
                <Route path='auth/*' element={<AuthPage />} />
              </>
            )}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export {AppRoutes}
