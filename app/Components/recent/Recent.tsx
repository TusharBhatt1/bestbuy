"use client"
import useLRU from '../../Others/hooks/useLRU'
import dynamic from 'next/dynamic'
const DynamicRecentlyViewed=dynamic(()=>import('./RecentlyViewed'))

export default function Recent() {
  const { cache } = useLRU();

  return (
    <>
      {cache.length>1 && (
        <div className='flex flex-col w-full sm:w-[32vw]'>
        <p className=' text-sm  text-center'>
          Recently Viewed
        </p>
        <DynamicRecentlyViewed cache={cache} />
        </div>
      )}
    </>
  );
}