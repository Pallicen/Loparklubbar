import image from "/src/assets/3.png";

const Home = () => {
  return (
  <div>

      <div className="meny-header">
          <p>Spring tillsammans - Väx tillsammans</p>
      </div>

      <div className="affärsplan-sammanfattning">
        <p>RunWithUs är en digital plattform som samlar Sveriges löparklubbar på ett och samma ställe. Plattformen gör
det enkelt för privatpersoner att hitta, jämföra och ansluta sig till löparklubbar i sin stad. Idag är löparklubbar
utspridda över sociala medier eller lokala forum som gör dem svåra att hitta, speciellt för nyinflyttade eller
personer som vill börja springa men saknar nätverk. Samtidigt ökar ensamheten och stillasittandet i Sverige.
På RunWithUs ska löparklubbar kunna registrera sig och marknadsföra sitt team, användare ska enkelt kunna
filtrera klubbar baserat på stad och nivå, event ska kunna skapas både av administratör och av löparklubbar och
samarbeten med andra lopp ska även ge en ökad synlighet. Detta ska bli ett levande community.
Intäkter genereras genom profiler för löparklubbar, annonsering för lopp och arrangörer, partnerskap och
sponsring och eventavgifter.
Visionen är att RunWithUs ska bli Sveriges ledande plattform för löpargemenskap. Vi vill bidra till ökad fysisk
aktivitet, gemenskap och minskad ensamhet.</p>
      </div>

      <div className="meny-home-page">
          <div className="meny-home-img">
              <img src={ image } alt="MenyPage" className="menyPageImg" />
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
);};

export default Home;