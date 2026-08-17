import Reveal from "./Reveal";
import MathDoodle from "./MathDoodle";
import { staff } from "./content";

export default function Staff() {
  return (
    <div className="page">

      <div className="wrap">

        <Reveal className="page-head page-head--with-doodle">

          <div>

            <p className="section-label">
              Staff
            </p>

            <h1>
              Staff
            </h1>

            <p>
              Meet the students and volunteers who organize
              meetings, develop curriculum, and coordinate
              OMSM events.
            </p>

          </div>

          <MathDoodle
            variant="geometry"
            className="page-doodle"
          />

        </Reveal>


        <section className="page-section">

          <div className="staff-grid">

            {staff.map(
              (person, index) => (

                <Reveal
                  className="staff-card"
                  key={`${person.role}-${index}`}
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

              )
            )}

          </div>

        </section>

      </div>

    </div>
  );
}
