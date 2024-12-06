import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faPinterestSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="clear">
      <aside className="reseaux">
        <h3>Nous retrouver sur les réseaux sociaux</h3>
        <a href="https://facebook.com">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a href="https://pinterest.com">
          <FontAwesomeIcon icon={faPinterestSquare} />
        </a>
        <a href="https://instagram.com">
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
      </aside>
      <p>
        <img src="img/logo-3wa.png" alt="Logo de la 3WA" />
      </p>
      <p className="copyright">
        <a
          href="https://3wa.fr/propriete-materiel-pedagogique/"
          target="_blank"
          rel="noopener noreferrer"
          title="S'ouvre dans une nouvelle fenêtre vers le site de la 3WA"
        >
          &copy; Ce matériel pédagogique est la propriété de la 3W Academy.
        </a>
      </p>
      <p>Cet exercice a été réalisé par Catherine Denos.</p>
    </footer>
  );
};

export default Footer;
