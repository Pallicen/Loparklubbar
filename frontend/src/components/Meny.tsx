import { Link } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from "../auth/useAuth";
import { useEffect } from "react";

const Meny = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const { session } = useAuth();
  const isLoggedIn = !!session;

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);
    

  return (
    <div className="navbarDiv">

    <nav className="navbar">

      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bars">
            <div></div>
            <div className="bar1"></div>
            <div className="bar2"></div>
        </div>
      </div>

      {isLoggedIn ? (
        <>
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <Link className="btnLinkHome" onClick={toggleMenu} to="/">Hem</Link>
          <Link className="btnLinkRunclub" onClick={toggleMenu} to="/Runclubs">Löparklubbar</Link>
          <Link className="btnLinkEvent" onClick={toggleMenu} to="/Events">Event</Link>
          <Link className="createRunClubBtn" onClick={toggleMenu} to="/CreateRunClub">+ Löparklubb</Link>
          <Link className="createEventBtn" onClick={toggleMenu} to="/CreateEvent">+ Lopp</Link>
          <Link className="btnLinkMyAccount" onClick={toggleMenu} to="/MyAccount">Profil</Link>
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
    </div>
  );
};

export default Meny;

       