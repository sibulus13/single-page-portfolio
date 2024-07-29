import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Photo from "@/components/Photo/Photo";
import { getBlogPosts } from "@/Contentful/Contentful";
import CommentGallery from "@/components/Comment/CommentGallery";
import CommentForm from "@/components/Comment/CommentForm";

let projects = await getBlogPosts('projects');
let blogs = await getBlogPosts('adventure');
projects.sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));
blogs.sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));

export default function Home() {
  return (
    <main className="grid gap-32">
      <div>
        <Hero />
      </div>
      <div id="about">
        <h1 className="pt-10 lg:pt-20">ABOUT</h1>
        <About />
      </div>
      <div id="experience">
        <h1 className="pt-10 lg:pt-20">EXPERIENCE</h1>
        <Experience />
      </div>
      <div id="projects">
        <h1 className="pt-10 lg:pt-20">PROJECTS</h1>
        <Projects content={projects} type={'Projects'} />
      </div>
      <div id="photography">
        <h1 className="pt-10 lg:pt-20">GALLERY</h1>
        <Photo />
      </div>
      <div id="blog">
        <h1 className="pt-10 lg:pt-20">BLOG</h1>
        <Projects content={blogs} type={'Blog'} />
      </div>
      <div id="comments">
        <h1 className="pt-10 lg:pt-20">COMMENTS</h1>
        <CommentForm />
        <CommentGallery />
      </div>
    </main>
  );
}
