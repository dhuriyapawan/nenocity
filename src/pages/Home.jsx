import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/hero/Hero';
import Story from '../components/story/Story';
import CharacterGrid from '../components/characters/CharacterGrid';
import VehicleShowcase from '../components/vehicles/VehicleShowcase';
import Gallery from '../components/gallery/Gallery';
import Trailer from '../components/trailer/Trailer';
import ScrollProgress from '../components/layout/ScrollProgress';
import { characters } from '../data/characters';
import { vehicles } from '../data/vehicles';
import { galleryItems } from '../data/gallery';

function Home() {
  return (
    <div className="app-shell">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <CharacterGrid items={characters} />
        <VehicleShowcase items={vehicles} />
        <Gallery items={galleryItems} />
        <Trailer />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
