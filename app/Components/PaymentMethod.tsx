"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useRouter } from "next/navigation";
import useUserPaymentData from "../Others/hooks/useUserPaymentData";

export default function PaymentMethod({ totalPrice }: { totalPrice: number }) {
  const [payMethod, setPayMethod] = useState("");
  const { userdetails } = useUserPaymentData();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (userdetails.name === "") {
      alert("Kindly fill details");
    }
  }, []);

  let payBody;

  if (payMethod === "UPI") {
    payBody = (
      <div className="flex gap-4 justify-center">
        <Input name="" required placeholder=" Mr John" label="UPI" />
        <Input name="" required placeholder=" Mr John" label="User Name" />
        <Input name="" required placeholder=" John@sbi123" label="UPI ID" />
      </div>
    );
  }

  if (payMethod === "CARDS") {
    payBody = (
      <div className="flex flex-col  justify-center items-center text-center">
        <div className="flex gap-4">
          <Input name="" required placeholder="Mr John " label="Holder Name" />
          <Input
            name=""
            required
            type="number"
            placeholder="1234 5678 4321 "
            label="Account Number"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <label>Bank</label>
          <select className="w-40 p-1 border-black border-2">
            <option disabled value="">
              Select a Bank
            </option>
            <option>SBI</option>
            <option>UCO</option>
            <option>PNB</option>
          </select>
        </div>
      </div>
    );
  }

  const handleSelectMethod = (method: string) => {
    setPayMethod(method);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setIsProcessing(true);

    setTimeout(() => {
      router.push("/checkout/details/payment/confirmation");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <p className="text-xl text-center font-bold">Select Payment Method</p>
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
          disabled={payMethod === "" || formSubmitted}
          isProcessing={isProcessing}
        />
      </div>
    </form>
  );
}
