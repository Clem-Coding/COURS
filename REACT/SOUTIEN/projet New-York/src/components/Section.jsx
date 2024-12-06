import "./Section.scss";

function Section(props) {
  return (
    <section>
      <h2 id={props.id}>{props.titre}</h2>
      <img
        src={props.image}
        alt={props.imageAlt}
        className={props.imageClass}
      />
      {props.children}
    </section>
  );
}

export default Section;
