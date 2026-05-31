const BASE = "https://www.michaelhuang.ca";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE}/#person`,
  name: "Michael Huang",
  url: BASE,
  image: `${BASE}/founder.jpg`,
  jobTitle: "AI-Native Full-Stack Engineer",
  description:
    "AI-native full-stack engineer and consultant with a Mechatronic Systems Engineering background. Builds production systems 5× faster using agentic AI workflows (Claude Code, Cursor). Founder of SI8 Technology.",
  worksFor: [
    {
      "@type": "Organization",
      name: "Traction Complete",
      url: "https://www.tractioncomplete.com",
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
    url: "https://www.sfu.ca",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "BASc Mechatronic Systems Engineering",
      credentialCategory: "degree",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Certified ScrumMaster (CSM)",
      credentialCategory: "certification",
    },
  ],
  knowsAbout: [
    "Agentic AI Workflows",
    "AI Integration",
    "TypeScript",
    "Next.js",
    "React",
    "React Native",
    "Python",
    "AWS Lambda",
    "AWS CDK",
    "Supabase",
    "PostgreSQL",
    "Playwright",
    "Full-Stack Development",
    "Cloud Architecture",
    "Mechatronic Systems Engineering",
    "Robotics",
    "Claude API",
    "OpenAI API",
    "LLM Engineering",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  sameAs: [
    "https://www.linkedin.com/in/sibulus0/",
    "https://github.com/sibulus13",
    "https://www.si8tech.com",
  ],
  email: "info@si8tech.com",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  name: "Michael Huang",
  url: BASE,
  description:
    "Personal portfolio of Michael Huang — AI-native full-stack engineer and consultant based in Vancouver, BC.",
  author: { "@id": `${BASE}/#person` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE}/?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${BASE}/#profilepage`,
  url: BASE,
  name: "Michael Huang — AI-Native Full-Stack Engineer",
  description:
    "Portfolio and professional profile of Michael Huang, AI-native full-stack engineer and founder of SI8 Technology.",
  mainEntity: { "@id": `${BASE}/#person` },
  dateModified: new Date().toISOString().split("T")[0],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of projects does SI8 Technology take on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI automation, full-stack web applications, and cloud infrastructure. Sweet spot: projects where technical quality matters and the stakes are too high for proof-of-concept work.",
      },
    },
    {
      "@type": "Question",
      name: "What does an agentic AI workflow mean for software delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agentic workflows use AI agents (Claude Code, Cursor) to autonomously handle routine development tasks — code review, test generation, boilerplate — freeing engineers to focus on architecture and judgment calls. At Traction Complete, this produced a 5× increase in feature delivery velocity.",
      },
    },
    {
      "@type": "Question",
      name: "Is Michael Huang available for consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Michael is available for consulting engagements through SI8 Technology. He offers fixed-scope project engagements and monthly retainers. Book a free 30-minute discovery call at si8tech.com.",
      },
    },
    {
      "@type": "Question",
      name: "What is Michael Huang's engineering background?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Michael holds a BASc in Mechatronic Systems Engineering with a minor in Computer Science — Artificial Intelligence from Simon Fraser University. He has 6+ years of experience across robotics, full-stack web development, cloud infrastructure, and AI integration.",
      },
    },
  ],
};

export default function StructuredData() {
  const schemas = [personSchema, websiteSchema, profilePageSchema, faqSchema];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
