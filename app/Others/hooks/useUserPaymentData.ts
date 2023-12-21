import { create } from "zustand";
import { UserSchemaType } from "../validations/userSchema";

interface UserDetailsProps {
  userdetails: UserSchemaType;
  setUserDetails: (value: UserSchemaType) => void;
  paymentMethod: string;
  setPaymentMethod: (value: string) => void;
  resetDetails: () => void;
  resetPaymentMethod: () => void;
}

const useUserPaymentData = create<UserDetailsProps>((set) => ({
  userdetails: {
    name: "",
    address: "",
    email:"",
    contact: "",
    password:"",
    password_confirmation:"",
    profile:{}
  },
  setUserDetails: (value) => set({ userdetails: value }), 
  paymentMethod: "",
  setPaymentMethod: (value) => set({ paymentMethod: value }), 
  resetDetails: () => set({ userdetails: {
    name: "",
    address: "",
    email:"",
    contact: "",
    password:"",
    password_confirmation:"",
    profile:{}
  } }),
  resetPaymentMethod: () => set({ paymentMethod: "" }), 
}));

export default useUserPaymentData;
