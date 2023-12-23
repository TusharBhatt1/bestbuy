import dynamic from "next/dynamic";
const DynamicProductDetails = dynamic(() => import("./GetProduct"));

export default function page({ params }: { params: { id: number } }) {
  const { id } = params;
  return <DynamicProductDetails id={id} />;
}
