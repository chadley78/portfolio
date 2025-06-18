import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import CategoryPill from './CategoryPill';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="border border-[#242424]/20 rounded-lg overflow-hidden block hover:shadow-lg transition-shadow bg-white">
      <div className="relative h-64">
        <Image
          src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Figure.png"
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-black text-2xl sm:text-3xl text-[#242424] uppercase tracking-tight leading-tight mb-4">
          {project.title}
        </h3>
        {project.categories && (
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category, index) => (
              <CategoryPill key={index} category={category} />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
} 