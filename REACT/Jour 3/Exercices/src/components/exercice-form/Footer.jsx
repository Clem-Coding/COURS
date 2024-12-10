import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Header({ copyright }) {
  return (
    <footer className="form-footer">
      <p>{copyright}</p>
      <p>Me retrouver sur les réseaux : </p>
      <div className="social">
        <a href="https://github.com/Clem-Coding" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" className="fabrands" />
        </a>
        <a href="https://facebook.com/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} size="2x" className="fabrands" />
        </a>
        <a href="https://instagram.com/" target="_blank" className="fabrands">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </footer>
  );
}
