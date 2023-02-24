import {MenuItem} from './MenuItem'
import {usePageData} from 'sr/layout/master-layout'
import {XtractBackArrow, XtractHomeIcon, XtractInfoIcon} from 'sr/helpers'

export function MenuInner() {
  const {headerTitle} = usePageData()

  return (
    <>
      <MenuItem icon={XtractHomeIcon} to='/dashboard' hasPadding={false} />
      <MenuItem icon={XtractBackArrow} to='/builder' hasBorder={true} hasPadding={false} />
      <MenuItem
        title={headerTitle}
        titleClass='font-20 fonts-500 pure-black'
        to='/builder'
        hasPadding={false}
      />
    </>
  )
}
