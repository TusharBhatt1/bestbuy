import React, { Suspense } from 'react'
import Heading from '../Components/Heading'
import Checkout from './Checkout'

export default function page() {
  return (
    <div>
    <Heading
    title='Checkout'
    />
    <Checkout
    />
    </div>
  )
}
