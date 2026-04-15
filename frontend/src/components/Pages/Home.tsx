
import LoginMeny from "../LoginMeny";
import image1 from "/src/assets/3.png";

const Home = () => {
  return (
  <div className="home1">


    {/* FIRST STARTPAGE */}
    <div className="home-page">
      <div className="home-page1">

              <div className="overlay">

                <LoginMeny />

                <div className="text-overlay">
                    <h1 className="title">Sveriges Löparklubbar</h1>
                    <p className="p-loparminnen">Skapa löparminnen du aldrig glömmer.</p>
                    <p>Upptäck löpargemenskapen nära dig! Vi samlar Sveriges löparklubbar & lopp på en och samma plattform så att du enkelt kan hitta rätt grupp i din stad. Oavsett om du är nybörjare, tränar inför ditt första lopp eller satsar på maraton finns det en klubb för dig.</p>
                </div>
             </div>
        </div>
    </div>


    {/* SECOND STARTPAGE */}

    <div className="home">

      <div className="meny-header">
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


  </div>
);};

export default Home;