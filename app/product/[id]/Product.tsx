"use client";

import { ProductType } from "@/app/@types";
import Spinner from "@/app/Components/Spinner";
import { getProductDetails } from "@/app/Others/fetch/getProductDetails";
import useLRU from "@/app/Others/hooks/useLRU";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DynamicProductDetails = dynamic(() => import("./ProductDetails"), {
  loading: () => (
    <div className="h-[50vh] w-[60vw] flex justify-center items-center">
      <div>
        <Spinner />
      </div>
    </div>
  ),
});

export default function Product({ id }: { id: number }) {
  const [details, setDetails] = useState<ProductType>();
  const { cache, setItem } = useLRU();

  const fetchData = async (id: any) => {
    const data = await getProductDetails(id);
    setDetails(data);
    setItem(`${id}`, data);
  };

  const getData = (id: number) => {
    const cachedItem = cache.find((item) => item.key === `${id}`);

    if (cachedItem) {
      setDetails(cachedItem.value);

      return;
    } else fetchData(id);
  };
  useEffect(() => {
    getData(id);
  }, []);
  return details && <DynamicProductDetails details={details} />;
}
