import Banner from "./Components/Banner";
import ProductsList from "./Components/ProductsList";
import WishList from "./Components/wishlistSideBox/WishList";
import { getTheme } from "./Others/fetch/getTheme";
import useThemeStore from "./Others/hooks/useTheme";

export default async function Home() {
  return (
    <>
    <Banner/>
    <div className="flex">
   <ProductsList/> 
   <WishList/>
   </div>
   </>
  )

  
  
}

