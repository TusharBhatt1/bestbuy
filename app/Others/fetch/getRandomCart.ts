import { OrderDetailsProps } from "@/app/@types"

 const getRandomCart=async():Promise<OrderDetailsProps>=>{
const res=await fetch("https://groww-intern-assignment.vercel.app/v1/api/order-details")
if(!res.ok) throw new Error
const data= await res.json()
return data
}
export default getRandomCart