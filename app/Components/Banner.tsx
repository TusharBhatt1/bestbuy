import React from "react";
import logo from "@/public/logo.jpg"
import Image from "next/image";

export default function Banner() {
  const stats = [
    {
      data: "35K",
      desc: "Customers and counting.",
    },
    {
      data: "10K+",
      desc: "Downloads on Play Store",
    },
    {
      data: "40+",
      desc: "Countries and counting,",
    },
    {
      data: "30M+",
      desc: "Total revenue in 2 years",
    },
  ];

  return (
    <section className=" py-20 bg-gray-900">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl xl:mx-auto xl:text-center">
            <Image 
            src={logo}
            height={150}
            width={150}
            className="rounded-full"
            alt="Banner Image"
            />
          <h3 className=" mt-4 text-white text-3xl font-extrabold sm:text-4xl">
           BEST BUY
          </h3>
          <p className="mt-3 text-gray-300">
          Our Customers are always happy | We make the best deal with the first order | Shop now.
          </p>
        </div>
        <div className="mt-12 zoomIn">
          <ul className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
            {stats.map((item, idx) => (
              <li key={idx} className="sm:max-w-[15rem]">
                <h4 className="text-4xl text-white font-semibold">
                  {item.data}
                </h4>
                <p className="mt-3 text-gray-400 font-medium">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute inset-0 max-w-md mx-auto h-80 blur-[118px] sm:h-72"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>
    </section>
  );
}
