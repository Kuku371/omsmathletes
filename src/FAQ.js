import { useState } from "react";
import Reveal from "./Reveal";
import { faqGroups } from "./content";

function AccordionItem({
  item
}) {
  const [open, setOpen] =
    useState(false);

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
        onClick={() =>
          setOpen(
            (value) =>
              !value
          )
        }
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
  return (
    <div className="page">

      <div className="wrap">

        <Reveal className="page-head">

          <p className="section-label">
            FAQ
          </p>

          <h1>
            Questions, answered
          </h1>

          <p>
            OMC-style grouped questions with a cleaner accordion treatment.
            All text lives in content.js.
          </p>

        </Reveal>

        <section className="page-section faq-groups">

          {faqGroups.map(
            (
              group,
              groupIndex
            ) => (

              <Reveal
                className="faq-group"
                key={group.title}
                delay={
                  groupIndex *
                  60
                }
              >

                <h2>
                  {group.title}
                </h2>

                <div className="accordion">

                  {group.items.map(
                    (item) => (

                      <AccordionItem
                        key={
                          item.question
                        }
                        item={item}
                      />

                    )
                  )}

                </div>

              </Reveal>

            )
          )}

        </section>

      </div>

    </div>
  );
}
