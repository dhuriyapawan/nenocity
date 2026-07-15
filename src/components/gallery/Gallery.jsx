import SectionTitle from '../common/SectionTitle';

function Gallery({ items }) {
  return (
    <section id="gallery" className="section">
      <SectionTitle title="Gallery" subtitle="A visual journey through the neon skyline." />
      <div className="gallery-grid">
        {items.map((item) => (
          <div key={item.title} className="glass-card gallery-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
