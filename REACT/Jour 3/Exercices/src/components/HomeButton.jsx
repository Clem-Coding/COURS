import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function HomeButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/")}>
      <FontAwesomeIcon
        icon={faHome}
        style={{ color: "white", fontSize: "20px", marginRight: "8px" }}
      />
      Home
    </button>
  );
}
