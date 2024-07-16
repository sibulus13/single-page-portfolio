import Hero from "@/components/Hero/HeroSection";

export default function Home() {
  return (
    <main>
      <div id="home" style={{ minHeight: '400px' }}>
        <Hero />
      </div>
      <div id="about" style={{ minHeight: '400px' }}>
        <h1>ABOUT</h1>
      </div>
      <div id="experience" style={{ minHeight: '400px' }}>
        <h1>EXPERIENCE</h1>
      </div>
      <div id="projects" style={{ minHeight: '400px' }}>
        <h1>PROJECTS</h1>
      </div>
      <div id="photography" style={{ minHeight: '400px' }}>
        <h1>PHOTOGRAPHY</h1>
      </div>
      <div id="blog" style={{ minHeight: '400px' }}>
        <h1>BLOG</h1>
      </div>
    </main>
  );
}
