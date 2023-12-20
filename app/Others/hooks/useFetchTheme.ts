"use client"
import { useEffect } from "react"
import useTheme from "./useTheme"
import { getTheme } from "../fetch/getTheme"
 
const useFetchTheme=()=>{
    const {setTheme} = useTheme()
    useEffect(()=>{
      getTheme().then((data)=>{
        if(data){
          setTheme(data)
        }
      })
    },[])
    return null
}
export default useFetchTheme