function GalleryItem({ item }) {
  return (
    <div className="glass-card gallery-item">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
}

export default GalleryItem;
