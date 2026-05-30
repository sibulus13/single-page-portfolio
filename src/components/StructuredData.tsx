const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michael Huang",
  url: "https://www.michaelhuang.ca",
  jobTitle: "AI-Native Full-Stack Engineer",
  description:
    "AI-native full-stack engineer and consultant building production systems that scale 5× faster with agentic AI workflows.",
  worksFor: [
    {
      "@type": "Organization",
      name: "Traction Complete",
    },
    {
      "@type": "Organization",
      name: "SI8 Technology",
      url: "https://www.si8tech.com",
    },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Simon Fraser University",
  },
  sameAs: [
    "https://www.linkedin.com/in/sibulus0/",
    "https://github.com/sibulus13",
    "https://www.si8tech.com",
  ],
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "AWS",
    "Python",
    "AI Engineering",
    "Agentic Workflows",
    "React Native",
    "Full-Stack Development",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    addressCountry: "CA",
  },
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
