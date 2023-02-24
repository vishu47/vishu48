import {createRoot} from 'react-dom/client'
// auth provider
import {AuthProvider} from 'app/pages/module/auth'
// chart config
import {Chart, registerables} from 'chart.js'
// toastify
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Apps
import {OriginalI18nProvider} from './sr/i18n/Originali18n'
// routes
import {AppRoutes} from './app/routing/AppRoutes'
// store redux
import {store} from 'sr/redux/store'
import {Provider} from 'react-redux'
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_swooosh/assets/css/style.rtl.css'
//  **/
import './sr/assets/sass/style.scss'
import './sr/assets/sass/plugins.scss'
import './sr/assets/sass/style.react.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

// chart register
Chart.register(...registerables)

const container = document.getElementById('root')

if (container) {
  createRoot(container).render(
    <Provider store={store}>
      {/* we use redux */}
      <OriginalI18nProvider>
        {/* provides language support */}
        {/* include/added login and sign up routes */}
        <AuthProvider>
          <AppRoutes />
          <ToastContainer /> {/* original routes */}
        </AuthProvider>
      </OriginalI18nProvider>
    </Provider>
  )
}
