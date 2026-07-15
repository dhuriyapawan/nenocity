import SectionTitle from '../common/SectionTitle';

function Story() {
  return (
    <section id="story" className="section story-section">
      <SectionTitle title="The Pulse of Neon City" subtitle="A city built on light, rhythm, and reinvention." />
      <div className="story-grid">
        <div className="glass-card">
          <h3>Rise of the Skyline</h3>
          <p>The city glows through the night as towers hum with energy and every avenue carries a new story.</p>
        </div>
        <div className="glass-card">
          <h3>Voices in Motion</h3>
          <p>From couriers to champions, each resident shapes the pulse of the metropolis with daring and grace.</p>
        </div>
      </div>
    </section>
  );
}

export default Story;
