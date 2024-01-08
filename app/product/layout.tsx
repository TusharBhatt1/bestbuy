import React from 'react'
import Recent from '../Components/recent/Recent'

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex flex-col sm:flex-row justify-between px-4'>
        {children}
        <Recent/>
    </div>
  )
}
