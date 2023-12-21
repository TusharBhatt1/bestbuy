import dynamic from "next/dynamic";
import { ProductType } from "../../@types";
import { getProducts } from "../../Others/fetch/getProducts";
import Heading from "../Heading";
const DynamicProductCard = dynamic(() => import("./ProductCard"), {
  loading: () => <p className="h-20 w-20 bg-slate-400"></p>,
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
