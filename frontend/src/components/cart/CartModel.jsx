import React, { useState } from "react";
import { RiCloseLine, RiDeleteBinLine, RiCoupon3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const CartModel = ({ item, onClose }) => {
  const image = item?.images?.[0]
    ? `${import.meta.env.VITE_BACKEND_URL}/${item.images[0]}`
    : "";
  const [openPromo, setOpenPromo] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 z-50 flex justify-end"
    >
      {/* sidebar */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:w-[450px] h-screen bg-white flex flex-col animate-slideLeft"
      >
        {/* top */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-black/10">
          <h2 className="text-3xl font-semibold">Cart (1 item)</h2>

          <button
            onClick={onClose}
            className="text-4xl hover:rotate-90 transition-all duration-300"
          >
            <RiCloseLine />
          </button>
        </div>

        {/* cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {/* item */}
          <div className="flex gap-4 border-b border-black/10 pb-6">
            {/* image */}
            <div
              onClick={() => navigate(`/product-page/${item._id}`)}
              className="w-28 h-36 bg-gray-100 shrink-0"
            > 
              <img
                src={image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* details */}
            <div className="flex flex-col flex-1 gap-3">
              {/* title */}
              <div className="flex justify-between gap-4">
                <h3 
                onClick={()=>navigate(`/product-page/${item._id}`)}
                 className="text-xl font-medium leading-tight  hover:text-gray-600">
                  {item.name}
                </h3>

                <button className="text-2xl text-gray-500 hover:text-red-500 transition-all">
                  <RiDeleteBinLine />
                </button>
              </div>

              {/* price */}
              <p className="text-xl font-bold">
                ₹{Number(item.price).toFixed(2)}
              </p>

              <div className="flex justify-between items-center">
                {/* qty */}
                <div className="flex items-center border border-black/20 w-fit">
                  <button className="px-2 py-1 text-2xl hover:bg-gray-100">
                    -
                  </button>

                  <span className="px-2 py-1 border-x border-black/20 text-lg font-medium">
                    1
                  </span>

                  <button className="px-2 py-1 text-2xl hover:bg-gray-100">
                    +
                  </button>
                </div>

                {/* subtotal */}
                <p className="text-lg text-gray-600">
                  Subtotal: ₹{Number(item.price).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          {/* promo code */}
          <div className=" ">
            {/* top button */}
            <button
              onClick={() => setOpenPromo((prev) => !prev)}
              className={`flex items-center gap-3  font-semibold text-xl text-gray-500 hover:text-red-500`}
            >
              <RiCoupon3Line className="text-2xl" />
              <span>Enter a promo code</span>
            </button>

            {/* input */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openPromo ? "max-h-40 opacity-100 mt-5" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="e.g. SAVE50"
                  className="flex-1 border border-black/20 px-4 py-3 outline-none text-lg"
                />

                <button className="bg-black text-white px-6 py-3 font-semibold hover:bg-black/90 transition-all">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="border-t border-black/10 px-6 py-5 space-y-5">
          {/* total */}
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold">Estimated total</h3>

            <p className="text-3xl font-bold">
              ₹{Number(item.price).toFixed(2)}
            </p>
          </div>

          <p className="text-gray-500 text-sm">
            Taxes and shipping are calculated at checkout.
          </p>

          {/* buttons */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => navigate("/checkout")}
              className="bg-black text-white py-2 text-lg font-semibold hover:bg-red-500 transition-all hover:underline"
            >
              Checkout
            </button>

            <button
              onClick={() => navigate("/cart")}
              className="border border-red-500 text-red-500 py-2 text-lg font-semibold hover:bg-red-50 transition-all"
            >
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModel;
