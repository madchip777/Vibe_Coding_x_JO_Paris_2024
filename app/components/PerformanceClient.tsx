"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { performanceResults } from "../content";
import { useChartJs } from "./useChartJs";

const labels = ["05/09", "05/25", "05/26", "06/15", "06/16", "07/28", "08/29", "09/01"];

export function PerformanceClient() {
  const chartReady = useChartJs();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<any>(null);
  const [visible, setVisible] = useState({ XCC: true, XCO: true });
  const [tableFilter, setTableFilter] = useState<"Toutes" | "XCC" | "XCO">("Toutes");

  useEffect(() => {
    if (!chartReady || !canvasRef.current || !window.Chart) {
      return;
    }

    chartRef.current?.destroy();

    chartRef.current = new window.Chart(canvasRef.current, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "XCC",
            data: [1, 2, null, 2, null, null, 2, null],
            borderColor: "#0081C8",
            backgroundColor: "#0081C8",
            tension: 0.32,
            spanGaps: false,
            hidden: !visible.XCC,
          },
          {
            label: "XCO",
            data: [null, null, 1, null, 1, 1, null, 14],
            borderColor: "#EE334E",
            backgroundColor: "#EE334E",
            pointBackgroundColor: ["#EE334E", "#EE334E", "#EE334E", "#EE334E", "#EE334E", "#FCB131", "#EE334E", "#EE334E"],
            pointRadius: [4, 4, 4, 4, 4, 7, 4, 4],
            pointHoverRadius: [5, 5, 5, 5, 5, 8, 5, 5],
            tension: 0.32,
            spanGaps: false,
            hidden: !visible.XCO,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        interaction: { mode: "nearest", intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              afterTitle(items: Array<{ dataIndex: number; dataset: { label: string } }>) {
                const item = items[0];
                return item.dataIndex === 5 && item.dataset.label === "XCO" ? "JO Paris 2024" : "";
              },
            },
          },
        },
        scales: {
          x: {
            title: { display: true, text: "Date" },
          },
          y: {
            reverse: true,
            title: { display: true, text: "Classement" },
            min: 1,
            max: 14,
            ticks: { stepSize: 1 },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [chartReady, visible]);

  const filteredRows = useMemo(() => {
    if (tableFilter === "Toutes") {
      return performanceResults;
    }

    return performanceResults.filter((row) => row[3] === tableFilter);
  }, [tableFilter]);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="panel gold-panel">
            <div className="section-header">
              <span className="eyebrow">Bloc 1</span>
              <h1>Médaille d&apos;Or — Jeux Olympiques Paris 2024</h1>
              <p>28 juillet 2024 — XCO — Paris</p>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <strong>1h26&apos;02</strong>
                <span>Temps</span>
              </div>
              <div className="stat-card">
                <strong>1ère place</strong>
                <span>Classement</span>
              </div>
              <div className="stat-card">
                <strong>+177 s</strong>
                <span>Écart sur la 2e</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Bloc 2</span>
            <h2>Graphique d&apos;évolution</h2>
            <p>Lecture croisée entre XCC et XCO sur la saison 2024.</p>
          </div>
          <div className="pill-row">
            {(["XCC", "XCO"] as const).map((type) => (
              <button
                key={type}
                type="button"
                className={`pill-button${visible[type] ? " active" : ""}`}
                onClick={() => setVisible((state) => ({ ...state, [type]: !state[type] }))}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="panel chart-panel">
            <div className="chart-shell">
              <canvas ref={canvasRef} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Bloc 3</span>
            <h2>Tableau des résultats</h2>
            <p>Vue détaillée des compétitions avec filtre par discipline.</p>
          </div>
          <div className="pill-row">
            {[
              { label: "Toutes", value: "Toutes" },
              { label: "XCC seulement", value: "XCC" },
              { label: "XCO seulement", value: "XCO" },
            ].map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={`pill-button${tableFilter === filter.value ? " active" : ""}`}
                onClick={() => setTableFilter(filter.value as "Toutes" | "XCC" | "XCO")}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="table-wrap">
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Compétition</th>
                    <th>Lieu</th>
                    <th>Type</th>
                    <th>Résultat</th>
                    <th>Classement</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.map((row) => (
                    <tr key={`${row[0]}-${row[3]}`} className={row[0] === "07/28/2024" ? "highlight" : ""}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                      <td>{row[3]}</td>
                      <td>{row[4]}</td>
                      <td>{row[5]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
