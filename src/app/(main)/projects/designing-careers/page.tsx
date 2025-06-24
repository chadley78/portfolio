"use client";

import Image from "next/image";
import CategoryPill from "@/components/CategoryPill";

export default function DesigningCareersProjectPage() {
  const projectData = {
    title: "Designing Careers",
    categories: ["Design Leadership", "Career Development", "Team Building", "Process Design"],
    heroVideo: "", // Will be added later
    subtitle: "Building a Better Growth Path at Udemy",
    description: "Every designer wants to grow, but only if they believe the path ahead is real, relevant, and achievable. At Udemy, our team had inherited a career framework known as RASKL, an acronym for Results, Autonomy, Scope, Knowledge, and Leadership. While conceptually solid, it didn't speak to the day-to-day work of product designers. It felt abstract, overly general, and worse, disconnected from the actual craft and nuance of design.",
    content: [
      {
        title: "The Spark: A Framework That Fell Flat",
        text: "I started hearing quiet frustrations: 'I don't see myself in this,' 'What does 'scope' mean for design?' and 'How do I know if I'm ready for the next level?' That was my signal to act."
      },
      {
        title: "The Opportunity: Bring Clarity Where There Was Ambiguity",
        text: "Rather than accept the disconnect, I saw an opportunity to craft something better, something designed by and for designers. I took the initiative to lead the creation of a function-specific design career ladder, one grounded in the language, process, and values of our discipline. The goal wasn't to replace RASKL entirely, but to reinterpret it through a designer's lens and turn it into a tool for reflection, growth, and motivation."
      },
      {
        title: "The Process: Collaborative, Iterative, Human",
        text: "I began with listening, interviewing designers across levels to understand where the current framework fell short and what they needed to feel supported in their growth. From those insights, I synthesized a set of core principles: Speak in designer language, not HR jargon, Align progression with observable behaviors and process milestones, Create clear, non-political pathways to advancement, Build something flexible enough to adapt as the team matured. I rewrote the framework from the ground up and shared it first with the design leadership team, iterating through their feedback. Then I expanded the conversation using a Miro board and workshop, inviting everyone to poke holes, suggest edits, and help shape the final form. Finally, we piloted the new ladder with one team, testing not just the language, but its usability during calibration and career conversations. When it proved both actionable and empowering, we rolled it out across the organization."
      },
      {
        title: "The Outcome: A Career Ladder That Worked Like a Product",
        text: "The impact was immediate. Designers finally saw themselves in the framework. Managers had better tools for coaching. Calibration sessions became more grounded. And individuals had a clearer view of where they were and where they could go. Even more rewarding, the structured and participatory approach I led became a blueprint. Other teams across the company began borrowing the methodology to create function-specific ladders of their own, from product management to research to engineering. We hadn't just solved a problem. We had modeled a new way of solving it."
      },
      {
        title: "Why It Matters",
        text: "To me, this project encapsulates what great design leadership looks like—not just solving user problems, but recognizing when your own team is the user and crafting tools that empower them to grow, thrive, and contribute with clarity. It's also a reminder that design doesn't stop at the product surface. It can shape culture, influence systems, and help people find meaning in their work."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAF2E8]">
      <article className="w-full">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[8.7rem] font-black text-[#242424] uppercase tracking-tight leading-none mb-4 sm:mb-6">
            {projectData.title}
          </h1>
          
          {/* Categories/Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12">
            {projectData.categories.map((category, index) => (
              <CategoryPill key={index} category={category} />
            ))}
          </div>

          {/* Hero Video/Image Placeholder */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <Image
              src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//IC4.png"
              alt="Designing Careers Hero Image"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.9rem] font-bold text-[#242424] mb-4 sm:mb-6 lg:mb-8 leading-tight">
              {projectData.subtitle}
            </h2>
            
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed mb-8 sm:mb-12">
              {projectData.description}
            </p>
          </div>

          {/* Detailed Content Sections */}
          <div className="space-y-8 sm:space-y-12">
            {projectData.content.map((section, index) => (
              <div key={index}>
                {section.title === "The Process: Collaborative, Iterative, Human" ? (
                  <div className="max-w-4xl mx-auto">
                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#242424] mb-4 sm:mb-6 leading-tight">
                      {section.title}
                    </h4>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed mb-8">
                      {section.text}
                    </p>
                    <div className="w-full">
                      <Image
                        src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Miro.webp"
                        alt="Miro Workshop Process"
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="max-w-4xl mx-auto">
                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#242424] mb-4 sm:mb-6 leading-tight">
                      {section.title}
                    </h4>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
} 