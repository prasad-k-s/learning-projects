import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import projects from './data/projects.json';

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero count={projects.length} />

        <section id="projects" className="projects" aria-label="Projects">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </main>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} Prasad K S</p>
      </footer>
    </>
  );
}
