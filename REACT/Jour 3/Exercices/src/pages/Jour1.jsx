import { useNavigate } from "react-router-dom";

export default function Jour1() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      <h1>test</h1>
    </div>
  );
}
