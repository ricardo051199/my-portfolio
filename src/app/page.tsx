import AboutMe from "./(pages)/about-me/page";
import Contact from "./(pages)/contact/page";
import Hero from "./(pages)/hero/page";
import Projects from "./(pages)/projects/page";
import Skills from "./(pages)/skills/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}