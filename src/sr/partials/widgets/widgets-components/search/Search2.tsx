import {useState} from 'react'
import {CancelIconInHeader, Input, KTSVG, SearchIconInHeader} from 'sr/helpers'

type Props = {setFilter: any}

export default function Search2({setFilter}: Props) {
  // states
  const [search, setSearch] = useState(false)

  return (
    <>
      <div
        className={`search_section d-flex radius-12 bg_secondary_35 ${
          search ? 'position-absolute  w-100' : 'wx-56 hx-56 justify-content-center'
        }`}
      >
        {search ? (
          <div className='search_box_gropup w-100 d-flex align-items-center justify-content-between'>
            <KTSVG className='hx-56 cursor pr-15 pl-24' path={SearchIconInHeader} />
            <Input
              type={'text'}
              inputClass='bg-transparent w-100'
              placeholder={'Search Bazaar Application'}
              onChange={(e: any) => {
                setFilter(e.target.value)
              }}
            />
            <div
              className='wx-63 cursor bg_secondary_75 hx-54 d-flex justify-content-center'
              onClick={() => {
                setSearch(false)
              }}
              style={{borderRadius: '0px 12px 12px 0px'}}
            >
              <KTSVG path={CancelIconInHeader} />
            </div>
          </div>
        ) : (
          <span onClick={() => setSearch(true)}>
            <KTSVG className='hx-56 cursor' path={SearchIconInHeader} />
          </span>
        )}
        {/* <div className='m-auto'>
            <Input
              inputClass='bg-transparent '
              type={'text'}
              placeholder={'Search Bazaar Application'}
              onChange={() => {}}
            />
          </div> */}
      </div>
    </>
  )
}
