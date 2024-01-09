import dynamic from "next/dynamic";
import { FiLoader } from "react-icons/fi";
const DynamicProductDetails = dynamic(() => import("./GetProduct"),{
  loading:()=>(
    <div className='h-[60vw] w-full flex justify-center items-center bg-slate-200'>
    <FiLoader className="mt-10 animate-spin"/>
  </div>
  )
});

export default function page({ params }: { params: { id: number } }) {
  const { id } = params;

  return (
    <div className="flex flex-col">
  <DynamicProductDetails id={id} />
  </div>);
}
