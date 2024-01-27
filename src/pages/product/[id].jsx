import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function OptionPage() {
  console.log("OptionPage ajilllaj baina");
  const router = useRouter();
  const [optPage, setOptPage] = useState();
  const { id } = router.query;

  console.log(id);

  useEffect(() => {
    console.log("useEffect ajilllaj baina");
    const getData = async () => {
      console.log("getData ajilllaj baina");
      console.log({ id });
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      console.log(res);
      const data = await res.json();
      console.log(data);
      setOptPage(data);
    };
    if (id) {
      getData();
    }
  }, [id]);

  if (!id) return <div>...Loading...</div>;

  return (
    <div>
      <h1>{optPage?.title}</h1>
    </div>
  );
}
