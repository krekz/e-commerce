import React from "react";

const Form = ({onChange, value}) => {
  return (
    <form
      action=""
      className="flex items-center justify-center flex-wrap mt-4 gap-2"
    >
      <input
        onChange={onChange}
        value={value}
        type="text"
        placeholder="Search products to buy..."
        className="px-4 w-[30rem] py-2 rounded-md border  border-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
      />
      
    </form>
  );
};

export default Form;
