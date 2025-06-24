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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const projects = [
    { 
      title: "Udemy Business", 
      slug: "udemy-business",
      subtitle: "How User-Centered Design Scaled a B2B Learning Platform from $5M to $500M",
      thumbnail_url: "https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Hand%20and%20iPhone%2016%20Pro.png"
    },
    { 
      title: "AI Roleplay", 
      slug: "ai-roleplay",
      subtitle: "Revolutionizing Learning Through AI-Powered Roleplay Experiences",
      thumbnail_url: "https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//voice%20play.png"
    },
    { 
      title: "Designing Careers", 
      slug: "designing-careers",
      subtitle: "Building a Better Growth Path at Udemy",
      thumbnail_url: "https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//team.jpg"
    },
    { 
      title: "Reimagining Practice at Udemy", 
      slug: "coding-exercise-tool",
      subtitle: "Becoming Developers favourite place to learn how to code",
      thumbnail_url: "https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//IDE.png"
    }
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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 sm:gap-8 items-center">
          {/* My Work Mega Menu */}
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
            
            {/* Mega Menu */}
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-[#FAF2E8] rounded-lg shadow-xl border border-gray-200 z-50 p-6"
              >
                <div className="grid grid-cols-2 gap-6">
                  {projects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      onClick={() => setIsDropdownOpen(false)}
                      className="group block hover:bg-white/50 rounded-lg p-4 transition-all duration-200"
                    >
                      <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={project.thumbnail_url}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <h3 className="font-bold text-lg text-[#242424] mb-2 group-hover:text-[#009688] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#242424]/70 leading-relaxed">
                        {project.subtitle}
                      </p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
          
          <Link href="/about" className={`${textColor} hover:opacity-80 transition-opacity font-bold text-lg sm:text-xl md:text-2xl`}>
            About Me
          </Link>
          
          <Link href="/contact" className={`${textColor} hover:opacity-80 transition-opacity font-bold text-lg sm:text-xl md:text-2xl`}>
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden mt-6 bg-[#FAF2E8] rounded-lg shadow-lg border border-gray-200 overflow-hidden"
        >
          <div className="p-6 space-y-6">
            {/* My Work Section */}
            <div>
              <h3 className="font-bold text-xl text-[#242424] mb-4">My Work</h3>
              <div className="space-y-4">
                {projects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block group"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="w-20 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={project.thumbnail_url}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#242424] group-hover:text-[#009688] transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-sm text-[#242424]/70 mt-1">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Contact Link */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-bold text-lg text-[#242424] hover:text-[#009688] transition-colors mb-4"
              >
                About Me
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-bold text-lg text-[#242424] hover:text-[#009688] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      )}
      
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