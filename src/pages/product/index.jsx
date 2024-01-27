import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function Index() {
  const router = useRouter();
  return (
    <div>
      <p>YOU ARE IN PRODUCT PAGE</p>
      <button
        onClick={() => {
          router.push("/product/1");
        }}
      >
        option 1
      </button>
    </div>
  );
}
