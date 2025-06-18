import ProjectCard from "@/components/ProjectCard";
import { createClient } from "@/lib/supabase/server";
import { Project } from "@/types";

export default async function HomePage() {
  const supabase = await createClient();
  const { data, error } = await supabase.from('projects').select('*');

  const projects = data as Project[] || [];

  if (error) {
    console.error("Error fetching projects:", error);
    return <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#242424]">Could not fetch projects.</p>
  }

  return (
    <div className="min-h-screen bg-[#FAF2E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[8.7rem] font-black text-[#242424] uppercase tracking-tight leading-none mb-8 sm:mb-12 lg:mb-16">
          My Work
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
} 