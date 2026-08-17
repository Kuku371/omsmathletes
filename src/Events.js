import Reveal from "./Reveal";
import MathDoodle from "./MathDoodle";
import { events } from "./content";

function EventCard({
  event,
  past = false
}) {
  const date =
    new Date(`${event.date}T12:00:00`);

  const month =
    date.toLocaleDateString(
      "en-US",
      {
        month: "short"
      }
    );

  const day =
    date.toLocaleDateString(
      "en-US",
      {
        day: "numeric"
      }
    );

  const year =
    date.getFullYear();

  return (
    <article
      className={`event-card ${
        past
          ? "event-card--past"
          : ""
      }`}
    >

      <div className="event-card__date">

        <span>
          {month}
        </span>

        <strong>
          {day}
        </strong>

        <small>
          {year}
        </small>

      </div>


      <div className="event-card__body">

        <h3>
          {event.title}
        </h3>

        <div className="event-card__meta">

          <span>
            {event.time}
          </span>

          <span>
            {event.location}
          </span>

        </div>

        <p>
          {event.description}
        </p>

      </div>

    </article>
  );
}


export default function Events() {
  const now =
    new Date();

  const upcoming =
    [...events]
      .filter(
        (event) =>
          new Date(
            `${event.date}T23:59:59`
          ) >= now
      )
      .sort(
        (a, b) =>
          a.date.localeCompare(
            b.date
          )
      );

  const past =
    [...events]
      .filter(
        (event) =>
          new Date(
            `${event.date}T23:59:59`
          ) < now
      )
      .sort(
        (a, b) =>
          b.date.localeCompare(
            a.date
          )
      );

  return (
    <div className="page">

      <div className="wrap">

        <Reveal className="page-head page-head--with-doodle">

          <div>

            <p className="section-label">
              Events
            </p>

            <h1>
              Events
            </h1>

            <p>
              Browse upcoming OMSM meetings and workshops,
              along with a record of previous events.
            </p>

          </div>

          <MathDoodle
            variant="graph"
            className="page-doodle"
          />

        </Reveal>


        <section className="page-section">

          <Reveal>

            <h2 className="section-title">
              Upcoming Events
            </h2>

          </Reveal>


          <div className="event-list">

            {upcoming.length ? (

              upcoming.map(
                (event, index) => (

                  <Reveal
                    key={
                      event.date +
                      event.title
                    }
                    delay={
                      index * 60
                    }
                  >

                    <EventCard
                      event={event}
                    />

                  </Reveal>

                )
              )

            ) : (

              <p className="empty-state">
                No upcoming events are posted yet.
              </p>

            )}

          </div>

        </section>


        <section className="page-section page-section--muted">

          <Reveal>

            <h2 className="section-title">
              Past Events
            </h2>

          </Reveal>


          <div className="event-list">

            {past.length ? (

              past.map(
                (event, index) => (

                  <Reveal
                    key={
                      event.date +
                      event.title
                    }
                    delay={
                      index * 50
                    }
                  >

                    <EventCard
                      event={event}
                      past
                    />

                  </Reveal>

                )
              )

            ) : (

              <p className="empty-state">
                Past events will appear here.
              </p>

            )}

          </div>

        </section>

      </div>

    </div>
  );
}
