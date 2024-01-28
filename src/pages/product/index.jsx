import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();

  return (
    <div>
      <h2>PRODUCT PAGE</h2>
      <button
        onClick={() => {
          router.push(`/`);
        }}
      >
        goto HOME
      </button>
      <p></p>
      <button
        onClick={() => {
          router.push(`/product/1`);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          router.push(`/product/2`);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          router.push(`/product/3`);
        }}
      >
        3
      </button>
    </div>
  );
}
