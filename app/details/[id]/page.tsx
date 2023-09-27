"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../../components/Card";

import { RootState } from "../../../redux/store";
import {
  fetchProductStart,
  fetchProductSuccess,
  fetchProductFailure,
} from "../../../redux/productSlice";
import { usePathname, useRouter } from "next/navigation";

const Page: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname().split("/");
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.product.product);
  const loading = useSelector((state: RootState) => state.product.loading);
  const error = useSelector((state: RootState) => state.product.error);

  useEffect(() => {
    if (typeof pathname !== "undefined" || pathname !== null) {
      dispatch(fetchProductStart());

      fetch(`/codemap/${pathname[2]}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch(fetchProductSuccess(data[0]));
        })
        .catch((error) => {
          dispatch(fetchProductFailure(error));
        });
    } else {
      router.push("/");
    }
  }, [dispatch]);

  return (
    <div className="flex flex-wrap h-screen md:hidden">
      {loading ? (
        <div className="p-4 w-full bg-white md:hidden">
          <div className="h-full  overflow-hidden justify-center">
            <div className="p-4 md:p-6">
              <p className="text-white font-bold bg-gray-600 text-xl p-4 rounded-md">
                Product is Loading......
              </p>
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
            </div>
          </div>
        </div>
      ) : error ? (
        <div className="p-4 w-full bg-white md:hidden">
          <div className="h-full  overflow-hidden justify-center">
            <div className="p-4 md:p-6">
              <p className="text-white bg-red-400 text-xl p-4 rounded-md">
                Error: {error.message}
              </p>
            </div>
          </div>
        </div>
      ) : product ? (
        !product.product ? (
          <>
            <div className="p-4 md:w-1/2 lg:w-1/3 bg-white md:hidden">
              <div className="h-full  overflow-hidden justify-center">
                <div className="p-4 md:p-6">
                  <p className="text-white bg-red-400 text-xl p-4 rounded-md">
                    Error: "There is no any Item to Display."
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <ProductCard product={product.product} />
        )
      ) : (
        <>
          <div className="p-4 md:w-1/2 lg:w-1/3 bg-white md:hidden">
            <div className="h-full  overflow-hidden justify-center">
              <div className="p-4 md:p-6">
                <p className="text-white bg-red-400 text-xl p-4 rounded-md">
                  No product data available."
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
