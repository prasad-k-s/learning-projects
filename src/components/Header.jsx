import ThemeToggle from './ThemeToggle.jsx';
import { GitHubIcon } from './Icons.jsx';

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="/" className="logo">
          Prasad K S
        </a>
        <nav className="header__actions">
          <a
            className="icon-btn"
            href="https://github.com/prasad-k-s"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <GitHubIcon />
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
