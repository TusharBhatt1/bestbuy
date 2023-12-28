import dynamic from "next/dynamic";
import { FiLoader } from "react-icons/fi";
const DynamicProductDetails = dynamic(() => import("./GetProduct"),{
  loading:()=>(
    <div className='h-80 w-full flex justify-center items-center bg-slate-200'>
    <FiLoader className="mt-10 animate-spin"/>
  </div>
  )
});

export default function page({ params }: { params: { id: number } }) {
  const { id } = params;
  return (
    <>
    <p className="text-center font-bold underline">Buy today @10% off</p> 
  <DynamicProductDetails id={id} />
  </>);
}
