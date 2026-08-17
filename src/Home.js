import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { events } from "./content";

function formatEventDate(dateString) {
  return new Date(`${dateString}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
}

function MathField() {
  const pieces = [
    {
      text: "∑",
      className: "math-piece p1"
    },

    {
      text: "π",
      className: "math-piece p2"
    },

    {
      text: "∞",
      className: "math-piece p3"
    },

    {
      text: "∫",
      className: "math-piece p4"
    },

    {
      text: "aₙ₊₃ = 6aₙ₊₂ − 7aₙ₊₁ + aₙ",
      className: "math-piece p5 wide"
    },

    {
      text: "q = 2/15",
      className: "math-piece p6"
    },

    {
      text: "mod 7",
      className: "math-piece p7"
    }
  ];

  return (
    <div className="math-field" aria-hidden="true">

      <svg
        className="math-orbit"
        viewBox="0 0 520 520"
      >
        <circle
          cx="260"
          cy="260"
          r="172"
        />

        <path d="M90 325 C165 115, 360 95, 430 310" />

        <path d="M135 395 L260 150 L390 395 Z" />
      </svg>

      {pieces.map((piece) => (
        <span
          key={piece.text}
          className={piece.className}
        >
          {piece.text}
        </span>
      ))}

    </div>
  );
}

export default function Home() {
  const now = new Date();

  const upcoming = [...events]
    .filter(
      (event) =>
        new Date(`${event.date}T23:59:59`) >= now
    )
    .sort(
      (a, b) =>
        a.date.localeCompare(b.date)
    )
    .slice(0, 3);

  return (
    <>

      <section className="hero">

        <div className="aurora aurora--one" />
        <div className="aurora aurora--two" />

        <div className="wrap hero__grid">

          <Reveal className="hero__copy">

            <div
              className="logo-fill"
              aria-label="Logo placeholder"
            >
              ∑
            </div>

            <p className="kicker">
              Oregon • middle school mathematics
            </p>

            <h1>
              Oregon Middle School Mathletes
            </h1>

            <p className="hero__tagline">
              Serious math. Unserious amounts of scratch paper.
            </p>

            <p className="hero__blurb">
              A student math community for exploring ideas beyond the
              classroom, solving hard problems together, and learning the
              tricks that make impossible-looking questions start to crack.
            </p>

            <div className="hero__actions">

              <Link
                className="button button--primary"
                to="/events"
              >
                See upcoming events
              </Link>

              <Link
                className="button button--ghost"
                to="/meetings"
              >
                Meetings & resources
              </Link>

            </div>

          </Reveal>

          <Reveal
            className="hero__visual"
            delay={120}
          >
            <MathField />
          </Reveal>

        </div>
      </section>

      <section className="home-section">

        <div className="wrap">

          <Reveal>

            <p className="section-label">
              About
            </p>

            <div className="section-heading">

              <h2>
                Math that goes past the worksheet.
              </h2>

              <p>
                We want a place where middle school students can encounter
                elegant problems, unusual ideas, competition-style strategy,
                and the occasional theorem that feels way above grade level
                until somebody explains the right picture.
              </p>

            </div>

          </Reveal>

          <div className="about-grid">

            <Reveal
              className="feature-card"
              delay={40}
            >
              <span className="feature-card__symbol">
                01
              </span>

              <h3>Explore</h3>

              <p>
                Number theory, combinatorics, geometry, algebra, games,
                probability, proofs, and whatever else seems mathematically
                worth derailing the meeting for.
              </p>
            </Reveal>

            <Reveal
              className="feature-card"
              delay={100}
            >
              <span className="feature-card__symbol">
                02
              </span>

              <h3>Solve</h3>

              <p>
                Work through problems collaboratively, compare approaches,
                find the clean idea, and occasionally discover that the ugly
                solution was secretly useful.
              </p>
            </Reveal>

            <Reveal
              className="feature-card"
              delay={160}
            >
              <span className="feature-card__symbol">
                03
              </span>

              <h3>Compete</h3>

              <p>
                Build speed, strategy, communication, and team problem-solving
                skills without making competition the only reason to do math.
              </p>
            </Reveal>

          </div>
        </div>
      </section>

      <section className="home-section home-section--events">

        <div className="wrap">

          <Reveal>

            <p className="section-label">
              Upcoming
            </p>

            <div className="section-heading section-heading--row">

              <div>

                <h2>
                  Next on the board
                </h2>

                <p>
                  Starter events for now — replace these in content.js.
                </p>

              </div>

              <Link
                className="text-link"
                to="/events"
              >
                All events →
              </Link>

            </div>

          </Reveal>

          <div className="event-preview-grid">

            {upcoming.map((event, index) => (

              <Reveal
                className="event-preview"
                key={event.date}
                delay={index * 80}
              >

                <span className="event-preview__date">
                  {formatEventDate(event.date)}
                </span>

                <h3>
                  {event.title}
                </h3>

                <p>
                  {event.description}
                </p>

                <div className="event-preview__meta">

                  <span>
                    {event.time}
                  </span>

                  <span>
                    {event.location}
                  </span>

                </div>

              </Reveal>

            ))}

          </div>

        </div>
      </section>

    </>
  );
}
