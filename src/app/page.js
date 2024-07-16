import Hero from "@/components/Hero/HeroSection";
import About from "@/components/About/About";

export default function Home() {
  return (
    <main>
      <div id="home" style={{ minHeight: '400px', paddingTop: '10px', paddingBottom: '10px' }}>
        <Hero />
      </div>
      <div id="about" style={{ minHeight: '400px', paddingTop: '10px', paddingBottom: '10px' }}>
        <h1>ABOUT</h1>
        <About />
      </div>
      <div id="experience" style={{ minHeight: '400px', paddingTop: '10px', paddingBottom: '10px' }}>
        <h1>EXPERIENCE</h1>
      </div>
      <div id="projects" style={{ minHeight: '400px', paddingTop: '10px', paddingBottom: '10px' }}>
        <h1>PROJECTS</h1>
      </div>
      <div id="photography" style={{ minHeight: '400px', paddingTop: '10px', paddingBottom: '10px' }}>
        <h1>PHOTOGRAPHY</h1>
      </div>
      <div id="blog" style={{ minHeight: '400px', paddingTop: '10px', paddingBottom: '10px' }}>
        <h1>BLOG</h1>
      </div>
    </main>
  );
}
