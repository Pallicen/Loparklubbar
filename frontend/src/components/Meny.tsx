import { Link } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from "../auth/context";

const Meny = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const { session } = useAuth();
  const isLoggedIn = !!session;
    

  return (

    <nav className="navbar">

      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
      </div>

      {isLoggedIn ? (
        <>
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <Link className="btnLinkHome" onClick={toggleMenu} to="/">Hem</Link>
          <Link className="btnLinkRunclub" onClick={toggleMenu} to="/Runclubs">Löparklubbar</Link>
          <Link className="btnLinkEvent" onClick={toggleMenu} to="/Events">Event</Link>
          <Link className="createRunClubBtn" to="/CreateRunClub">+ Löparklubb</Link>
          <Link className="createEventBtn" to="/CreateEvent">+ Lopp</Link>
          <Link className="btnLinkMyAccount" to="/MyAccount">Profil</Link>
       </div>
        </>
      ) : (
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <Link className="btnLinkHome" onClick={toggleMenu} to="/">Hem</Link>
          <Link className="btnLinkRunclub" onClick={toggleMenu} to="/Runclubs">Löparklubbar</Link>
          <Link className="btnLinkEvent" onClick={toggleMenu} to="/Events">Event</Link>
      </div>
      )}


      {isLoggedIn ? (
        <>
        <div className="desktop-menu">
          <Link className="btnLinkHome" to="/">Hem</Link>
          <Link className="btnLinkRunclub" to="/Runclubs">Löparklubbar</Link>
          <Link className="btnLinkEvent" to="/Events">Event</Link>
          <Link className="btnLinkMyAccount" to="/MyAccount">Profil</Link>
          <div className="createBtns">
              <Link className="createRunClubBtn" to="/CreateRunClub">+ Löparklubb</Link>
              <Link className="createEventBtn" to="/CreateEvent">+ Lopp</Link>
          </div>
        </div>
      </>
      ) : (

      <div className="desktop-menu">
          <Link className="btnLinkHome" to="/">Hem</Link>
          <Link className="btnLinkRunclub" to="/Runclubs">Löparklubbar</Link>
          <Link className="btnLinkEvent" to="/Events">Event</Link>
      </div>
      )}

    </nav>
  );
};

export default Meny;

       