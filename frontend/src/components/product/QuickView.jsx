import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const QuickView = ({ item, onClose }) => {
  const images =
    item?.images?.map((img) => `${import.meta.env.VITE_BACKEND_URL}/${img}`) ||
    [];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const navigate = useNavigate();
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center"
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-4xl h-screen flex flex-col lg:flex-row relative overflow-hidden"
      >
        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-3xl z-20 hover:rotate-90 transition-all duration-300"
        >
          <RiCloseLine />
        </button>

        {/* images */}
        <div className="flex-1 flex flex-col justify-start items-center px-6  bg-[#F7F7F7] ">
          {/* main image */}
          <div className="w-full max-w-xl h-[500px] overflow-hidden">
            <img
              src={selectedImage}
              alt={item.name}
              className="w-full h-full object-contain transition-all duration-500"
            />
          </div>

          {/* dots */}
          <div className="flex justify-center items-center gap-3 my-4 ">
            {images.map((img, index) => (
              <button
              key={index}
                onClick={() => setSelectedImage(img)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  selectedImage === img ? "bg-black scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* content */}
        <div className="flex-1 flex flex-col justify-start  mx-8 pt-8">
          {/* title */}
          <h2 className="text-3xl font-medium leading-tight ">{item.name}</h2>

          {/* price */}
          <p className="text-xl mt-6 font-medium">
            ₹{Number(item.price).toFixed(2)}
          </p>

          {/* qty */}
          <div className="mt-10">
            <p className="text-base mb-4">Quantity *</p>

            <div className="flex items-center border border-black/20 w-fit">
              <button className="px-5 py-1 text-3xl hover:bg-gray-100 transition-all">
                -
              </button>

              <span className="px-8 py-1 border-x border-black/20 text-xl">
                1
              </span>

              <button className="px-5 py-1 text-3xl hover:bg-gray-100 transition-all">
                +
              </button>
            </div>
          </div>

          {/* add to cart */}
          <button className="mt-10 bg-red-600 hover:bg-red-700 transition-all duration-300 text-white py-2  text-xl font-medium">
            Add to Cart
          </button>

          {/* details */}
          <button
            onClick={() => navigate(`/product-page/${item._id}`)}
            className="mt-4 text-left underline text-base hover:text-gray-600 transition-all"
          >
            View More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
