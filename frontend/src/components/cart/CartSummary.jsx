import React, { useState } from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import { RiArrowDropDownLine, RiDiscountPercentFill } from "react-icons/ri";

const CartSummary = () => {
  const [openFee, setOpenFee] = useState(false);
  const [openDiscount, setOpenDiscount] = useState(false);
  return (
    <div className="flex-1 bg-[#F1F2F4] pl-2 sticky top-20 h-fit ">
      {/* top */}
      <div className="bg-white px-6 pb-4 shadow-md shadow-black/40 rounded-sm">
        <h2 className="pb-4 pt-2 border-b text-lg font-medium tracking-wide">
          Order Summary
        </h2>
        {/* prices */}
        <div className=" border-black/10 space-y-2">
          {/* MRP */}
          <div className="flex justify-between items-center py-3 border-b">
            <p className="text-lg text-black">MRP</p>

            <p className="text-lg font-medium">₹999</p>
          </div>

          {/* Fees */}
          <div className="border-b pb-2">
            <button
              onClick={() => setOpenFee((prev) => !prev)}
              className="flex items-center gap-1 text-lg"
            >
              <span>Fees</span>

              <RiArrowDropDownLine
                className={`text-3xl transition-all duration-300 ${
                  openFee ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openFee ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex justify-between items-center  pt-1">
                <p className="text-gray-500">Platform Fee</p>

                <p className="text-gray-500 font-medium">₹8</p>
              </div>
            </div>
          </div>

          {/* Discounts */}
          <div className="space-y-2 border-b pb-2">
            <button
              onClick={() => setOpenDiscount((prev) => !prev)}
              className="flex items-center gap-1 text-lg"
            >
              <span>Discounts</span>

              <RiArrowDropDownLine
                className={`text-3xl transition-all duration-300 ${
                  openDiscount ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 space-y-1 ${
                openDiscount ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {/* discount row */}
              <div className="flex justify-between items-center ">
                <p className="text-gray-500">Discount on MRP</p>

                <p className="text-green-600 font-medium">- ₹638</p>
              </div>

              {/* coupon row */}
              <div className="flex justify-between items-center ">
                <p className="text-gray-500">Coupons Applied (1)</p>

                <p className="text-green-600 font-medium">- ₹55</p>
              </div>
            </div>
          </div>
        </div>

        {/* total */}
        <div className="pt-5 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium">Total Amount</p>

            <p className="text-xl font-semibold">₹314</p>
          </div>

          {/* saving */}
          <div className="flex justify-center items-center gap-2 bg-[#E7F8EC] text-green-700 py-3 rounded-xl font-semibold">
            <RiDiscountPercentFill className="text-xl" />

            <p>
              You'll save <span className="font-bold">₹685</span> on this order!
            </p>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-col pt-4">
        {/* secure */}
        <div className="text-[#373738] text-base flex justify-center items-center gap-3 px-8  ">
          <IoShieldCheckmark className="text-4xl shrink-0" />
          <p className="leading-tight text-left ">
            Safe and secure payments. Easy <br />
            returns. 100% Authentic products.
          </p>
        </div>
        {/* checkout */}
        <div className="flex justify-between items-center mt-4 bg-white px-4 py-3 rounded-md shadow-sm border border-black/10">
          {/* price */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 line-through">₹999</span>

            <span className="text-2xl font-bold text-black">₹777</span>

            <span className="text-xs text-green-600 font-medium">
              You saved ₹222
            </span>
          </div>

          {/* button */}
          <button className="bg-[#FB641B] hover:bg-[#e85a16] active:scale-95 transition-all duration-300 text-white py-3 px-8 rounded-md font-semibold tracking-wide shadow-md">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
