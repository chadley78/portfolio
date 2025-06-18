import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-4 px-8 border-b">
      <nav className="flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">My Portfolio</Link>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
} 