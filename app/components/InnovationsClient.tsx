"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { innovationCards, scenarios } from "../content";
import { Modal } from "./Modal";
import { useChartJs } from "./useChartJs";

const filters = ["Toutes", "Sport", "Sécurité", "Médias", "Spectateurs", "Durabilité"] as const;

export function InnovationsClient() {
  const chartReady = useChartJs();
  const [filter, setFilter] = useState<(typeof filters)[number]>("Toutes");
  const [active, setActive] = useState<(typeof innovationCards)[number] | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<any>(null);

  const filteredCards = useMemo(() => {
    if (filter === "Toutes") {
      return innovationCards;
    }

    return innovationCards.filter((card) => card.category === filter);
  }, [filter]);

  useEffect(() => {
    if (!active || !chartReady || !canvasRef.current || !window.Chart) {
      return;
    }

    chartRef.current?.destroy();

    chartRef.current = new window.Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: ["Efficacité", "Acceptabilité", "Pérennité"],
        datasets: [
          {
            data: active.scores,
            backgroundColor: ["#0081C8", "#FCB131", "#2D8B57"],
            borderRadius: 8,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            min: 0,
            max: 3,
            ticks: { stepSize: 1 },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [active, chartReady]);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Bloc 1</span>
            <h1>Innovations filtrables</h1>
            <p>
              Cinq innovations majeures des JO Paris 2024, filtrables par domaine avec fiche
              détaillée et lecture comparative.
            </p>
          </div>
          <div className="pill-row">
            {filters.map((value) => (
              <button
                key={value}
                type="button"
                className={`pill-button${filter === value ? " active" : ""}`}
                onClick={() => setFilter(value)}
              >
                {value}
              </button>
            ))}
          </div>
          <div className="card-grid">
            {filteredCards.map((card) => (
              <button
                key={card.slug}
                type="button"
                className="feature-card"
                onClick={() => setActive(card)}
              >
                <span className={`badge ${card.badgeClass}`}>{card.category}</span>
                <h3>
                  {card.icon} {card.title}
                </h3>
                <p>{card.summary}</p>
                <span className="arrow">Voir l&apos;analyse</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Bloc 2</span>
            <h2>Et demain ? Les scénarios d&apos;adoption</h2>
            <p>Comment ces innovations pourraient se diffuser après les JO Paris 2024.</p>
          </div>
          <div className="scenario-grid">
            {scenarios.map((scenario) => (
              <article
                key={scenario.title}
                className="scenario-card"
                style={{ borderTopColor: scenario.borderColor }}
              >
                <h3>{scenario.title}</h3>
                <p>{scenario.description}</p>
                <p>
                  <strong>Impact :</strong> {scenario.impact}
                </p>
                <p>
                  <strong>Condition :</strong> {scenario.condition}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title ?? ""}>
        <p>{active?.details}</p>
        <div className="panel chart-panel">
          <div className="chart-shell">
            <canvas ref={canvasRef} />
          </div>
        </div>
      </Modal>
    </>
  );
}
