import HeroText from './HeroText';
import HeroVideo from './HeroVideo';
import ScrollDown from './ScrollDown';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-content">
        <HeroText />
        <HeroVideo />
      </div>
      <ScrollDown />
    </section>
  );
}

export default Hero;
