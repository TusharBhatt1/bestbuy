import { create } from "zustand";
import { UserSchemaType } from "../validations/userSchema";

interface UserDetails {
  name: string;
  address: string;
  contact: string;
}

interface UserDetailsProps {
  userdetails: UserSchemaType;
  setUserDetails: (value: UserDetails) => void;
  paymentMethod: string;
  setPaymentMethod: (value: string) => void;
  resetDetails: () => void;
  resetPaymentMethod: () => void;
}

const useUserPaymentData = create<UserDetailsProps>((set) => ({
  userdetails: {
    name: "",
    address: "",
    contact: "",
    password:"",
    password_confirmation:"",
    profile:""

  },
  setUserDetails: (value) => set({ userdetails: value }), 
  paymentMethod: "",
  setPaymentMethod: (value) => set({ paymentMethod: value }), 
  resetDetails: () => set({ userdetails: {} }),
  resetPaymentMethod: () => set({ paymentMethod: "" }), 
}));

export default useUserPaymentData;
