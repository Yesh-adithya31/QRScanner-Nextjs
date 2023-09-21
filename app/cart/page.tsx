"use client";
import React from "react";
import { useSelector } from "react-redux";
import CartPage from "../components/CartPage";
import { RootState } from "../../redux/store";

const Page: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <>
      <div className="flex flex-wrap h-screen md:hidden">
        <CartPage cartItems={cartItems} />
      </div>
      {/* DESKTOP VIEW */}
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="hidden md:block text-center md:w-1/2 lg:w-1/3">
          <p className="text-gray-600 text-xl mb-4">
            This is a mobile view application only. It doesn't support web view.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
