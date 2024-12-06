function Article(props) {
  return (
    <article>
      <h3>{props.titre}</h3>
      <img src={props.image} alt={props.imageAlt} className={props.class} />
      <div className="content">{props.children}</div>
    </article>
  );
}

export default Article;
