import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Photo from "@/components/Photo/Photo";
import BlogSection from "@/components/Posts/BlogSection";
import { getBlogPosts } from "@/lib/Contentful/Contentful";

const blogs = await getBlogPosts("adventure");
blogs.sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));

function SectionHeader({ title }) {
  return (
    <div className="pt-16 lg:pt-24 pb-8 border-t" style={{ borderColor: "var(--color-border)" }}>
      <h2
        className="text-3xl md:text-4xl font-bold tracking-tight leading-none mt-5"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--color-text-1)",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />

      <div id="about">
        <SectionHeader title="About" />
        <About />
      </div>

      <div id="experience">
        <SectionHeader title="Experience" />
        <Experience />
      </div>

      <div id="projects">
        <SectionHeader title="Projects" />
        <Projects />
      </div>

      <div id="photography">
        <SectionHeader title="Gallery" />
        <Photo />
      </div>

      <div id="blog">
        <SectionHeader title="Blog" />
        <BlogSection posts={blogs} />
      </div>
    </main>
  );
}
