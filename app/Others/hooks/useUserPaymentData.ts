import { create } from "zustand";

interface UserDetails {
  name: string;
  address: string;
  contact: string;
}

interface UserDetailsProps {
  userdetails: UserDetails;
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
  },
  setUserDetails: (value) => set({ userdetails: value }), // Fixed the function parameter type.
  paymentMethod: "",
  setPaymentMethod: (value) => set({ paymentMethod: value }), // Fixed the function parameter type.
  resetDetails: () => set({ userdetails: { name: "", address: "", contact: "" } }), // Fixed the object key name.
  resetPaymentMethod: () => set({ paymentMethod: "" }), // Fixed the object key name.
}));

export default useUserPaymentData;
