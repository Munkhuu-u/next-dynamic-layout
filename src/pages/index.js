import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <div>
      HOME page
      <button onClick={() => router.push(`/prod`)}>{"-> prod page"}</button>
    </div>
  );
}
