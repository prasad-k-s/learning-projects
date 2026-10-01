import { ExternalIcon, GitHubIcon } from './Icons.jsx';

export default function ProjectCard({ project }) {
  const { name, description, image, skills = [], liveUrl, githubUrl } = project;

  return (
    <article className="card">
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="card__image"
        aria-label={`Open ${name} live demo`}
      >
        <img src={image} alt={`${name} screenshot`} loading="lazy" width="960" height="600" />
      </a>

      <div className="card__body">
        <h2 className="card__title">{name}</h2>
        <p className="card__desc">{description}</p>

        <ul className="skills" aria-label="Skills used">
          {skills.map((skill) => (
            <li key={skill.name} className="skill">
              <img src={skill.icon} alt="" width="16" height="16" />
              {skill.name}
            </li>
          ))}
        </ul>

        <div className="card__links">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Live demo <ExternalIcon />
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn">
              <GitHubIcon /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
