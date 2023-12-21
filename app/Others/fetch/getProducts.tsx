import toast from "react-hot-toast";

export async function getProducts() {
  try{
    const res = await fetch("https://fakestoreapi.com/products?limit=6");
    const data = await res.json();
    return data;
  }
  catch{
    toast.error("Unable to fetch data , check internet")
    return [];
  }

}
