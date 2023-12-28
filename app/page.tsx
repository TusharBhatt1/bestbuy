import ProductsList from "./Components/product/ProductsList";
import WishList from "./Components/wishlistSideBox/WishLists";

export default async function Home() {
   
  return (
    <>
    <div className="flex">
   <ProductsList/> 
   <div className="hidden sm:block">
   <WishList/>
   </div>
   </div>
   </>
  )

  
  
}

