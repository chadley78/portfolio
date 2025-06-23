import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const pathname = usePathname();
  const isHomepage = pathname === '/';
  const textColor = isHomepage ? 'text-[#FAF2E8]' : 'text-[#242424]';
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const projects = [
    { title: "AI Roleplay", slug: "ai-roleplay" },
    { title: "Udemy Business", slug: "udemy-business" },
    { title: "Designing Careers", slug: "designing-careers" },
    { title: "Reimagining Practice at Udemy", slug: "coding-exercise-tool" }
  ];

  return (
    <header className={`py-6 px-4 sm:px-6 lg:px-8 ${transparent ? 'bg-transparent' : 'bg-[#009688]'}`}>
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <motion.div
            initial={{ opacity: 0, x: -200, rotate: -720 }}
            animate={{ 
              opacity: [0, 1, 1, 1],
              x: [-200, 0, -10, 0],
              rotate: [-720, 0, -15, 0]
            }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
              times: [0, 0.6, 0.8, 1]
            }}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative rounded-full overflow-hidden"
          >
            <Image
              src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//facelogo.png"
              alt="Darragh Logo"
              fill
              className="object-contain"
            />
          </motion.div>
          <span className={`font-black text-2xl sm:text-3xl md:text-4xl ${textColor} uppercase tracking-tight`}>
            Darragh
          </span>
        </Link>
        <div className="flex gap-6 sm:gap-8 items-center">
          {/* My Work Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`${textColor} hover:opacity-80 transition-opacity font-bold text-lg sm:text-xl md:text-2xl flex items-center gap-1`}
            >
              My Work
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
              >
                <div className="py-2">
                  {projects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-3 text-[#242424] hover:bg-gray-50 transition-colors duration-200 text-left"
                    >
                      <div className="font-semibold text-sm sm:text-base">{project.title}</div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
          
          <Link href="/contact" className={`${textColor} hover:opacity-80 transition-opacity font-bold text-lg sm:text-xl md:text-2xl`}>
            Contact
          </Link>
        </div>
      </nav>
      
      {/* Mobile Dropdown Overlay */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </header>
  );
} 