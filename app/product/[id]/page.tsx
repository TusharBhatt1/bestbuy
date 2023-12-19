import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
const DynamicProductDetails=dynamic(()=>import('./GetProduct'),{
    loading:()=><p>FETCHING</p>
}) 

export default function page({params}:{params:{id:number}}) {
    const {id} =params
  return (
  
    <DynamicProductDetails
    id={id}
    />
    
  )
}
