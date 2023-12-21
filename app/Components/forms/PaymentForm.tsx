"use client";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { useRouter } from "next/navigation";
import useUserPaymentData from "../../Others/hooks/useUserPaymentData";
import toast from "react-hot-toast";
import { paymentSchema, PaymentSchemaType} from "../../Others/validations/paymentSchema";

const UPIConfig=[
  {
  name:"holderName",
  label:"Holder Name",
  placeholder:"Enter Holder Name",
  type:"text"
  },
  {
  name:"upiAddress",
  label:"UPI ID",
  placeholder:"Enter UPI ID",
  type:"text"
  },

]
const cardsConfig=[
 
  {
  name:"cardNumber",
  label:"Card Number",
  placeholder:"XXXX-XXXX-XXXX",
  type:""
  },
  {
  name:"cvvNum",
  label:"CVV",
  placeholder:"Enter CVV",
  type:"password"
  },

]

export default function PaymentForm({ totalPrice }: { totalPrice: number }) {
  const [payMethod, setPayMethod] = useState("");
  const { userdetails } = useUserPaymentData();
  const [isProcessing, setIsProcessing] = useState(false);
  const {setPaymentMethod}=useUserPaymentData()
  const router = useRouter()
  
  const {
    handleSubmit,
    formState: { errors,isValid },
    setValue,
    trigger
  } = useForm<PaymentSchemaType>({
    resolver: yupResolver(paymentSchema)
  });

  useEffect(() => {
    if (userdetails.name === "") {
      toast.error("Need details first")
      router.push("/checkout/details")
    }
  }, []);

  let payBody;

  if (payMethod === "UPI") {
    payBody = (
      <div className="flex gap-4 justify-center">
          {UPIConfig?.map((row, id) => {
          const name:any = row?.name;
          const prop = {
            onChange: (e: any) => {
              //@ts-ignore
              setValue(name, e?.target?.value);          
              trigger(name)

            },
            ...row,
          };

          return (
            <Input key={id} error={errors[name]?.message} {...prop} />
          );
        })}
      </div>
       )
    ;
  }

  if (payMethod === "CARDS") {
    payBody = (
      <div className="flex flex-col  justify-center items-center text-center">
        <div className="flex gap-4">
        {cardsConfig?.map((row, id) => {
          const name:any = row?.name;
          const prop = {
            onChange: (e: any) => {
              //@ts-ignore
              setValue(name, e?.target?.value);          
              trigger(name)

            },
            ...row,
          };

          return (
            <Input key={id} error={errors[name]?.message} {...prop} />
          );
        })}
        </div>
      </div>
    );
  }

  const handleSelectMethod = (method:"UPI" | "CARDS") => {
    setPayMethod(method);
    setPaymentMethod(method)
    console.log(method)
    //@ts-ignore
    setValue("paymentMode",method)

  };

  const onSubmit = (data) => {
    
    setIsProcessing(true);
    setTimeout(() => {
      router.push("/checkout/details/payment/confirmation");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex fo flex-col gap-4">
        <p className="text-xl text-center font-bold text-red-500 my-2">Select Payment Method</p>
        <div className="flex justify-center gap-10 text-center">
          <div
            onClick={() => handleSelectMethod("UPI")}
            className={`border-2 cursor-pointer rounded-full p-1 ${
              payMethod === "UPI"
                ? "border-black bg-black text-white"
                : "border-slate-400"
            } w-20`}
          >
            UPI
          </div>
          <div
            onClick={() => handleSelectMethod("CARDS")}
            className={`border-2 cursor-pointer rounded-full p-1 ${
              payMethod === "CARDS"
                ? "border-black border-3 bg-black text-white"
                : "border-slate-400"
            } w-20`}
          >
            CARDS
          </div>
        </div>

        {payBody}

        <Button
          type="submit" 
          label={`Pay ₹${totalPrice.toFixed()}`}
          disabled={isValid ? false : true}
          isProcessing={isProcessing}
        />
      </div>
    </form>
  );
}
