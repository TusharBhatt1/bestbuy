import dynamic from "next/dynamic";
import { ProductType } from "../../@types";
import { getProducts } from "../../Others/fetch/getProducts";
import Heading from "../Heading";
import { FiLoader } from "react-icons/fi";
const DynamicProductCard = dynamic(() => import("./ProductCard"), {
  loading: () => (
    <div className="flex justify-center items-center h-40 w-40 bg-slate-200">
      <FiLoader
        size={30}
        className=" animate-spin"
      />
    </div>
  ),
});

export default async function ProductsList() {
  const products: ProductType[] = await getProducts();

  return (
    <div className="flex mt-4 flex-col">
      <Heading title="World Of Fashion" />
      <div className="grid grid-cols-1 gap-10  mt-10 sm:p-0 sm:ml-20  sm:grid-cols-2 ">
        {products?.map((product) => (
          <DynamicProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
