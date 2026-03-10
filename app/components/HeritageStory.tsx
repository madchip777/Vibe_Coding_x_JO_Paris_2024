"use client";

import { useEffect, useRef } from "react";
import { heritageBlocks } from "../content";

export function HeritageStory() {
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    refs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="section dark">
        <div className="container">
          <div className="quote-block">
            <span className="eyebrow">Bloc 0</span>
            <blockquote>
              “Je vis en Seine-Saint-Denis depuis trente ans. Quand on parlait des Jeux,
              beaucoup autour de moi pensaient : encore un grand projet qui nous traversera.”
            </blockquote>
            <p>Aujourd&apos;hui, voici ce qui est resté.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="story-stack">
            {heritageBlocks.map((block, index) => (
              <article
                key={block.title}
                ref={(element) => {
                  refs.current[index] = element;
                }}
                className="story-card"
                style={{ ["--delay" as string]: `${index * 90}ms` }}
              >
                <span className="eyebrow">
                  {block.icon} Bloc {index + 1}
                </span>
                <h3>{block.title}</h3>
                <p>{block.text}</p>
                <div className="comparison-grid">
                  <div className="comparison-panel before">
                    <h4>AVANT</h4>
                    <ul>
                      {block.before.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="comparison-panel after">
                    <h4>APRÈS</h4>
                    <ul>
                      {block.after.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="quote-block">
            <span className="eyebrow">Conclusion</span>
            <blockquote>
              “Les Jeux ont été un accélérateur. Mais l&apos;essentiel pour nous, habitants de
              Seine-Saint-Denis, c&apos;est ce qu&apos;on met derrière.”
            </blockquote>
            <p>
              Si politiques d&apos;emploi, soutien aux associations sportives et protection des
              ménages vulnérables suivent, alors le changement restera.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
