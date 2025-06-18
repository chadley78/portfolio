interface CategoryPillProps {
  category: string;
  className?: string;
}

export default function CategoryPill({ category, className = "" }: CategoryPillProps) {
  return (
    <span
      className={`px-3 sm:px-4 lg:px-6 py-1 sm:py-2 border border-[#242424] rounded-full text-base sm:text-lg md:text-xl lg:text-[0.7rem] xl:text-[0.8rem] font-normal text-[#242424] bg-transparent ${className}`}
    >
      {category}
    </span>
  );
} 