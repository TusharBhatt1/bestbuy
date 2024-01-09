import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { ProductType } from '@/app/@types'

export default function RecentCard({item}:{item:ProductType}) {
  return (
    <Link  href={`/product/${item.id}`}>
    <div
      className="flex flex-col justify-center gap-2 text-center text-xs items-center
      shadow-xl rounded-lg w-32 h-32"
    
    >
      <span>
        <Image
          height={40}
          width={40}
          src={item.image}
          alt={item.title}
        />
      </span>
    <p>₹ {item.price}</p>
    </div>
  </Link>
  )
}
