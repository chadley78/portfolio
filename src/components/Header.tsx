import Link from 'next/link';

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  return (
    <header className={`py-6 px-4 sm:px-6 lg:px-8 ${transparent ? 'bg-transparent' : 'bg-[#009688]'}`}>
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-black text-2xl sm:text-3xl md:text-4xl text-[#242424] hover:opacity-80 transition-opacity uppercase tracking-tight">
          Darragh
        </Link>
        <div className="flex gap-6 sm:gap-8">
          <Link href="/" className="text-[#242424] hover:opacity-80 transition-opacity font-bold text-lg sm:text-xl md:text-2xl">
            Home
          </Link>
          <Link href="/contact" className="text-[#242424] hover:opacity-80 transition-opacity font-bold text-lg sm:text-xl md:text-2xl">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
} 