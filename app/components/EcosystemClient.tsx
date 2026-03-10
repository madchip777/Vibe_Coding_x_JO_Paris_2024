"use client";

import { useState } from "react";
import { ecosystemSections } from "../content";
import { Modal } from "./Modal";

export function EcosystemClient() {
  const [activeCard, setActiveCard] = useState<null | { title: string; details: string }>(null);

  return (
    <>
      {ecosystemSections.map((section, index) => (
        <section
          key={section.title}
          className={`section${index % 2 === 1 ? " alt" : ""}`}
        >
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Section {index + 1}</span>
              <h2>{section.title}</h2>
              <p>{section.subtitle}</p>
            </div>
            <div className="card-grid">
              {section.cards.map((card) => (
                <button
                  key={card.title}
                  type="button"
                  className="feature-card"
                  onClick={() => setActiveCard(card)}
                >
                  <span className="eyebrow">Détail</span>
                  <h3>{card.title}</h3>
                  <p>{card.summary}</p>
                  <span className="arrow">Ouvrir la fiche</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      ))}
      <Modal
        open={!!activeCard}
        onClose={() => setActiveCard(null)}
        title={activeCard?.title ?? ""}
      >
        <p>{activeCard?.details}</p>
      </Modal>
    </>
  );
}
