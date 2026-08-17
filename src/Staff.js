import Reveal from "./Reveal";
import { staff } from "./content";

export default function Staff() {
  return (
    <div className="page">

      <div className="wrap">

        <Reveal className="page-head">

          <p className="section-label">
            Staff
          </p>

          <h1>
            The people behind the whiteboard
          </h1>

          <p>
            Placeholder leadership cards for now. Swap in real photos, names,
            roles, and descriptions when the team is ready.
          </p>

        </Reveal>

        <section className="page-section">

          <div className="staff-grid">

            {staff.map((person, index) => (

              <Reveal
                className="staff-card"
                key={person.name}
                delay={index * 55}
              >

                <div
                  className="staff-card__photo"
                  aria-label="Photo placeholder"
                >

                  <span>
                    {person.initials}
                  </span>

                </div>

                <div className="staff-card__body">

                  <p className="staff-card__role">
                    {person.role}
                  </p>

                  <h2>
                    {person.name}
                  </h2>

                  <p>
                    {person.description}
                  </p>

                </div>

              </Reveal>

            ))}

          </div>

        </section>

      </div>

    </div>
  );
}
