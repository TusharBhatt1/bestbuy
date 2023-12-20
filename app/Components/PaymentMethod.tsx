"use client"
import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { useRouter } from 'next/navigation';

export default function PaymentMethod({totalPrice}:{totalPrice:number}) {
  const [payMethod, setPayMethod] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isProcessing , setIsProcessing]=useState(false)
  const router=useRouter()


  let payBody;

  if (payMethod === 'UPI') {
    payBody = (
      <div className='flex gap-4 justify-center'>
       <Input
       name=""
       required
       placeholder=' Mr John'
       label='User Name'
       />
       <Input
       name=""
       required
       placeholder=' John@sbi123'
       label='UPI ID'
       />
      </div>
    );
  }

  if (payMethod === 'CARDS') {
    payBody = (
      <div className='flex flex-col  justify-center items-center text-center'> 
      <div className='flex gap-4'>
      <Input 
      name=""
      required
      placeholder='Mr John '
      label='Holder Name'
      />
      <Input
      name=""
      required
      type="number" 
      placeholder='1234 5678 4321 '
      label='Account Number'
      />
      </div>
      <div className='flex flex-col justify-center items-center'>
       <label>Bank</label>
       <select className='w-40 p-1 border-black border-2'>
     <option disabled value="">Select a Bank</option>
      <option>SBI</option>
      <option>UCO</option>
      <option>PNB</option>
     </select>
    </div>
  
      
      </div>
    );
  }

  const handleSelectMethod = (method:string) => {
    setPayMethod(method);
  };

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setIsProcessing(true)

    setTimeout(()=>{
      router.push("/checkout/details/payment/confirmation")
    },2000)
    
  };

  return (
    <div className="m-4">
      <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white" data-x-data="creditCard">
        <header className="flex flex-col justify-center items-center">
          <div
            className="relative"
            // data-x-show="card === 'front'"
            // data-x-transition:enter="transition ease-out duration-300"
            // data-x-transition:enter-start="opacity-0 transform scale-90"
            // data-x-transition:enter-end="opacity-100 transform scale-100"
          >
            {/* <img className="w-full h-auto" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png" alt="front credit card" /> */}
            <div className="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12">
              <p className="number mb-5 sm:text-xl" data-x-text="cardNumber !== '' ? cardNumber : '0000 0000 0000 0000'"></p>
              <div className="flex flex-row justify-between">
                <p data-x-text="cardholder !== '' ? cardholder : 'Card holder'"></p>
                <div className="">
                  <span data-x-text="expired.month"></span>
                  <span data-x-show="expired.month !== ''">/</span>
                  <span data-x-text="expired.year"></span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative"
            // data-x-show="card === 'back'"
            // data-x-transition:enter="transition ease-out duration-300"
            // data-x-transition:enter-start="opacity-0 transform scale-90"
            // data-x-transition:enter-end="opacity-100 transform scale-100"
          >
            {/* <img className="w-full h-auto" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png" alt="" /> */}
            <div
              className="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8  sm:bottom-24 right-0 sm:px-12"
            >
              <div className="border border-white w-16 h-9 flex justify-center items-center">
                <p data-x-text="securityCode !== '' ? securityCode : 'code'"></p>
              </div>
            </div>
          </div>
          <ul className="flex">
            <li className="mx-2">
              <img className="w-16" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png" alt="" />
            </li>
            <li className="mx-2">
              <img className="w-14" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png" alt="" />
            </li>
            <li className="ml-5">
              {/* <img className="w-7" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png" alt="" /> */}
            </li>
          </ul>
        </header>
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">Card payment</h1>
          <div className="">
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card holder"
                // onChange={(e) => setCardholder(e.target.value)}
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card number"
                // value={cardNumber}
                // onChange={(e) => setCardNumber(e.target.value)}
                // onKeyDown={formatCardNumber}
                // onKeyUp={formatCardNumber}
                // maxLength="19"
              />
            </div>
            <div className="my-3 flex flex-col">
              <div className="mb-2">
                <label htmlFor="" className="text-gray-700">
                  Expired
                </label>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <select
                  name=""
                  id=""
                  className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  data-x-model="expired.month"
                >
                  <option value="" selected disabled>
                    MM
                  </option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select
                  name=""
                  id=""
                  className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  data-x-model="expired.year"
                >
                  <option value="" selected disabled>
                    YY
                  </option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
                <input
                  type="text"
                  className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  placeholder="Security code"
                  // data-x-model="securityCode"
                  // data-x-on:focus="card = 'back'"
                  // data-x-on:blur="card = 'front'"
                />
              </div>
            </div>
          </div>
        </main>
        <footer className="mt-6 p-4">
          <button
            className="submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
            // data-x-on:click="onSubmit()"
          >
            Pay now
          </button>
        </footer>
      </div>
    </div>
  );


  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div className='flex flex-col gap-4'>
  //       <p className='text-xl text-center font-bold'>Select Payment Method</p>
  //       <div className='flex justify-center gap-10 text-center'>
  //         <div
  //           onClick={() => handleSelectMethod('UPI')}
  //           className={`border-2 cursor-pointer rounded-full p-1 ${
  //             payMethod === 'UPI' ? 'border-black bg-black text-white' : 'border-slate-400'
  //           } w-20`}
  //         >
  //           UPI
  //         </div>
  //         <div
  //           onClick={() => handleSelectMethod('CARDS')}
  //           className={`border-2 cursor-pointer rounded-full p-1 ${
  //             payMethod === 'CARDS' ? 'border-black border-3 bg-black text-white' : 'border-slate-400'
  //           } w-20`}
  //         >
  //           CARDS
  //         </div>
  //       </div>

  //       {payBody}

  //       <Button
  //         type='submit'
  //         label={`Pay ₹${totalPrice.toFixed()}`}
  //         disabled={payMethod===""||formSubmitted}
  //         isProcessing={isProcessing}
  //       />
        
  //     </div>
  //   </form>
  // );
}
