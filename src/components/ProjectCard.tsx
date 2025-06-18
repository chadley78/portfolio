import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="border rounded-lg overflow-hidden block">
      {project.thumbnail_url && (
        <Image
          src={project.thumbnail_url}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="font-bold text-xl">{project.title}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>
      </div>
    </Link>
  );
} 