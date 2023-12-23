import React from 'react'
import { FiLoader } from 'react-icons/fi'

export default function loading() {
  return (
    <div className='h-80 w-full flex justify-center items-center bg-slate-200'>
      <FiLoader className="mt-10 animate-spin"/>
    </div>
  )
}
