import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Photo from "@/components/Photo/Photo";
import { getBlogPosts } from "@/Contentful/Contentful";

let projects = await getBlogPosts('projects');
let blogs = await getBlogPosts('adventure');
projects.sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));
blogs.sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));

export default function Home() {
  return (
    <main id='#' className="grid gap-32">
      <div className="pt-10">
        <Hero />
      </div>
      <div id="about">
        <h1>ABOUT</h1>
        <About />
      </div>
      <div id="experience">
        <h1>EXPERIENCE</h1>
        <Experience />
      </div>
      <div id="projects">
        <h1>PROJECTS</h1>
        <Projects content={projects} type={'Projects'} />
      </div>
      <div id="photography">
        <h1>PHOTOGRAPHY</h1>
        <Photo />
      </div>
      <div id="blog">
        <h1>BLOG</h1>
        <Projects content={blogs} type={'Blog'} />
      </div>
    </main>
  );
}
