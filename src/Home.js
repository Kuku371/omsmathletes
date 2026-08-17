import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import MathDoodle from "./MathDoodle";
import { events } from "./content";

function formatEventDate(dateString) {
  return new Date(`${dateString}T12:00:00`).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric"
    }
  );
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
      text: "x² + y² = r²",
      className: "math-piece p5 wide"
    },
    {
      text: "mod 7",
      className: "math-piece p6"
    },
    {
      text: "n choose k",
      className: "math-piece p7"
    }
  ];

  return (
    <div
      className="math-field"
      aria-hidden="true"
    >
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
              Oregon • Middle School Mathematics
            </p>

            <h1>
              Oregon Middle School Mathletes
            </h1>

            <p className="hero__tagline">
              A community for students who enjoy challenging mathematics.
            </p>

            <p className="hero__blurb">
              OMSM brings middle school students together for
              problem-solving sessions, mathematical exploration,
              and competition preparation.
            </p>

            <div className="hero__actions">

              <Link
                className="button button--primary"
                to="/events"
              >
                View Events
              </Link>

              <Link
                className="button button--ghost"
                to="/meetings"
              >
                Meetings & Resources
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
                About Us
              </h2>

              <p>
                Oregon Middle School Mathletes is a place for
                students to study interesting mathematics, solve
                challenging problems together, and build skills
                for competitions and future coursework.
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

              <h3>
                Learn
              </h3>

              <p>
                Explore topics including number theory,
                combinatorics, geometry, algebra, probability,
                and proof.
              </p>

              <MathDoodle
                variant="graph"
                className="feature-card__doodle"
              />

            </Reveal>


            <Reveal
              className="feature-card"
              delay={100}
            >

              <span className="feature-card__symbol">
                02
              </span>

              <h3>
                Solve
              </h3>

              <p>
                Work through challenging problems, compare
                methods, and learn how to present clear
                mathematical solutions.
              </p>

              <MathDoodle
                variant="notebook"
                className="feature-card__doodle"
              />

            </Reveal>


            <Reveal
              className="feature-card"
              delay={160}
            >

              <span className="feature-card__symbol">
                03
              </span>

              <h3>
                Compete
              </h3>

              <p>
                Practice competition strategy, teamwork, speed,
                and accuracy through individual and team
                problem sets.
              </p>

              <MathDoodle
                variant="geometry"
                className="feature-card__doodle"
              />

            </Reveal>

          </div>

        </div>

      </section>


      <section className="home-section home-section--events">

        <div className="wrap">

          <Reveal>

            <p className="section-label">
              Events
            </p>

            <div className="section-heading section-heading--row">

              <div>

                <h2>
                  Upcoming Events
                </h2>

                <p>
                  See the next scheduled OMSM meetings and workshops.
                </p>

              </div>

              <Link
                className="text-link"
                to="/events"
              >
                View all events →
              </Link>

            </div>

          </Reveal>


          <div className="event-preview-grid">

            {upcoming.map((event, index) => (

              <Reveal
                className="event-preview"
                key={event.date + event.title}
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
