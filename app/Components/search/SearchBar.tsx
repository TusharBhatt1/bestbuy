"use client";
import React, { useState } from "react";
import { use } from "react";
import { ProductType } from "@/app/@types";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import dynamic from "next/dynamic";
import { getProducts } from "@/app/Others/fetch/getProducts";
import { FiLoader } from "react-icons/fi";

const DynamicSearchResult = dynamic(() => import("./SearchResult"));

const dataPromise = getProducts();

export default function SearchBar() {
  const data = use(dataPromise);
  const [allProducts, setAllProducts] = useState<ProductType[]>(data);
  const [isSearching, setIsSearching] = useState(false);
  const [alreadysearched, setAlreadysearched] = useState<string[]>([]);
  const [query , setQuery]=useState("")

  const [showResult, setShowResult] = useState(false);
  const [filteredResult, setFilteredResults] =
    useState<ProductType[]>(allProducts);

  const filterResult = (query: string) => {
    setFilteredResults(
      allProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    setQuery(input)
    if(input==="") return
    if (alreadysearched.includes(input.replaceAll(" ", ""))) {
      filterResult(input);
      setIsSearching(false);
    } else if (input.charAt(input.length - 1) !== " ") {
      alreadysearched.push(input);
      input = input.replaceAll(" ", "");
      filterResult(input);
      setIsSearching(true);
      setTimeout(() => setIsSearching(false), 1000);
    } else setIsSearching(false);
  };

  const handleCloseSearch=()=>{
    setShowResult(false)
    setQuery("")
  }

  return (
    <div className="flex flex-col">
      <div className="max-w-md mx-auto relative">
        <div className=" flex justify-center items-center">
          <div className="absolute left-3">
            <AiOutlineSearch size={20} />
          </div>
          <input
            onFocus={() => setShowResult(true)}
            onChange={handleChange}
            value={query}
            type="text"
            placeholder="What are you looking for today ?"
            className="w-[30vw] py-1 pl-20  pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
         
          {isSearching && (
            <div className="absolute right-8 animate-spin">
              <FiLoader />
            </div>
          )}
           {showResult && (
            <div className="absolute right-2 hover:bg-slate-100 rounded-full cursor-pointer">
              <AiOutlineClose onClick={handleCloseSearch} />
            </div>
          )}
          
        </div>
        <div className="w-full absolute h-full">
          {showResult && (
            <DynamicSearchResult filteredResult={filteredResult} />
          )}
        </div>
      </div>
    </div>
  );
}
