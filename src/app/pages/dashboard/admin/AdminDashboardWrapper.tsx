// import {useIntl} from 'react-intl'
// import {PageTitle} from 'sr/layout/master-layout'
import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button, KTSVG} from 'sr/helpers'
import {KTIMG} from 'sr/helpers/ui-components/KTIMG'
import {usePageData} from 'sr/layout/master-layout'
import CardWidget4 from 'sr/partials/widgets/widgets-components/cards/CardWidget4'
import CardWidget5 from 'sr/partials/widgets/widgets-components/cards/CardWidget5'
import CardWidget6 from 'sr/partials/widgets/widgets-components/cards/CardWidget6'
import CardWidget7 from 'sr/partials/widgets/widgets-components/cards/CardWidget7'
import CardWidget8 from 'sr/partials/widgets/widgets-components/cards/CardWidget8'
import CardWidget9 from 'sr/partials/widgets/widgets-components/cards/CardWidget9'
import {ActionListMenu, ActionSectionList} from 'sr/redux/admin/actions/HomepageAction'
import {useAdminSelector} from 'sr/redux/reducers'

// type Props = {}

const AdminDashboardPage = () => {
  // url
  // redux
  const dispatch = useDispatch()
  const {homepage} = useAdminSelector()

  // function
  useEffect(() => {
    dispatch(ActionListMenu())
    dispatch(ActionSectionList())
    // We have to show toolbar only for dashboard page
    // document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    // return () => {
    //   document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    // }
  }, [dispatch])

  return (
    <>
      {/* breadcrumbs */}
      {/* <PageTitle
        breadcrumbs={[
          {title: 'breadcrumb', path: '/dashboard', isActive: true},
          {title: 'breadcrumb2', path: '', isActive: false},
        ]}
        description='Description'
      >
        Dashboard
      </PageTitle> */}

      {/* begin::tabs */}
      <section className='banner_section'>
        <div className='container-fluid'>
          <div className='row p-0 banner_img'>
            <div className='col-12 text-start py-6'>
              <Link to={`/${process.env.REACT_APP_ROUTES_PREFIX}/extract-cheque`}>
                <h6>Extract Cheque Module</h6>
              </Link>
            </div>
            <div className='col-12 text-start py-6'>
              <Link to={`/process/ingestion`}>
                <h6>Process Ingestion</h6>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container-fluid my-4 px-5'>
          <div className='row'>
            <div className='col-md-3 position-sticky'>
              <CardWidget4 />
            </div>
            <div className='col-md-9 overflow-auto h-screen'>
              <h4>Sections List</h4>
              <CardWidget5 list={homepage.menuList} loading={!homepage.loading} />
              <CardWidget6 banner={homepage.sectionList} />
              <CardWidget7 whySwoosh={homepage.sectionList} />
              <CardWidget8 conversation_ai={homepage.sectionList} />
              <CardWidget9 chat_bot={homepage.sectionList} />
            </div>
          </div>
        </div>
      </section>
      {/* end::tabs */}
    </>
  )
}

export default function AdminDashboardWrapper() {
  // for using different languages and changing the text in to other languages
  // const intl = useIntl()
  const {setHeaderTitle} = usePageData()
  useEffect(() => {
    setHeaderTitle('Admin Dashboard')
  }, [setHeaderTitle])

  return (
    <>
      <AdminDashboardPage />
    </>
  )
}
