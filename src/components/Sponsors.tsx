"use client";

const logos = [
  { src: "/logo-1.svg", alt: "Sponsor 1" },
  { src: "/logo-2.svg", alt: "Sponsor 2" },
  { src: "/logo-3.svg", alt: "Sponsor 3" },
  { src: "/logo-4.svg", alt: "Sponsor 4" },
  { src: "/logo-5.svg", alt: "Sponsor 5" },
];

export default function Sponsors() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-sm font-semibold text-foreground/60 mb-8">
          Trusted by leading wellness organizations
        </h3>
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  );
}