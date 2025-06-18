import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import CategoryPill from './CategoryPill';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="border border-[#242424]/20 rounded-lg overflow-hidden block hover:shadow-lg transition-shadow bg-white">
      {project.thumbnail_url && (
        <Image
          src={project.thumbnail_url}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-48 sm:h-56 lg:h-64 object-cover"
        />
      )}
      <div className="p-6 sm:p-8">
        <h3 className="font-black text-2xl sm:text-3xl md:text-4xl text-[#242424] uppercase tracking-tight leading-tight mb-4">
          {project.title}
        </h3>
        <p className="text-lg sm:text-xl md:text-2xl text-[#242424]/80 font-normal leading-relaxed mb-4">
          {project.description}
        </p>
        {project.categories && (
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.categories.map((category, index) => (
              <CategoryPill key={index} category={category} />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
} 