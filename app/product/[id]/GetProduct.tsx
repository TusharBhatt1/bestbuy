"use client";

import { ProductType } from "@/app/@types";
import useLRU from "@/app/Others/hooks/useLRU";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const DynamicProductDetails = dynamic(() => import("./ProductDetails"));

export default function GetProduct({ id }: { id: number }) {
  const [details, setDetails] = useState<ProductType>();
  const { cache, setItem } = useLRU();


  const fetchData = (id: number) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setItem(`${id}`, data);
      })
      .catch((error) => {
       toast.error("Unable to fetch")
       //@ts-ignore
       setDetails({})
       return
      });
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
