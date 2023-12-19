import React from 'react';
import Input from './Input';
import Heading from './Heading';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';



interface User{
  name:string,
  address:string,
  contact:string
}
interface UserDetailsProps {
  userDetails:User
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UserDetails({handleChange ,userDetails}: UserDetailsProps) {
  return (
    <>
   <Link href={"/checkout"}>
        <BiArrowBack size={20}/>
   </Link>
    <Heading
    title='User Details'
    />
    <div>
      <Input
        label="Name"
        type="text"
        value={userDetails.name}
        name="name"
        placeholder="Enter your name"
        required
        onChange={handleChange}
      />
      <Input
       value={userDetails.address}
        placeholder="Enter your address"
        name="address"
        label="Address"
        type="text"
       
        onChange={handleChange}
      />
      <Input
       value={userDetails.contact}
        name="contact"
        onChange={handleChange}
        placeholder="+91"
        type="tel"
        label="Contact"
      />
    </div>
    </>
  );
}
