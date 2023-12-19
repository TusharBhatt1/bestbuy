"use client"
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { ProductType } from '../@types';
import useCartDetails from '../Others/hooks/useCartDetails';
import toast from 'react-hot-toast';
import useAddToWishlist from '../Others/hooks/useAddToWishlist';
import useCart from '../Others/hooks/useCartModal';

export default function ProductCard({ product }: { product: ProductType }) {
  const { id, title, image, price } = product;
  const addToWishlistModal=useAddToWishlist()
  const { addItem, setFinalCart } = useCartDetails();
  const cartModal=useCart()

  const handleAddToCart = () => {
    toast.success('Added To Cart');
    addItem(product);
    
    setFinalCart();
    setTimeout(()=>{
      cartModal.onOpen()
    },2000)
    
  };
  const handleAddToWishlist=(product:ProductType)=>{
   addToWishlistModal.onOpen()
   addToWishlistModal.setProduct(product)
   
  }
  
  return (
    <div>
    
    
    <ul className="cursor-pointer">
    <li className="border rounded-lg transition-transform transform-gpu hover:shadow-xl">
    
        <div className="flex max-h-40 items-start justify-between p-4">
        
            <Link href={`/product/${id}`}>
               <div className='grid grid-rows-1'>
                <p className="font-bold text-xs">{title}</p>
                <div className="flex justify-center items-center">
                  <Image src={image} alt={product.title} width={50} height={50} className='h-20 w-20' />
                </div>
                <p className="text-sm font-extrabold">&#x20B9; {price}</p>
  
                </div>
              
            </Link>
          <button
            className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100"
            onClick={() => handleAddToWishlist(product)}
          >
            Wishlist
          </button>
        </div>
        <div className="py-3 px-2 flex justify-around items-center border-t text-right">
          <Button
          label='Add To Cart'
          onClick={handleAddToCart}
          />
          <Link href={`/product/${product.id}`}>
            VIEW
            {/* <a className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">View product</a> */}
          </Link>
        </div>
      </li>
    </ul>
  </div>


    // </div>
  );
}
