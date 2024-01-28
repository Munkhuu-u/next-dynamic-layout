import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h2>HOME PAGE</h2>
      <button
        onClick={() => {
          router.push(`/product`);
        }}
      >
        goto PRODUCT
      </button>
    </div>
  );
}
