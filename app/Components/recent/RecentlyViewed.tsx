import React from "react";
import { CacheItem } from "../../Others/hooks/useLRU";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function RecentlyViewed({ cache }: { cache: CacheItem[] }) {
  const params = useParams();
  const id = params.id;
  return (
    <div className="w-full px-10 md:px-0  h-full p-4 ">
      <div className="p-4 flex flex-wrap justify-center gap-4">
        {cache.map((item) => {
          if (item.key !== id) {
            return (
              <Link key={item.key} href={`/product/${item.key}`}>
                <div
                  className="flex flex-col justify-center gap-2  text-center text-xs items-center
     shadow-xl rounded-lg w-32 h-32"
                  key={item.key}
                >
                  <span>
                    <Image
                      height={40}
                      width={40}
                      src={item.value?.image}
                      alt={item.value?.title}
                    />
                  </span>
                  <p>₹ {item.value.price}</p>
                </div>
              </Link>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
