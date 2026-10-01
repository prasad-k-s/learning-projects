export default function Hero({ count }) {
  return (
    <section className="hero">
      <p className="hero__eyebrow">Learning projects</p>
      <h1 className="hero__title">
        Hi, I&apos;m <span>Prasad K S</span>
      </h1>
      <p className="hero__text">
        Here is the list of projects I have built while learning HTML, CSS,
        JavaScript, React.js, TypeScript, Next.js and more. Each one taught me
        something new, from layouts and responsive design to DOM, APIs and app
        architecture.
      </p>
      <a href="#projects" className="hero__count">
        {count} projects ↓
      </a>
    </section>
  );
}
