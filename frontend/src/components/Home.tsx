
import LoginMeny from "./LoginMeny";
import image1 from "/src/assets/3.png";
import { useAuth } from "../auth/useAuth";
import imageStrava from "/src/assets/stravaLog.png";
import imageNike from "/src/assets/nikeLog.png";
import imageGbv from "/src/assets/gbv-event.png";
import imagenordicwellness from "/src/assets/nordicwellness.png";
import imagelidingoloppet from "/src/assets/lidingoloppet.png";
import instaIcon from "/src/assets/instagram-2.png";
import mailIcon from "/src/assets/mail.png";
import messageIcon from "/src/assets/messenger.png";
import { Link } from "react-router-dom";

const Home = () => {

  const { session } = useAuth();
  const isLoggedIn = !!session;

  console.log("Inloggad: ", isLoggedIn);


  return (
  <div className="home1">

    {/* FIRST STARTPAGE */}
    <div className="home-page">
      <div className="home-page1">

              <div className="overlay">

                <LoginMeny />

        {isLoggedIn ? (
        <>
        <div className="createBtns">
          <Link className="createRunClubBtn" to="/CreateRunClub">+ Löparklubb</Link>
          <Link className="createEventBtn" to="/CreateEvent">+ Lopp</Link>
        </div>
          </>
          ) : (
          <div>
          </div>
          )}

                <div className="text-overlay">
                    <h1 className="title">Sveriges Löparklubbar</h1>
                    <p className="p-loparminnen">Skapa löparminnen du aldrig glömmer.</p>
                    <p>Upptäck löpargemenskapen nära dig! Vi samlar Sveriges löparklubbar & lopp på en och samma plattform så att du enkelt kan hitta rätt grupp i din stad. Oavsett om du är nybörjare, tränar inför ditt första lopp eller satsar på maraton finns det en klubb för dig.</p>
                </div>
              </div>
          </div>
    </div>


    {/* SECOND STARTPAGE */}

    <div className="page2">

      <div className="run-together-header">
          <p>Spring tillsammans - Väx tillsammans</p>
      </div>

      <div className="meny-home-page">
          <div className="meny-home-img">
              <img src={ image1 } alt="MenyPage" className="menyPageImg" />
          </div>

          <div className="meny-home-text">
              <p className="p-header-meny-home">Din stad. Din klubb. Din utveckling.</p> <br></br>
              <p className="p-text-meny-home">
              En modern och samlande plattform för löparklubbar i Sverige där föreningar och privata klubbar enkelt kan registrera sig och bli synliga för löpare i hela landet. <br></br> <br></br>
              Genom att filtrera efter stad gör vi det enkelt att hitta rätt gemenskap – oavsett om du är nybörjare, tränar för ditt första lopp eller satsar på maraton. <br></br> <br></br>
              Målet är att sänka tröskeln till organiserad löpning, stärka lokala löparcommunities och göra det lättare för människor att ta steget från att springa ensamma till att bli en del av något större.</p>
          </div>
      </div>

    </div>

    {/* THIRD STARTPAGE */}

    <div className="page3">

      <div className="split-prenumeration-bg">


        <div className="prenumerationDiv">
          <div className="prenumeration-text">
            <p>Prenumerera på våra nyhetsbrev</p>
            <input type="text" placeholder="E-post"></input>
            <button className="loginBtn" type="submit">Prenumerera</button>
          </div>
        </div>

        <div className="prenumerationIMG">

        </div>

    </div>

   </div>

    {/* FOURTH STARTPAGE */}

    <div className="page4">

      <div className="split-contact">


        <div className="contactDiv">
            <strong>Kontakt</strong>
            <div className="icon"><img src={mailIcon} alt="E-post Ikon"/><p>runwithus@gmail.se</p></div>
            <div className="icon"><img src={messageIcon} alt="Meddelande Ikon"/><p>070-884 46 77</p></div>
            <div className="icon"><img src={instaIcon} alt="Instagram Ikon"/><p>Instagram</p></div>
        </div>

        <div className="contactDiv">
            <div className="partnership">
            <span>I samarbete med</span>
            <img src={imageStrava} alt="stravabild"/>
            <img src={imageNike} alt="nikebild"/>
            <img src={imageGbv} alt="göteborgsvarvetbild"/>
            <img src={imagenordicwellness} alt="nordicwellnessbild"/>
            <img src={imagelidingoloppet} alt="lidingoloppetbild"/>
          </div>
        </div>

    </div>

   </div>

  </div>
);};

export default Home;