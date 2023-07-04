import Link from "next/link";

function HomeButton() {
  return (
    <Link href="/">
      <button className="homeButton text-gray-700 text-2xl bg-[#F7AB0A] rounded-lg p-3 space-x-4 my-10 z-20">
        Back to home
      </button>
    </Link>
  );
}

export default HomeButton;
