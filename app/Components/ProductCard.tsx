"use client";
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
  const addToWishlistModal = useAddToWishlist();
  const { addItem, setFinalCart } = useCartDetails();
  const cartModal = useCart();

  const handleAddToCart = () => {
    toast.success('Added To Cart');
    addItem(product);
    setFinalCart();
    setTimeout(() => {
      cartModal.onOpen();
    }, 2000);
  };

  const handleAddToWishlist = (product: ProductType) => {
    addToWishlistModal.onOpen();
    addToWishlistModal.setProduct(product);
  };

  return (
    <div className="relative">
      <ul className="cursor-pointer">
        <li className="border max-w-xl rounded-lg transition-transform transform-gpu hover:shadow-xl relative">
          <div className="flex h-40 items-start  justify-between p-2">
            <div className="h-full  w-full flex relative overflow-hidden rounded-t-lg">
              <Link href={`/product/${id}`}>
                <Image src={image} alt={product.title} layout="fill" objectFit="cover" className="rounded-t-lg" />
              </Link>
            </div>
            <div className='w-full p-4'>
              <Link href={`/product/${id}`}>
                <div className='grid grid-rows-1'>
                  <p className=" text-sm">{title}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-extrabold">&#x20B9; {price}</p>
                  </div>
                </div>
              </Link>
            </div>
            <button
              className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100"
              onClick={() => handleAddToWishlist(product)}
            >
              Wishlist
            </button>
          </div>
          <div className="py-3 px-2 flex justify-around items-center border-t text-right">
            <Button label='Add To Cart' onClick={handleAddToCart} />
            <Link href={`/product/${product.id}`}>
              VIEW
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
