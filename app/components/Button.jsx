import React from "react";

const Button = ({ label }) => {
  return (
    <button
      type="submit"
      className="cursor-pointer w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-bold text-white bg-[#059669] hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 ease-in-out"
    >
      {label}
    </button>
  );
};

export default Button;
