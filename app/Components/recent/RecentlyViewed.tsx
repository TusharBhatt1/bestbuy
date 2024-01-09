"use client"
import React from "react";
import useLRU, { CacheItem } from "../../Others/hooks/useLRU";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import Spinner from "../Spinner";
const DynamicRecentCard =dynamic(()=>import("./RecentCard"),{
  loading:()=><Spinner/>
}) 

export default function RecentlyViewed() {
  const params = useParams();
  const id = params.id;
  const { cache } = useLRU();
  return (
    <>
      {cache.map((item) => {
        if (item.key !== id) {
          return (
           <DynamicRecentCard key={item.key} item={item.value}/>
          );
        }
      })}
    </>
  );
};


