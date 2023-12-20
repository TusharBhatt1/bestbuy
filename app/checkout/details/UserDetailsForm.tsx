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
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    trigger
  } = useForm<UserSchemaType>({
    resolver: yupResolver(userSchema),
  });

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("profile", file);
    }
  };

  const onSubmit = (data: UserSchemaType) => {
    console.log(data);

    toast.success("Accepted, just a moment!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-md mx-auto p-4 rounded-md shadow-md grid grid-cols-2 gap-4">
        {formConfig?.map((row, id) => {
          const name: any = row?.name;
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
  );
  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <div className={containerClassName}>
  //       <div className="flex flex-col mt-1">
  //         <label htmlFor="name" className={`text-sm font-medium text-gray-700 flex items-center ${labelClassName}`}>
  //           <RiUserLine className="mr-2" />
  //           Name
  //         </label>

  //         <input {...register("name")} className={inputClassName} placeholder="Enter your name" />
  //         <span className="text-red-400 text-xs">{errors.name?.message}</span>
  //       </div>

  //       <div className="flex flex-col mt-1">
  //         <label htmlFor="email" className={`text-sm font-medium text-gray-700 flex items-center ${labelClassName}`}>
  //           <MdOutlineEmail className="mr-2" />
  //           Email
  //         </label>

  //         <input
  //           type="text"
  //           id="address"
  //           {...register("email")}
  //           className={inputClassName}
  //           placeholder="Enter your email"
  //         />
  //         <span className="text-red-400 text-xs">{errors.email?.message}</span>
  //       </div>

  //       <div className="flex flex-col mt-1">
  //         <label htmlFor="contact" className={`text-sm font-medium text-gray-700 flex items-center ${labelClassName}`}>
  //           <RiPhoneLine className="mr-2" />
  //           Phone Number
  //         </label>

  //         <input {...register("contact")} className={inputClassName} placeholder="Enter your phone number" />
  //         <span className="text-red-400 text-xs">{errors.contact?.message}</span>
  //       </div>

  //       <div className="flex flex-col mt-1">
  //         <label htmlFor="contact" className={`text-sm font-medium text-gray-700 flex items-center ${labelClassName}`}>
  //         <RiMapPinLine className="mr-2" />
  //           Address
  //         </label>

  //         <input {...register("contact")} className={inputClassName} placeholder="Enter your phone number" />
  //         <span className="text-red-400 text-xs">{errors.contact?.message}</span>
  //       </div>

  //       <div className="flex justify-between mt-1 col-span-2">
  //         <div>
  //         <label htmlFor="password" className={`text-sm font-medium text-gray-700 flex items-center ${labelClassName}`}>
  //           Set Password
  //         </label>

  //         <input
  //           type="password"
  //           placeholder="Password"
  //           className={inputClassName}
  //           {...register("password")}
  //         />
  //         <span className="text-red-400 text-xs">{errors.password?.message}</span>
  //         </div>
  //         <div>
  //         <label htmlFor="password_confirmation" className={`text-sm font-medium text-gray-700 flex items-center ${labelClassName}`}>
  //           Confirm Password
  //         </label>

  //         <input
  //           type="password"
  //           placeholder="Confirm Password"
  //           className={inputClassName}
  //           {...register("password_confirmation")}
  //         />
  //         <span className="text-red-400 text-xs">{errors.password_confirmation?.message}</span>
  //         </div>
  //       </div>

  //       <div className="flex mt-4 col-span-2">
  //         <div className="rounded-md border border-blue-500 flex items-center justify-center h-12 w-20">
  //           <input type="file" id="image" className="hidden" {...register("profile")} onChange={handleImage} />
  //           <label
  //             htmlFor="image"
  //             className="rounded-full text-center cursor-pointer text-xs py-2 text-blue-500 hover:text-blue-700"
  //           >
  //             <span className="text-red-400 text-xs">{errors.profile?.message}</span>
  //             <RiImageAddLine className="mr-2" /> Upload Image
  //           </label>
  //         </div>
  //         <Button label="Submit" type="submit" />
  //       </div>
  //     </div>
  //   </form>
  // );
}
