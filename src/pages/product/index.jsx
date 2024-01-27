import React from "react";
import { Router, useRouter } from "next/router";
export default function Index() {
  const router = useRouter();
  return (
    <div>
      <div>
        <p>Product page</p>
      </div>
      <div className="flex justify-around">
        <button onClick={() => router.push(`/prod/1`)}>ONE</button>
        <button>TWO</button>
        <button>THREE</button>
      </div>
    </div>
  );
}
