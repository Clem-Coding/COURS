const Test = (props) => {
  const items = ["Pain", "Beurre", "Boursin"];

  return (
    <div>
      <h1>Ma liste</h1>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
