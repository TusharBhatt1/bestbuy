import { ProductType } from "@/app/@types";
import Button from "@/app/Components/Button";
import Rating from "@/app/Components/Rating";
import useCartDetails from "@/app/Others/hooks/useCartDetails";
import useCart from "@/app/Others/hooks/useCartModal";
import Image from "next/image";
import toast from "react-hot-toast";

export default function ProductDetails({
  details,
}: {
  details: ProductType | undefined;
}) {
  const { addItem, setFinalCart } = useCartDetails();
  const cartModal = useCart();

  const handleAddToCart = () => {
    if (details) {
      addItem(details);
      toast.success("Added to Cart");
      setFinalCart();
      setTimeout(() => cartModal.onOpen, 2000);
    }
  };

  return (
    <div className="border-b-2 border-slate-200 ">
      <div className="flex flex-col sm:flex-row justify-around items-center px-4 sm:p-4">
        {/* left */}
        <div className="flex flex-col justify-center gap-4">
          <div className="flex gap-12">
            <aside className="flex flex-col gap-4">
              <Image
                width={20}
                height={20}
                className="h-10 w-10"
                src={details.image}
                alt={details.title}
              />
              <Image
                width={20}
                height={20}
                className="h-10 w-10"
                src={details.image}
                alt={details.title}
              />
              <Image
                width={20}
                height={20}
                className="h-10 w-10"
                src={details.image}
                alt={details.title}
              />
              <Image
                width={20}
                height={20}
                className="h-10 w-10"
                src={details.image}
                alt={details.title}
              />
            </aside>
            <div>
              <Image
                width={70}
                height={70}
                className="h-40 w-40"
                src={details.image}
                alt={details.title}
              />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="mt-4 sm:mt-0 flex flex-col items-center gap-2 text-center">
          <div>
            <p className="font-bold text-md sm:text-lg">{details.title}</p>
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
                &#8377;{details.price + 200}
              </span>
            </p>

            <div className="flex flex-col gap-2 sm:gap-10 justify-center items-center">
              <div>
                <p className="font-bold">Select Size</p>
                <div className="flex gap-2 mt-2 sm:mt-4">
                  <button className="px-4 py-2 border-2 border-slate-200">
                    S
                  </button>
                  <button className="px-4 py-2 border-2 border-slate-200">
                    M
                  </button>
                  <button className="px-4 py-2 border-2 border-slate-200">
                    L
                  </button>
                  <button className="px-4 py-2 border-2 border-slate-200">
                    XL
                  </button>
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
}
