import ProductsList from "./Components/ProductsList";
import WishList from "./Components/wishlist/WishList";

export default async function Home() {

  return (
    <>
    <div className="flex">
   <ProductsList/> 
   <WishList/>
   </div>
   </>
  )
  
}
