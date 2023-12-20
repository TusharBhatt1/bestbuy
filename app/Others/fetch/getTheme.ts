import { fallbackTheme } from "@/utils";
import toast from "react-hot-toast";

export async function getTheme() {
  try {
    const res = await fetch(
      "https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata"
    );
    const data = await res.json();
    toast.success("Switched to Merchant Theme")
    return data;
  } catch (e) {
    toast.error("Error, Merchant Theme Not applied");
    return fallbackTheme;
  }
}


 // if (!res.ok) {
    //   toast.error("Something went wrong");
    //   return fallbackTheme;
    // }
