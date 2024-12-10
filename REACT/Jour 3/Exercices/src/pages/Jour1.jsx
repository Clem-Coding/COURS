import { useNavigate } from "react-router-dom";
import HomeButton from "../components/HomeButton";

export default function Jour1() {
  const navigate = useNavigate();
  return (
    <div>
      <HomeButton />
      <h1>Programme</h1>
      <ul>
        <li>Présentation de Vite + React</li>
        <li>Présentation Jsx et props</li>
        <li>Les states et les events</li>
        <li>Les formulaires</li>
      </ul>
    </div>
  );
}
