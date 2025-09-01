import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full  bg-[#299791]">
        {/* Logo */}
        <div className="container mx-auto px-4 h-full flex items-center cursor-pointer">
          <Link href={"/"}>
            <Image
              src="/Image/Logo.png"
              alt="Logo Yusro Bagian 1"
              width={178}
              height={121}
              className="h-20 w-auto"
              priority
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
