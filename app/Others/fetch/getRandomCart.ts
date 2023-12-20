import { OrderDetailsProps } from "@/app/@types";
import toast from "react-hot-toast";

const getRandomCart = async (): Promise<OrderDetailsProps> => {

    const res = await fetch(
      "https://groww-intern-assignment.vercel.app/v1/api/order-details"
    );
    if (!res.ok) {
      toast.error("Enable to update cart")
      return {products:[],paymentMethods:[]} ;
    }
    const data = await res.json();
    return data;

  }
export default getRandomCart;
