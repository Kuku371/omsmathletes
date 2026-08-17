export default function Footer({ theme, toggleTheme }) {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">

        <div className="footer__links">

          <a href="mailto:oregonmathcircle@gmail.com">
            oregonmathcircle@gmail.com
          </a>

          <a
            href="#"
            onClick={(event) => event.preventDefault()}
          >
            Discord
          </a>

          <a
            href="#"
            onClick={(event) => event.preventDefault()}
          >
            Instagram
          </a>

        </div>

        <div className="footer__right">

          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
          >
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>

          <span>© 2026 Oregon Middle School Mathletes</span>

        </div>

      </div>
    </footer>
  );
}
