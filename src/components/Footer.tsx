export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-[#242424]/20 mt-12 text-center">
      <div className="max-w-7xl mx-auto">
        <p className="text-base sm:text-lg md:text-xl text-[#242424]/70 font-bold">
          &copy; {new Date().getFullYear()} Darragh Flood. All rights reserved. Built with cursor, vercel and supabase. With help from AI 🤖.
        </p>
      </div>
    </footer>
  );
} 