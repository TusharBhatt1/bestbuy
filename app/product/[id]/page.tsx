import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
import { FiLoader } from 'react-icons/fi'
const DynamicProductDetails=dynamic(()=>import('./GetProduct'),{
    loading:()=><p className='h-70'><FiLoader className="mt-10 animate-spin"/></p>
}) 

export default function page({params}:{params:{id:number}}) {
    const {id} =params
  return (
  
    <DynamicProductDetails
    id={id}
    />
    
  )
}
