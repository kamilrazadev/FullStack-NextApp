import React from "react";
import AddToCardBtn from "./AddToCardBtn";

const ProductCard = () => {
  return (
    <div className="w-fit p-2 border border-black bg-slate-200 rounded text-center">
      <h2 className="text-xl">ProductCard</h2>
      <AddToCardBtn />
    </div>
  );
};

export default ProductCard;
