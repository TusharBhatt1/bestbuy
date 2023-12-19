"use client"
import React, { useCallback, useEffect, useState } from 'react'
import {use} from "react"
import { ProductType } from '@/app/@types'
import { AiOutlineSearch } from 'react-icons/ai'
import dynamic from 'next/dynamic'
import { getProducts } from '@/app/Others/fetch/getProducts'
import { FiLoader } from 'react-icons/fi'
const DynamicSearchResult =dynamic(()=>import('./SearchResult'))


async function fetchData() {
  const res= await fetch("https://fakestoreapi.com/products")
  if(!res.ok) throw new Error("FAILED TO FETCH")
  const data= await res.json()
  return data
}
const dataPromise=  fetchData()

export default function SearchBar() {
    const data=use(dataPromise)
    const [allProducts, setAllProducts]=useState<ProductType[]>(data)
    const [isSearching , setIsSearching]=useState(false)
    const [alreadysearched, setAlreadysearched]=useState<string[]>([])


    const [showResult , setShowResult]=useState(false)
    const [filteredResult , setFilteredResults]=useState<ProductType[]>(allProducts)
     
    const filterResult=(query:string)=>{
     setFilteredResults(allProducts.filter((product)=>product.title.toLowerCase().includes(query.toLowerCase())))
    }
    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value;

        if(alreadysearched.includes(input)) {
          filterResult(input)
          setIsSearching(false)
        }
        else if (input.charAt(input.length - 1) !== ' ') {
          alreadysearched.push(input)
          input = input.replace(/\s/g, '');
          filterResult(input);
          setIsSearching(true)
          
          setTimeout(()=>setIsSearching(false),500)
        }
        else setIsSearching(false)
      }
     
    
    

  return (
    
    <div className='flex flex-col'>
    <div className="max-w-md mx-auto relative">
      <div className=" flex justify-center items-center">
        <div className="absolute left-3">
          <AiOutlineSearch size={20} />
        </div>
        <input
          onFocus={() => setShowResult(true)}
          onBlur={() => setShowResult(false)}
          onChange={handleChange}
          type="text"
          placeholder="Search"
          className="w-full py-1 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
        />
        {isSearching && <div className="absolute right-3 animate-spin">
        <FiLoader/>
        </div>}
      </div>
      <div className='w-full absolute h-full'>
      {showResult && (<DynamicSearchResult filteredResult={filteredResult}/>)}
      </div>

  </div>
  </div>
  
  )}
