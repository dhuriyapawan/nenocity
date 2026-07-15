import SectionTitle from '../common/SectionTitle';

function VehicleShowcase({ items }) {
  return (
    <section id="vehicles" className="section">
      <SectionTitle title="Vehicles" subtitle="Precision machines for the neon horizon." />
      <div className="cards-grid">
        {items.map((item) => (
          <article key={item.name} className="glass-card card">
            <h3>{item.name}</h3>
            <p>{item.type}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default VehicleShowcase;
