import { createClient, createStaticClient } from "@/lib/supabase/server";
import { Project } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import CategoryPill from "@/components/CategoryPill";

type Props = {
  params: Promise<{ slug: string }>;
};

// This function tells Next.js which pages to pre-render at build time
export async function generateStaticParams() {
  const supabase = createStaticClient();
  const { data: projects } = await supabase.from('projects').select('slug');
  return projects?.map(({ slug }) => ({ slug })) || [];
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single();

  const project = data as Project;

  if (!project) {
    notFound();
  }

  // For now, using hardcoded data as specified in the prompt
  const projectData = {
    title: "Cotopaxi",
    categories: ["Leadership", "Strategy"],
    heroImage: "https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Figure.png",
    subtitle: "Marketing Mix Modeling Unlocks 20%+ New Business Growth",
    summary: "MMM & incrementality testing enabled Cotopaxi to reallocate budgets & invest in more incremental channels.",
    description: "Cotopaxi, a leading outdoor apparel brand, needed a way to maximize their marketing budget while continuing to drive new customer acquisition. The brand faced a series of headwinds, including channel fragmentation, last-click attribution accuracy, and true incrementality of Brand Search efforts."
  };

  return (
    <div className="min-h-screen bg-[#FAF2E8]">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[8.7rem] font-black text-[#242424] uppercase tracking-tight leading-none mb-4 sm:mb-6">
            {projectData.title}
          </h1>
          
          {/* Categories/Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12">
            {projectData.categories.map((category, index) => (
              <CategoryPill key={index} category={category} />
            ))}
          </div>

          {/* Hero Image */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <Image
              src={projectData.heroImage}
              alt={projectData.title}
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.9rem] font-bold text-[#242424] mb-4 sm:mb-6 lg:mb-8 leading-tight">
            {projectData.subtitle}
          </h2>
          
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[1.4rem] xl:text-[1.9rem] font-bold text-[#242424] mb-4 sm:mb-6 leading-tight">
            {projectData.summary}
          </h3>
          
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed">
            {projectData.description}
          </p>
        </div>
      </article>
    </div>
  );
} 