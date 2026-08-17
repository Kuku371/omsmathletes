import Reveal from "./Reveal";
import MathDoodle from "./MathDoodle";
import { recordings } from "./content";

const actions = [
  {
    label: "Register",
    description:
      "Sign up for an upcoming OMSM meeting or workshop.",
    href: "#"
  },

  {
    label: "Discord",
    description:
      "Join the OMSM Discord for announcements and discussion.",
    href: "#"
  },

  {
    label: "Meeting Updates",
    description:
      "View announcements, schedule changes, and meeting information.",
    href: "#"
  }
];

export default function Meetings() {
  return (
    <div className="page">

      <div className="wrap">

        <Reveal className="page-head page-head--with-doodle">

          <div>

            <p className="section-label">
              Meetings
            </p>

            <h1>
              Meetings
            </h1>

            <p>
              Register for meetings, join the community,
              and access recordings from previous sessions.
            </p>

          </div>

          <MathDoodle
            variant="notebook"
            className="page-doodle"
          />

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
                  Open link ↗
                </a>

              </Reveal>

            ))}

          </div>

        </section>


        <section className="page-section resource-section">

          <MathDoodle
            variant="nodes"
            className="section-doodle section-doodle--right"
          />

          <Reveal>

            <p className="section-label">
              Archive
            </p>

            <h2 className="section-title">
              Meeting Recordings
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
