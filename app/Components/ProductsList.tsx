import dynamic from "next/dynamic";
import { ProductType } from "../@types";
import { getProducts } from "../Others/fetch/getProducts";
import Heading from "./Heading";
import useThemeStore from "../Others/hooks/useTheme";
const DynamicProductCard = dynamic(() => import("./ProductCard"), {
  loading: () => <p>LOADING</p>,
});

export default async function ProductsList() {
  const products: ProductType[] = await getProducts();
  
  return (
    <div className="flex flex-col">
      <Heading title="World Of Fashion" />
      <div className="grid grid-cols-1 gap-10  mt-10 sm:p-0 sm:ml-20  sm:grid-cols-2 ">
        {products?.map((product) => (
          <DynamicProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
