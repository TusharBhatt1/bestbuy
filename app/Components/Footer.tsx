import logo from "@/public/logo.jpg"
import Image from "next/image"
export default function Footer() {
  return (
    <div className="flex flex-col justify-center text-white items-center p-10 gap-4 bg-black ">
        <div className="flex justify-center items-center gap-2">
            <Image src={logo} alt='logo' className="h-20 w-20"/>
            <p className="font-bold">BestBuy</p>
        </div>
        <div className="flex gap-8 ">
         <p>Home</p>
         <p>Products</p>
         <p>About</p>
         <p>Careers</p>
         <p>Offices</p>
        </div>
    </div>
  )
}
