import toast from "react-hot-toast";

export async function getProductDetails(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    const data = await res.json();
    return data;
  } catch {
    toast.error("Unable to fetch details , check internet");
    return {};
  }
}
