import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-10 p-[clamp(16px,2vw,40px)] bg-[#fffebd]">
      <nav className="max-w-[85%] mx-auto">
        <ul className="flex flex-row justify-center gap-[12px_clamp(8px,2vw,56px)]">
          <li className="flex-1">
            <Link href="/" className="flex flex-col">
              <span className="text-[clamp(1rem,3vw,1.5rem)] font-bold text-center leading-4">Map</span>
              <span className="text-[clamp(0.75rem,3vw,0.875rem)] text-center">マップ</span>
            </Link>
          </li>
          <li className="flex-1">
            <Link href="/add" className="flex flex-col">
              <span className="text-[clamp(1rem,3vw,1.5rem)] font-bold text-center leading-4">Registration</span>
              <span className="text-[clamp(0.75rem,3vw,0.875rem)] text-center">登録画面</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
