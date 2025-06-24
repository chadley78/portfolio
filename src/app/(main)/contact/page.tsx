export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF2E8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[8.7rem] font-black text-[#242424] uppercase tracking-tight leading-none text-center mb-8 sm:mb-12 lg:mb-16">
          Contact Me
        </h1>
        <div className="flex flex-col items-center gap-8 text-center">
          <a
            href="https://linkedin.com/in/darragh-flood"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xl sm:text-2xl md:text-3xl font-bold text-[#0A66C2] underline hover:text-[#004182] transition-colors mb-4"
          >
            Connect on LinkedIn
          </a>
          <div className="text-lg sm:text-xl md:text-2xl text-[#242424] font-medium">
            <div className="mb-2">
              <span className="font-bold">Email:</span> <a href="mailto:darragh.flood@gmail.com" className="underline hover:text-[#0A66C2]">darragh.flood@gmail.com</a>
            </div>
            <div>
              <span className="font-bold">Phone:</span> <a href="tel:+353857174849" className="underline hover:text-[#0A66C2]">+353 857174849</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 