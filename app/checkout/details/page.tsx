import Heading from '@/app/Components/Heading'
import UserDetailsForm from '../../Components/forms/UserDetailsForm'
import Link
 from 'next/link'
import { BiArrowBack } from 'react-icons/bi'
export default function page() {
  return (
    <div>
  <span className='block sm:absolute'>
    <Heading
    title='Enter Your Details'
    />
    </span>
    <UserDetailsForm/>
    </div>
  )
}




// OLD ONE
// "use client";

// import React, { useEffect, useState } from 'react'
// import UserDetails from '@/app/Components/UserDetails'
// import Button from '@/app/Components/Button'
// import { useRouter } from 'next/navigation'
// import useUserPaymentData from '@/app/Others/hooks/useUserPaymentData'
// import Link from 'next/link';
// import { BiArrowBack } from 'react-icons/bi';

// export default function Checkout() {
//   const [formDetails, setFormDetails] = useState({
//     name: "",
//     address: "",
//     contact: ""
//   });

//   const [phoneNumberError, setPhoneNumberError] = useState("");

//   const { userdetails, setUserDetails } = useUserPaymentData();
//   const router = useRouter();

//   useEffect(() => {
//     setFormDetails(userdetails);
//   }, [userdetails]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleCheckout = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (formDetails.contact.length !== 10) {
//       setPhoneNumberError("Phone number must be 10 digits long");
//       return;
//     }
//     setPhoneNumberError("");
//     setUserDetails(formDetails);
//     router.push("/checkout/details/payment");
//   };

//   return (
//     <form onSubmit={handleCheckout}>
      
//       <div className='flex flex-col shadow-lg w-1/2 m-auto p-4 gap-4 justify-center items-center'>

//         <div className='flex flex-col gap-4 p-2'>
        
//           <UserDetails handleChange={handleChange} userDetails={formDetails} />
          
//           {phoneNumberError && <p className="text-sm text-center text-red-500">{phoneNumberError}</p>}
//         </div>

//         <Button label='Proceed' type="submit" />
//       </div>
//     </form>
//   )
// }
