import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full  bg-[#299791]">
        {/* Logo */}
        <div className="container mx-auto px-4 h-full flex items-center">
          <Image
            src="/Image/Logo.png"
            alt="Logo Yusro Bagian 1"
            width={178}
            height={121}
            className="h-20 w-auto"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;