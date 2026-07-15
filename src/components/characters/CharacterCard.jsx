function CharacterCard({ item }) {
  return (
    <article className="glass-card card">
      <h3>{item.name}</h3>
      <p>{item.role}</p>
    </article>
  );
}

export default CharacterCard;
