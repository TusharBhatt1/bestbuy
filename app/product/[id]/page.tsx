import dynamic from "next/dynamic";
const DynamicProductDetails = dynamic(() => import("./GetProduct"));

export default function page({ params }: { params: { id: number } }) {
  const { id } = params;
  return (
    <>
    <p className="text-center font-bold underline">Buy today @10% off</p> 
  <DynamicProductDetails id={id} />
  </>);
}
