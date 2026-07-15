import Button from '../common/Button';

function HeroText() {
  return (
    <div className="hero-text">
      <p className="eyebrow">FUTURE OF THE CITY</p>
      <h1>Neon City awakens after dark.</h1>
      <p>
        Step into a cinematic skyline where lights, motion, and myth collide.
      </p>
      <div className="hero-actions">
        <Button>Watch Trailer</Button>
        <Button variant="secondary">Explore Characters</Button>
      </div>
    </div>
  );
}

export default HeroText;
