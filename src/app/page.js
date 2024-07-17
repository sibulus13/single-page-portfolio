import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Photo from "@/components/Photo/Photo";

// TODO remove min-h-400 when ALL contents are added
export default function Home() {
  return (
    <main>
      <Header id="home" />
      <div className="py-10">
        <Hero />
      </div>
      <div id="about" className="py-10">
        <h1>ABOUT</h1>
        <About />
      </div>
      <div id="experience" className="py-10">
        <h1>EXPERIENCE</h1>
        <Experience />
      </div>
      <div id="projects" className="py-10">
        <h1>PROJECTS</h1>
        <Projects content_type={'projects'} />
      </div>
      <div id="photography" className="py-10">
        <h1>PHOTOGRAPHY</h1>
        <Photo />
      </div>
      <div id="blog" className="py-10">
        <h1>BLOG</h1>
        <Projects content_type={'adventure'} />
      </div>
    </main>
  );
}
