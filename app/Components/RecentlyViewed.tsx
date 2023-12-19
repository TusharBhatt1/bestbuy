import React from 'react'
import { CacheItem } from '../Others/hooks/useLRU'
import Link from 'next/link'
import Image from 'next/image'

export default function RecentlyViewed({cache}:{cache:CacheItem[]}) {
  return (
    <div className='w-full px-10 md:px-0  h-full p-4'>
    
    <div className='p-4 flex justify-center gap-10'>
        {cache.map((item)=>(
     <Link
     key={item.key}
    href={`/product/${item.key}`}
     >
       <div className='flex flex-col justify-around  text-center text-xs items-center
     shadow-xl rounded-lg w-40 h-40' key={item.key}
     >
    <span>  
    <Image
    height={40}
    width={40}
    src={item.value.image}
    alt={item.value.title}
    />
    </span>
    <p>{item.value.title}</p>
    <p>₹ {item.value.price}</p>
    </div>
    </Link>

    ))}
    </div>
    </div>
  )
}
