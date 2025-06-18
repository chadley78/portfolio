import { createClient, createStaticClient } from "@/lib/supabase/server";
import { Project } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

// This function tells Next.js which pages to pre-render at build time
export async function generateStaticParams() {
  const supabase = createStaticClient();
  const { data: projects } = await supabase.from('projects').select('slug');
  return projects?.map(({ slug }) => ({ slug })) || [];
}

export default async function ProjectDetailPage({ params }: Props) {
  const supabase = await createClient();
  const { data } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', params.slug)
    .single();

  const project = data as Project;

  if (!project) {
    notFound();
  }

  return (
    <article>
      <h1 className="text-5xl font-extrabold mb-4">{project.title}</h1>
      {project.thumbnail_url && (
        <Image
          src={project.thumbnail_url}
          alt={project.title}
          width={800}
          height={600}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
      )}
      <div className="prose lg:prose-xl max-w-none">
        {/* For now, we just display the content. A markdown parser would go here. */}
        <p>{project.content}</p>
      </div>
    </article>
  );
} 