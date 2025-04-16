import Link from "next/link";

export default function ExploreButton({prop}) {
  return (
    <Link href={`/service/${prop}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded uppercase">
      explore
    </Link>
  );
}
