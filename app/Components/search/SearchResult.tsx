import { ProductType } from '@/app/@types';
import Link from 'next/link';
import React from 'react';

export default function SearchResult({ filteredResult }: { filteredResult: ProductType[] }) {

  if(filteredResult.length===0){
    return (
      <div className="max-h-40 w-full shadow-sm bg-white text-black z-30 p-2 overflow-y-auto">
        <div className='flex flex-col'>
        <p>No result</p>
        </div>
      </div>
    );
  }
  return (
    <div className="max-h-40 w-full shadow-sm bg-white  text-black z-30 p-2 overflow-y-auto">
      <div className='flex flex-col'>
      {filteredResult.map((p) => (
        <Link href={`/product/${p.id}`} key={p.id} className="p-2 text-sm hover:bg-slate-50">
          {p.title}
        </Link>
      ))}
      </div>
    </div>
  );
}
