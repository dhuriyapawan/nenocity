import SectionTitle from '../common/SectionTitle';

function CharacterGrid({ items }) {
  return (
    <section id="characters" className="section">
      <SectionTitle title="Characters" subtitle="Meet the people who define the city." />
      <div className="cards-grid">
        {items.map((item) => (
          <article key={item.name} className="glass-card card">
            <h3>{item.name}</h3>
            <p>{item.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CharacterGrid;
