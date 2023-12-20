"use client"
import useLRU from '../Others/hooks/useLRU'
import dynamic from 'next/dynamic'
const DynamicRecentlyViewed=dynamic(()=>import('./RecentlyViewed'))

export default function Recent() {
  const { cache } = useLRU();

  return (
    <>
      {cache.length>1 && (
        <>
        <p className='border-b-2 text-xl border-slate-200 text-center mt-16'>
          Recently Viewed
        </p>
        <DynamicRecentlyViewed cache={cache} />
        </>
      )}
    </>
  );
}