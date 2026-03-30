import { Link } from "react-router-dom"

const Meny = () => {
  return (
    <nav className="navbar">
      <Link className="btnLinkHome" to="/">Hem</Link>
      <Link className="btnLinkRunclub" to="/Runclubs">Löparklubbar</Link>
      <Link className="btnLinkEvent" to="/Events">Event</Link>
    </nav>
  );
};

export default Meny;