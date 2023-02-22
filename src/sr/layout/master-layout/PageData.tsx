/* eslint-disable react-hooks/exhaustive-deps */
import {FC, createContext, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {KTSVG, WithChildren} from 'sr/helpers'

export interface PageLink {
  title: string
  path: string
  isActive: boolean
  isSeparator?: boolean
}

export interface PageDataContextModel {
  pageTitle?: string
  setPageTitle: (_title: string) => void
  headerTitle?: string
  setHeaderTitle: (_header_title: string) => void
  breadCrumbState?: boolean
  setBreadCrumbState: (state: boolean) => void
  pageDescription?: string
  setPageDescription: (_description: string) => void
  pageBreadcrumbs?: Array<PageLink>
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => void
  pageHeader?: string
  setPageHeader: (header: string) => void
}

const PageDataContext = createContext<PageDataContextModel>({
  setPageTitle: (_title: string) => {},
  setBreadCrumbState: (state: boolean) => {},
  setHeaderTitle: (_header_title: string) => {},
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => {},
  setPageDescription: (_description: string) => {},
  setPageHeader: (header: string) => {},
})

const PageDataProvider: FC<WithChildren> = ({children}) => {
  const [headerTitle, setHeaderTitle] = useState<string>('')
  const [pageTitle, setPageTitle] = useState<string>('')
  const [breadCrumbState, setBreadCrumbState] = useState<boolean>(false)
  const [pageDescription, setPageDescription] = useState<string>('')
  const [pageBreadcrumbs, setPageBreadcrumbs] = useState<Array<PageLink>>([])
  const [pageHeader, setPageHeader] = useState<string>('')
  const value: PageDataContextModel = {
    pageTitle,
    setPageTitle,
    pageDescription,
    setPageDescription,
    pageBreadcrumbs,
    setPageBreadcrumbs,
    headerTitle,
    setHeaderTitle,
    breadCrumbState,
    setBreadCrumbState,
    pageHeader,
    setPageHeader,
  }
  return <PageDataContext.Provider value={value}>{children}</PageDataContext.Provider>
}

function usePageData() {
  return useContext(PageDataContext)
}

type Props = {
  description?: string
  breadcrumbs?: Array<PageLink>
}

const PageTitle: FC<Props & WithChildren> = ({children, description, breadcrumbs}) => {
  const {setPageTitle, setPageDescription, setPageBreadcrumbs} = usePageData()
  useEffect(() => {
    if (children) {
      setPageTitle(children.toString())
    }
    return () => {
      setPageTitle('')
    }
  }, [children])

  useEffect(() => {
    if (description) {
      setPageDescription(description)
    }
    return () => {
      setPageDescription('')
    }
  }, [description])

  useEffect(() => {
    if (breadcrumbs) {
      setPageBreadcrumbs(breadcrumbs)
    }
    return () => {
      setPageBreadcrumbs([])
    }
  }, [breadcrumbs])

  return (
    <>
      <div className='d-flex align-items-center'>
        {breadcrumbs
          ? breadcrumbs.map((item: any) => {
              return (
                <>
                  {item.path ? (
                    <Link to={item.path}>
                      {item.title}
                      <KTSVG path={'/media/icons/duotone/general/gen03.svg'} />
                    </Link>
                  ) : (
                    <p>
                      {item.title}
                      <KTSVG path={'/media/icons/duotone/general/gen03.svg'} />
                    </p>
                  )}
                </>
              )
            })
          : ''}
      </div>
    </>
  )
}

const PageDescription: FC<WithChildren> = ({children}) => {
  const {setPageDescription} = usePageData()
  useEffect(() => {
    if (children) {
      setPageDescription(children.toString())
    }
    return () => {
      setPageDescription('')
    }
  }, [children])
  return <></>
}

export {PageDescription, PageTitle, PageDataProvider, usePageData}
