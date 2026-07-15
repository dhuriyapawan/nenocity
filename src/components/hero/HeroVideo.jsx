function HeroVideo() {
  return (
    <div className="hero-video-card">
      <video autoPlay muted loop playsInline poster="/images/hero/hero.jpg">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default HeroVideo;
