import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <p>HOME PAGE</p>
      <button
        onClick={() => {
          router.push("/product");
        }}
      >
        go to PRODUCTS
      </button>
    </div>
  );
}
