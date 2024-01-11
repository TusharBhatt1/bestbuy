"use client"
import useLRU from '../../Others/hooks/useLRU'
import dynamic from 'next/dynamic'
import Spinner from '../Spinner';
const DynamicRecentlyViewed=dynamic(()=>import("./RecentlyViewed"),{
  loading:()=><Spinner/>
})

export default function Recent() {
  const { cache } = useLRU();

  return (
    <>
      {cache.length> 1 && (
        <div className='flex flex-col w-full sm:w-[32vw]'>
        <p className=' text-sm mt-4 md:mt-0  text-center'>
          Recently Viewed
        </p>
        <div className="w-full px-10 md:px-0  h-full p-4 ">
      <div className="p-4 flex flex-wrap justify-center gap-4">
        <DynamicRecentlyViewed />
        </div>
        </div>
    </div>
      )}
    </>
  );
}