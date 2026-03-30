import image from "/src/assets/menyPage.png";

const Home = () => {
  return (
  <div className="main">

      <div className="meny-header">
          <h2>Spring tillsammans - Väx tillsammans</h2>
      </div>

      <div className="meny-home-page">
          <div className="many-home-img">
              <img src={ image } alt="Meny Page" className="menyPageImg"></img>
          </div>

          <div className="meny-home-text">
              <p className="p-header-meny-home">Din stad. Din klubb. Din utveckling</p> <br></br>
              <p className="p-text-meny-home">
              En modern och samlande plattform för löparklubbar i Sverige där föreningar och privata klubbar enkelt kan registrera sig och bli synliga för löpare i hela landet. <br></br> <br></br>
              Genom att filtrera efter stad gör vi det enkelt att hitta rätt gemenskap – oavsett om du är nybörjare, tränar för ditt första lopp eller satsar på maraton. <br></br> <br></br>
              Målet är att sänka tröskeln till organiserad löpning, stärka lokala löparcommunities och göra det lättare för människor att ta steget från att springa ensamma till att bli en del av något större.</p>
          </div>
      </div>

  </div>
);};

export default Home;