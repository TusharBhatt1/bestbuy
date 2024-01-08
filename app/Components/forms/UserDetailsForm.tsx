"use client";
import {
  RiUserLine,
  RiMapPinLine,
  RiPhoneLine,
  RiImageAddLine,
} from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import Button from "@/app/Components/Button";
import {
  UserSchemaType,
  userSchema,
} from "@/app/Others/validations/userSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import Input from "@/app/Components/Input";
import useUserPaymentData from "@/app/Others/hooks/useUserPaymentData";
import { useRouter } from "next/navigation";


const formConfig = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter your name",
    type: "text",
    icon: RiUserLine,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "text",
    icon: MdOutlineEmail,
  },
  {
    name: "address",
    label: "Address",
    placeholder: "Enter your Address",
    type: "text",
    icon: RiMapPinLine,
  },
  {
    name: "contact",
    label: "Contact",
    placeholder: "Enter your contact",
    type: "",
    icon: RiPhoneLine,
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    icon: null, 
  },
  {
    name: "password_confirmation",
    label: "Confirm Password",
    placeholder: " Confirm password",
    type: "password",
    icon: null, 
  },
  {
    name: "profile",
    label: "Upload Image",
    placeholder: "Enter name",
    type: "file",
    icon: RiImageAddLine,
  },
];


export default function UserDetailsForm() {

  const {setUserDetails,userdetails}=useUserPaymentData()
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    trigger
  } = useForm<UserSchemaType>({
    resolver: yupResolver(userSchema),
  });

  const router=useRouter()
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const file = e.target.files?.[0];
    if (file) {
      setValue("profile", file);
    }
  };

  const onSubmit = (data: UserSchemaType) => {
  
    setUserDetails(data)
    toast.success("Accepted, just a moment!");
    router.push("/checkout/details/payment")
    
  };

  return (
    <div className="flex justify-center items-center mt-2">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-md justify-center items-center p-4 rounded-md shadow-md grid grid-cols-2 gap-4">
        {formConfig?.map((row, id) => {
          const name: any = row?.name
          const prop = {
            onChange: (e: any) => {
              if (row?.type === "file") {
                handleImage(e);
              } else {
                setValue(name, e?.target?.value);
              }
              trigger(name)
            },
            ...row,
          };

          return (
            <Input key={id} error={errors[name]?.message} {...prop} />
          );
        })}
        <Button label="Submit" type="submit" />
      </div>
    </form>
    </div>
  );

}
