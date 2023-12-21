import React from 'react'
import Recent from '../Components/recent/Recent'

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex flex-col justify-around'>
        {children}
        <Recent/>
    </div>
  )
}
