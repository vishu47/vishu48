import DashboardWrapper from 'app/pages/dashboard/client/DashboardWrapper'
import {render, screen, cleanup, within} from '@testing-library/react'
import {MainHeader} from 'sr/layout/components/header/main-header/MainHeader'
import {BrowserRouter, Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'

afterEach(() => {
  // cleanup on exiting
  cleanup()
})

describe('Header Menu', () => {
  const initialState = {output: 10}
  const mockStore = configureStore()
  let store

  test('Check For Logo', () => {
    store = mockStore(initialState)
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MainHeader />
        </Provider>
      </BrowserRouter>
    )

    const dashboard = screen.getByTestId('mainHeader')
    expect(dashboard).toBeInTheDocument()
  })

  // test('check for Login Button', () => {
  //   render(<MainHeader />)
  //   const dashboard = screen.getByTestId('mainHeader')
  //   screen.getByRole('button', {
  //     name: /text Login/i,
  //   })
  //   expect(dashboard).toBeInTheDocument()
  // })
})
