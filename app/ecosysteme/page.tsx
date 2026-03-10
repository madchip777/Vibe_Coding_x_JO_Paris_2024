import { EcosystemClient } from "../components/EcosystemClient";

export default function EcosystemePage() {
  return (
    <>
      <section className="section dark">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Écosystème JO</span>
            <h1>Gouvernance, sites, budget et héritage durable</h1>
            <p>
              Une lecture structurée de l&apos;organisation des Jeux de Paris 2024, de la
              gouvernance jusqu&apos;aux traces laissées après l&apos;événement.
            </p>
          </div>
        </div>
      </section>
      <EcosystemClient />
    </>
  );
}
