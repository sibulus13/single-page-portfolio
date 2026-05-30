import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Photo from "@/components/Photo/Photo";
import BlogSection from "@/components/Posts/BlogSection";
import { getBlogPosts } from "@/lib/Contentful/Contentful";

const blogs = await getBlogPosts("adventure");
blogs.sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));

function SectionHeader({ num, title }) {
  return (
    <div className="pt-16 lg:pt-24 pb-8">
      <div
        className="text-xs font-mono tracking-widest mb-3 flex items-center gap-3"
        style={{ color: "var(--color-text-3)" }}
      >
        <span
          className="inline-block h-px w-6"
          style={{ backgroundColor: "var(--color-border)" }}
        />
        {num}
      </div>
      <h2
        className="text-3xl md:text-4xl font-bold tracking-tight leading-none"
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
        <SectionHeader num="01" title="About" />
        <About />
      </div>

      <div id="experience">
        <SectionHeader num="02" title="Experience" />
        <Experience />
      </div>

      <div id="projects">
        <SectionHeader num="03" title="Projects" />
        <Projects />
      </div>

      <div id="photography">
        <SectionHeader num="04" title="Gallery" />
        <Photo />
      </div>

      <div id="blog">
        <SectionHeader num="05" title="Blog" />
        <BlogSection posts={blogs} />
      </div>
    </main>
  );
}
