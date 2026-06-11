import React from "react";
import { RiDeleteBinLine, RiFlashlightLine, RiStarFill } from "react-icons/ri";

import { BsBookmark } from "react-icons/bs";
import { assets } from "../../assets/assets";

const CartItem = () => {
  return (
    <div className="bg-white border-b border-gray-200 ">
      {/* top */}
      <div className="flex gap-6 p-4 ">
        {/* image */}
        <div className="w-28 h-32 bg-gray-100 rounded-md overflow-hidden">
          <img
            src={assets.trouser}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* details */}
        <div className="flex flex-col gap-3 flex-1">
          {/* title */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-medium text-black">
                GARTEEN Straight Fit Men Grey Jeans
              </h2>
              <p className="text-gray-500 text-xs mt-2">Size: 32</p>
            </div>
            {/* quantity */}
            <div>
              <div className=" flex justify-between items-center w-24 border border-black px-2 ">
                <button className="text-xl hover:opacity-50 transition font-semibold">
                  –
                </button>
                1
                <button className="text-xl hover:opacity-50 transition font-semibold">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-green-600">
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </div>

            <span className="text-green-600 text-sm">3.8</span>
            <span className="text-gray-400 text-sm ">•</span>
            <span className="text-gray-500 text-base font-semibold">
              (35,252)
            </span>
          </div>

          {/* price */}
          <div className="flex items-center gap-4">
            <span className="text-green-600 text-xl font-bold tracking-wide">
              ↓85%
            </span>

            <span className="text-gray-400 line-through text-lg font-semibold">
              ₹2,999
            </span>

            <span className="text-black font-bold text-xl">₹438</span>
          </div>
        </div>
      </div>

      {/* delivery */}
      <p className="text-sm text-gray-800 my-2 px-4">Delivery by May 19, Tue</p>
      {/* bottom */}
      <div className="grid grid-cols-3 border-t border-gray-200 px-4">
        {/* save */}
        <button className="flex items-center justify-center gap-3  text-xl font-semibold text-gray-500 hover:bg-gray-50 transition-all py-2">
          <BsBookmark />
          <span>Save for later</span>
        </button>

        {/* remove */}
        <button className="flex items-center justify-center gap-3  text-xl font-semibold text-gray-500 hover:bg-gray-50 transition-all  py-2">
          <RiDeleteBinLine />

          <span>Remove</span>
        </button>

        {/* buy now */}
        <button className="flex items-center justify-center gap-3 text-xl font-semibold text-gray-500 hover:bg-gray-50 transition-all py-2">
          <RiFlashlightLine />

          <span>Buy this now</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
