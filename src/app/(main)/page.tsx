import ProjectCard from "@/components/ProjectCard";
import { createClient } from "@/lib/supabase/server";
import { Project } from "@/types";

export default async function HomePage() {
  const supabase = await createClient();
  const { data, error } = await supabase.from('projects').select('*');

  const projects = data as Project[] || [];

  if (error) {
    console.error("Error fetching projects:", error);
    return <p>Could not fetch projects.</p>
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">My Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
} 