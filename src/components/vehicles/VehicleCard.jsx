function VehicleCard({ item }) {
  return (
    <article className="glass-card card">
      <h3>{item.name}</h3>
      <p>{item.type}</p>
    </article>
  );
}

export default VehicleCard;
