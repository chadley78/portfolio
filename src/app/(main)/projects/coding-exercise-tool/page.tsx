"use client";

import Image from 'next/image';
import CategoryPill from '@/components/CategoryPill';

export default function CodingExerciseToolProjectPage() {
  const projectData = {
    title: "Reimagining Practice at Udemy",
    categories: ["Product Design", "UX Research", "Design Leadership", "Learning Design", "Design Process"],
    heroVideo: "", // Will be added later
    subtitle: "Becoming Developers favourite place to learn how to code",
    summary: "A Strategic Redesign to Drive Adoption, Engagement, and Learning Outcomes",
    description: "As the design leader for Udemy's Coding Exercise Tool, I guided a cross functional team through the complete transformation of one of our platform's most overlooked features. Though the tool had potential to enrich learning in development and data science, it suffered from low adoption and weak engagement, both from instructors and learners.",
    content: [
      {
        title: "The Challenge",
        text: "Udemy offers a powerful combination of video based teaching and embedded practice. But our original coding tool had not kept up with user expectations. Instructors often bypassed it for third party platforms. Learners struggled with a basic interface that did not match the complexity of what they were trying to learn. We knew we could do better, and we knew that doing so would unlock growth in one of our highest potential verticals."
      },
      {
        title: "What Success Looks Like",
        text: "With our product and engineering partners, we defined three clear goals to anchor the project:\n\n1. Increase instructor adoption by redesigning the creation flow with built in support and flexibility\n2. Enhance learner engagement through a modern, guided, and rewarding practice experience\n3. Reclaim usage lost to external tools by offering a compelling, integrated solution instructors would want to use"
      },
      {
        title: "The Process",
        text: "We approached this as a two phase design effort, learner first, then instructor facing, anchored in research, co design, and continuous feedback.\n\nWe began with a heuristic evaluation of the legacy tool and reviewed existing documentation and internal insights. Internal testing with 35 Udemy engineers revealed usability pain points and frustrations. Competitor benchmarking helped us position Udemy's opportunity in the coding education space. Instructor surveys, embedded in the platform, surfaced core issues such as tool complexity, poor learner experience, and lack of feedback mechanisms.\n\nTo generate early solutions, the team led a three day design sprint with the team. We explored the idea of providing a pool of prebuilt coding exercises. But when we tested this with real instructors, the feedback was unanimous. They wanted to build their own, tailored to their teaching goals. The real problem was not content. It was workflow, guidance, and learner experience. This insight shaped everything that followed.\n\nWe shifted focus and invited instructors into the process. Alongside our UX researcher, our lead designer ran one to one participatory sessions, capturing how instructors design exercises and surfacing their feature ideas. We used structured sessions in Miro to map their journeys, sketch the ideal learner experience, and co prioritize features.\n\nIn parallel, we brought in Udemy's learning science team to align design with proven pedagogy. They introduced the backwards design framework, ensuring exercises started from clear learning objectives. Their involvement grounded our decisions in evidence and gave the tool long term instructional credibility.\n\nCertain edge cases emerged during design reviews that required domain expertise beyond my reach. We organized co-design working sessions with engineers, allowing us to collaboratively prototype solutions for complex logic or scenarios. These sessions accelerated delivery and built empathy and buy in across the team.\n\nAt the end of each sprint, we facilitated interactive design reviews with stakeholders from product, engineering, marketing, and learning. We reviewed prototypes together, collected feedback, and made decisions collaboratively. This kept the team aligned and momentum high.\n\nWe released in phases, starting with the learner experience and then gradually rolling out the instructor tool in beta to selected courses. Throughout, we gathered data via Fullstory, in product feedback, and usability testing, improving usability and layering in moments of delight."
      },
      {
        title: "The Solution",
        text: "The redesigned tool delivered on both functionality and experience.\n\nFor learners:\n• A modern, IDE style interface with adjustable panels\n• Step by step test cases, real time feedback, hints, and solution explanations\n• A polished experience that matched the sophistication of real world coding\n\nFor instructors:\n• A flexible, structured authoring flow rooted in learning design best practices\n• AI assisted code generation to accelerate setup\n• Integrated preview tools and validation checks to boost confidence and quality"
      },
      {
        title: "The Impact",
        text: "By keeping our original goals in focus and listening closely to users at every stage, we delivered meaningful, measurable impact:\n\n• 300% increase in courses using coding exercises\n• 200% increase in total coding exercises created\n• Over 80 percent CSAT for both learners and instructors\n• Instructors who had previously avoided the tool became vocal advocates, citing simplicity, effectiveness and almost all of the off platform tools they had used gradually became redundant.\n• Learners described the tool as motivating, confidence building, and key to understanding course material\n\nWe did not just improve a feature. We reignited its purpose."
      }
    ]
  };

  // Function to render formatted content with bullet points and line breaks
  const renderFormattedContent = (text: string, sectionTitle?: string) => {
    const paragraphs = text.split('\n\n');
    
    // Special handling for Solution section
    if (sectionTitle === "The Solution") {
      const introText = paragraphs[0];
      const learnersSection = paragraphs.find(p => p.startsWith('For learners:'));
      const instructorsSection = paragraphs.find(p => p.startsWith('For instructors:'));
      
      return (
        <div className="space-y-6">
          {/* Intro text */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed">
            {introText}
          </p>
          
          {/* Side by side sections on larger screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* For Learners */}
            <div className="bg-white/50 p-6 rounded-lg">
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[1.1rem] xl:text-[1.3rem] font-bold text-[#242424] mb-4">
                For learners:
              </h5>
              <div className="space-y-3">
                {learnersSection?.split('\n').filter(line => line.startsWith('•')).map((line, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 text-lg">💻</span>
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed">
                      {line.substring(1).trim()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* For Instructors */}
            <div className="bg-white/50 p-6 rounded-lg">
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[1.1rem] xl:text-[1.3rem] font-bold text-[#242424] mb-4">
                For instructors:
              </h5>
              <div className="space-y-3">
                {instructorsSection?.split('\n').filter(line => line.startsWith('•')).map((line, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1 text-lg">🎯</span>
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed">
                      {line.substring(1).trim()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => {
          if (paragraph.includes('•') || paragraph.match(/\d+\./)) {
            // Handle bullet points and numbered lists
            const lines = paragraph.split('\n');
            return (
              <div key={index} className="space-y-3">
                {lines.map((line, lineIndex) => {
                  if (line.startsWith('•')) {
                    return (
                      <div key={lineIndex} className="flex items-start">
                        <span className="text-[#CCE561] mr-3 mt-1 text-lg">✓</span>
                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed">
                          {line.substring(1).trim()}
                        </span>
                      </div>
                    );
                  } else if (line.match(/^\d+\./)) {
                    // Handle numbered lists
                    return (
                      <div key={lineIndex} className="flex items-start">
                        <span className="text-[#242424] mr-3 mt-1 font-bold text-lg">
                          {line.match(/^\d+\./)?.[0]}
                        </span>
                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed">
                          {line.replace(/^\d+\.\s*/, '')}
                        </span>
                      </div>
                    );
                  } else {
                    return (
                      <p key={lineIndex} className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed">
                        {line}
                      </p>
                    );
                  }
                })}
              </div>
            );
          } else {
            return (
              <div key={index}>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed">
                  {paragraph}
                </p>
                {/* Add workshop image after 3rd paragraph in Process section */}
                {sectionTitle === "The Process" && index === 2 && (
                  <div className="mt-8 mb-8">
                    <Image
                      src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//workshop.png"
                      alt="Workshop session during the design process"
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )}
              </div>
            );
          }
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF2E8]">
      <article className="w-full">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[8.7rem] font-black text-[#242424] uppercase tracking-tight leading-none mb-4 sm:mb-6">
            {projectData.title}
          </h1>
          
          {/* Categories/Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12">
            {projectData.categories.map((category, index) => (
              <CategoryPill key={index} category={category} />
            ))}
          </div>

          {/* Hero Video/Image Placeholder */}
          <div className="mb-8 sm:mb-12 lg:mb-16 relative">
            <iframe
              src="https://www.youtube.com/embed/Sj9fkCGoWVs?autoplay=1&mute=1&loop=1&playlist=Sj9fkCGoWVs"
              title="Coding Exercise Tool Demo"
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.9rem] font-bold text-[#242424] mb-4 sm:mb-6 lg:mb-8 leading-tight">
              {projectData.subtitle}
            </h2>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[1.4rem] xl:text-[1.9rem] font-bold text-[#242424] mb-4 sm:mb-6 leading-tight">
              {projectData.summary}
            </h3>
            
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed mb-8 sm:mb-12">
              {projectData.description}
            </p>
          </div>

          {/* Detailed Content Sections */}
          <div className="space-y-8 sm:space-y-12">
            {projectData.content.map((section, index) => (
              <div key={index}>
                {section.title === "The Impact" ? (
                  <div className="max-w-4xl mx-auto">
                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#242424] mb-4 sm:mb-6 leading-tight">
                      {section.title}
                    </h4>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed mb-8">
                      {renderFormattedContent(section.text)}
                    </div>
                    <div className="mt-12">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[1.4rem] xl:text-[1.9rem] font-bold text-[#242424] mb-6">
                        Udemy is the Number 1 online source to learn how to code according to Stackoverflow
                      </h3>
                      <div className="w-full">
                        <Image
                          src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//stack.png"
                          alt="Stack Overflow ranking showing Udemy as #1 for learning to code"
                          width={1200}
                          height={800}
                          className="w-full h-auto rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="max-w-4xl mx-auto">
                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#242424] mb-4 sm:mb-6 leading-tight">
                      {section.title}
                    </h4>
                    {/* Add new IDE image for Solution section */}
                    {section.title === "The Solution" && (
                      <div className="mb-8">
                        <Image
                          src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//newide.png"
                          alt="New IDE interface for the coding exercise tool"
                          width={1200}
                          height={800}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    )}
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed">
                      {renderFormattedContent(section.text, section.title)}
                    </div>
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