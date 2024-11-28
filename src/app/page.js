import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <h1>Welcome Recipes</h1>
      <Link href={"/recipes-list"}>Explore </Link>
    </div>
  );
}
