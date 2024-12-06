import "./Header.css";

function Header() {
  let title = "Mon premier exercice React";
  return (
    <header className="header">
      <h1>{title}</h1>
      <nav className="menu">
        <li>Chat</li>
        <li>Chien</li>
        <li>Oiseau</li>
      </nav>
    </header>
  );
}

export default Header;
