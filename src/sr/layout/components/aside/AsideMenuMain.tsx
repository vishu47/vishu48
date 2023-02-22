/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {AsideMenuItem} from './AsideMenuItem'
import {AsideMenuItemWithSubMain} from './AsideMenuItemWithSubMain'

export function AsideMenuMain() {
  const intl = useIntl()
  // console.log(process.env.PUBLIC_URL)
  return (
    <>
      <AsideMenuItem
        to={'/dashboard'}
        title='Home'
        fontIcon='bi-house fs-2'
        bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        className='py-2'
      />
      <AsideMenuItem
        to={'/builder'}
        title='Setting'
        fontIcon='bi-gear fs-2'
        bsTitle={intl.formatMessage({id: 'MENU.SETTING'})}
        className='py-2'
      />
    </>
  )
}
