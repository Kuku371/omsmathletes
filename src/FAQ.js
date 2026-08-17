import { useState } from "react";
import Reveal from "./Reveal";
import MathDoodle from "./MathDoodle";
import { faqItems } from "./content";

function AccordionItem({
  item,
  itemKey,
  openKey,
  setOpenKey
}) {
  const open =
    openKey === itemKey;

  const toggle = () => {
    setOpenKey(
      open
        ? null
        : itemKey
    );
  };

  return (
    <div
      className={`accordion-item ${
        open
          ? "open"
          : ""
      }`}
    >

      <button
        type="button"
        className="accordion-question"
        aria-expanded={open}
        onClick={toggle}
      >

        <span>
          {item.question}
        </span>

        <span className="accordion-icon">
          {open ? "−" : "+"}
        </span>

      </button>


      <div className="accordion-answer">

        <div>

          <p>
            {item.answer}
          </p>

        </div>

      </div>

    </div>
  );
}


export default function FAQ() {
  const [
    openKey,
    setOpenKey
  ] = useState(null);

  return (
    <div className="page">

      <div className="wrap">

        <Reveal className="page-head page-head--with-doodle">

          <div>

            <p className="section-label">
              FAQ
            </p>

            <h1>
              Frequently Asked Questions
            </h1>

            <p>
              Common questions about OMSM meetings
              and participation.
            </p>

          </div>

          <MathDoodle
            variant="equation"
            className="page-doodle"
          />

        </Reveal>


        <section className="page-section faq-section">

          <Reveal className="faq-group">

            <div className="accordion">

              {faqItems.map(
                (item, index) => (

                  <AccordionItem
                    key={item.question}
                    item={item}
                    itemKey={index}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />

                )
              )}

            </div>

          </Reveal>

        </section>

      </div>

    </div>
  );
}
