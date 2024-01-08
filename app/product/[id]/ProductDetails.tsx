import { ProductType } from '@/app/@types';
import Button from '@/app/Components/Button';
import Heading from '@/app/Components/Heading';
import Rating from '@/app/Components/Rating';
import useCartDetails from '@/app/Others/hooks/useCartDetails';
import useCart from '@/app/Others/hooks/useCartModal';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { BiArrowBack } from 'react-icons/bi';

export default function ProductDetails({ details }: { details: ProductType | undefined }) {
  const { addItem, setFinalCart } = useCartDetails();
  const cartModal = useCart();

  const handleAddToCart = () => {
    if (details) {
      addItem(details);
      toast.success('Added to Cart');
      setFinalCart();
      setTimeout(() => cartModal.onOpen, 2000);
    }
  };

  return (
    <div className="border-b-2 border-slate-200 mt-4">
      <div className="flex flex-col sm:flex-row justify-around items-center px-4 sm:p-4">
        {/* left */}
        <div className="flex flex-col justify-center gap-4">
          <div className="flex gap-20">
            <aside className="flex flex-col gap-4">
              <Image width={20} height={20}  className="h-10 w-10" src={details.image} alt={details.title} />
              <Image width={20} height={20} className="h-10 w-10" src={details.image} alt={details.title} />
              <Image width={20} height={20} className="h-10 w-10" src={details.image} alt={details.title} />
              <Image width={20} height={20} className="h-10 w-10" src={details.image} alt={details.title} />
            </aside>
            <div>
              <Image width={70} height={70} className="h-40 w-40" src={details.image} alt={details.title} />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="mt-4 sm:mt-0 flex flex-col items-center gap-4 text-center">
        <div>
            <p className="font-bold text-xl sm:text-2xl">{details.title}</p>
          </div>
          <p>
            A light weight upper wear, wear as an inner wear and also outer wear
          </p>
          <div className="flex justify-center items-center">
          <Rating rate={details?.rating?.rate} />
            <p>(157)</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-center text-xl">
              &#8377;
              {details.price}
              <span className="ml-2 text-slate-400 line-through">
                &#8377;{details.price+200}
              </span>
            </p>

            <div className="flex flex-col gap-2 sm:gap-10 justify-center items-center">
              <div>
                <p className="font-bold">Select Size</p>
                <div className="flex gap-2 mt-2 sm:mt-4">
                  <button className="size-buttons">S</button>
                  <button className="size-buttons">M</button>
                  <button className="size-buttons">L</button>
                  <button className="size-buttons">XL</button>
                </div>
              </div>
              <div className="my-4 sm:my-0 w-[40vw]">
                <Button onClick={handleAddToCart} label="Add to Cart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  if (details) {
    return (
      <div>
        <div className='px-8 ml-4 py-4'>
          <Link href={"/"}>
            <BiArrowBack size={20} />
          </Link>
        </div>
        <div className="flex flex-col justify-around items-center md:flex-row">
          {/* left */}
          <div className='flex-col bg-slate-400'>
            <Image height={120} width={120} src={details?.image} alt={details?.title} />
          </div>
          {/* right */}
          <div className="flex flex-col gap-10 px-2 md:w-1/2 justify-between">
            <Heading title={details?.title} />
            <p className="text-sm text-slate-400 text-center">{details?.description}</p>
            <div className="flex justify-center items-center">
              <Rating rate={details?.rating?.rate} />
              <span className="ml-2">{`(${details?.rating?.count})`}</span>
            </div>
            <div className="flex justify-center">
              <Button label="Add To Cart" onClick={handleAddToCart} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
