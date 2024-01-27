import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function OptionPage() {
  const router = useRouter();
  const { id } = router.query;
  const [todo, setTodo] = useState();

  useEffect(() => {
    console.log("useEffect ajillaj biana");
    const getData = async () => {
      console.log("getdata ajillaj biana");
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const data = await res.json();
      console.log(data);
      setTodo(data);
    };
    if (id) {
      getData;
    }
  }, [id]);

  if (!id) return <div>...Loading...</div>;

  return (
    <div>
      <button
        onClick={() => {
          router.push("./product");
        }}
      >
        go to Product page
      </button>
      <p>Title: {`${todo}`}</p>
    </div>
  );
}
