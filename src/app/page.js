import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Photo from "@/components/Photo/Photo";

// TODO remove min-h-400 when ALL contents are added
export default function Home() {
  return (
    <main>
      <div id="home" className="min-h-400 py-10">
        <Hero />
      </div>
      <div id="about" className="min-h-400 py-10">
        <h1 className="pt-20">ABOUT</h1>
        <About />
      </div>
      <div id="experience" className="min-h-400 py-10">
        <h1 className="pt-20">EXPERIENCE</h1>
        <Experience />
      </div>
      <div id="projects" className="min-h-400 py-10">
        <h1 className="pt-20">PROJECTS</h1>
      </div>
      <div id="photography" className="min-h-400 py-10">
        <h1 className="pt-20">PHOTOGRAPHY</h1>
        <Photo />
      </div>
      <div id="blog" className="min-h-400 py-10">
        <h1 className="pt-20">BLOG</h1>
      </div>
    </main>
  );
}
