import SectionTitle from '../common/SectionTitle';

function Trailer() {
  return (
    <section className="section trailer-section">
      <SectionTitle title="Official Trailer" subtitle="A glimpse into the city that never sleeps." />
      <div className="trailer-frame">
        <video controls poster="/images/hero/hero.jpg">
          <source src="/videos/trailer.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Trailer;
