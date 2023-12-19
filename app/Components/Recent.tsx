"use client"
import useLRU from '../Others/hooks/useLRU'
import Heading from './Heading'
import RecentlyViewed from './RecentlyViewed'

export default function Recent() {

    const {cache}=useLRU()
  return (
    <>
    <p className=' border-b-2 border-slate-200 text-center mt-16'>Recently Viewed</p>
   <RecentlyViewed
   cache={cache}
   />
   </>
  )
}
