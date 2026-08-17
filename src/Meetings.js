import Reveal from "./Reveal";
import { recordings } from "./content";

const actions = [
  {
    label: "Sign up for a meeting",
    description:
      "Replace this with your Google Form or registration link.",
    href: "#"
  },

  {
    label: "Join the Discord",
    description:
      "Replace this with the permanent server invite.",
    href: "#"
  },

  {
    label: "Meeting updates",
    description:
      "Replace this with a mailing list, calendar, or announcement page.",
    href: "#"
  }
];

export default function Meetings() {
  return (
    <div className="page">

      <div className="wrap">

        <Reveal className="page-head">

          <p className="section-label">
            Meetings
          </p>

          <h1>
            Meetings & resources
          </h1>

          <p>
            The practical side of the math larp: sign up, join the community,
            and revisit old sessions when somebody claims “we definitely
            covered this already.”
          </p>

        </Reveal>

        <section className="page-section">

          <div className="action-grid">

            {actions.map((action, index) => (

              <Reveal
                className="action-card"
                key={action.label}
                delay={index * 70}
              >

                <span className="action-card__number">
                  0{index + 1}
                </span>

                <h2>
                  {action.label}
                </h2>

                <p>
                  {action.description}
                </p>

                <a
                  className="button button--small"
                  href={action.href}
                  onClick={
                    action.href === "#"
                      ? (event) => event.preventDefault()
                      : undefined
                  }
                >
                  Placeholder link ↗
                </a>

              </Reveal>

            ))}

          </div>

        </section>

        <section className="page-section">

          <Reveal>

            <p className="section-label">
              Archive
            </p>

            <h2 className="section-title">
              Past meeting recordings
            </h2>

          </Reveal>

          <div className="recording-list">

            {recordings.map((recording, index) => (

              <Reveal
                className="recording-card"
                key={recording.title}
                delay={index * 60}
              >

                <div
                  className="recording-card__play"
                  aria-hidden="true"
                >
                  ▶
                </div>

                <div className="recording-card__body">

                  <div className="recording-card__top">

                    <h3>
                      {recording.title}
                    </h3>

                    <span>
                      {recording.date}
                    </span>

                  </div>

                  <p>
                    {recording.topic}
                  </p>

                </div>

                <a
                  className="recording-card__link"
                  href={recording.href}
                  aria-label={`Open ${recording.title}`}
                  onClick={
                    recording.href === "#"
                      ? (event) => event.preventDefault()
                      : undefined
                  }
                >
                  ↗
                </a>

              </Reveal>

            ))}

          </div>

        </section>

      </div>

    </div>
  );
}
