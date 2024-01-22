
import CartCounter from "@/app/shopping-cart/components/CartCounter";
import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Counter page",
  description: "Counter page",
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={0}/>
    </div>
  );
}