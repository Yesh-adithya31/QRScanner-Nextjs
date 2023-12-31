"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import QRScannerV1 from "./components/QRScannerV1";

const Page: React.FC = () => {
  const router = useRouter();
  const handleScan = (data: string) => {
    if (data) {
      router.push(`/details/${data}`);
    } else {
      router.push("/");
    }
  };
  return (
    <>
      <div className="flex flex-wrap h-screen md:hidden">
        <QRScannerV1 onScan={handleScan} />
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
