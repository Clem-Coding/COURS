export default function Header({ logoSrc, siteTitle }) {
  return (
    <header className="form-header">
      <img src={logoSrc} className="form-icon" />
      <h1>{siteTitle}</h1>
    </header>
  );
}
