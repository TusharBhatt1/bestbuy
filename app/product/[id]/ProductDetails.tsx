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
