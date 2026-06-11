import React from "react";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoShieldCheckmark } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import CartSummary from "../components/cart/CartSummary";
import CartItem from "../components/cart/CartItem";

const Cart = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto sm:px-8 px-4 flex justify-between gap-4 pb-12 bg-[#F1F2F4]">
      {/* product */}
      <div className="flex-[2]">
        {/* header */}
        <div className="px-4 py-3 text-lg font-medium tracking-wide bg-white border-b shadow-2xl">
          My Cart
        </div>
        {/*  cart item*/}
        <div className="flex flex-col gap-2 ">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
      {/* cart summary */}
      <CartSummary />
    </div>
  );
};

export default Cart;
