import Link from "next/link";
import { OlympicRings } from "./components/OlympicRings";
import { homeCards } from "./content";

export default function HomePage() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-card">
          <span className="eyebrow">Accueil</span>
          <h1>JO Paris 2024 — Tableau de bord interactif</h1>
          <p>
            Explorez l&apos;écosystème, les performances, l&apos;héritage et les innovations des Jeux
            Olympiques de Paris 2024 dans une expérience multi-pages pensée pour Vercel.
          </p>
          <div className="hero-actions">
            <Link href="/ecosysteme" className="button">
              Explorer l&apos;écosystème
            </Link>
            <Link href="/performances" className="ghost-button">
              Voir les performances
            </Link>
          </div>
        </div>
        <div className="hero-card" style={{ textAlign: "center" }}>
          <OlympicRings />
          <p className="muted">
            Une interface cohérente pour relier gouvernance, résultats sportifs, héritage
            territorial et innovations technologiques.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="feature-grid">
          {homeCards.map((card) => (
            <Link key={card.href} href={card.href} className="feature-card">
              <span className={`badge ${card.accent}`}>{card.title}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <span className="arrow">Accéder à la page</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
