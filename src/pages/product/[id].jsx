import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Todo() {
  const [todo, setTodo] = useState();
  const router = useRouter();
  const { id } = router.query;
  const getData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await res.json();
    setTodo(data);
  };

  useEffect(() => {
    if (id) getData();
  });

  if (!id) return <div>...Loading...</div>;

  return (
    <div>
      <h2>TODO PAGE</h2>
      <p>{`Title: ${todo?.title}`}</p>
      <button
        onClick={() => {
          router.push(`/product`);
        }}
      >
        goto Product
      </button>
    </div>
  );
}
