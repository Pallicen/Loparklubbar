import RunclubCard from "../RunclubCard";


const Runclubs = () => {
  return (
    <div>

      <div className="runclubTitle">
        <p>Löparklubbar</p>
      </div>

      <div className="pruduktIde-beskrivning">
        <p>Här finns en grundstruktur på det som kommer visas på sidan. 
          Projektidén är att de som har en löparklubb eller de som arrangerar ett lopp ska kunna marknadsföra det på sidan och att plattformen ska bli en självklar sida för löpare att gå in på. 
          En användare/klubb/förening behöver skapa och registrera ett konto, logga in och sedan fylla i uppgifter för att lägga till sin löparklubb på sidan (under löparklubbar). 
          För att lägga upp ett lopp/event behöver användare också vara inloggad och fylla i ett formulär för att sedan publicera det på sidan (under events). 
          För mer utveckling av plattformen vill jag även utveckla med ett användarkonto för privatpersoner med funktion att kunna dela upplevelser och integrera med varandra.</p>
      </div>

    <div className="runclub-container">
      <div className="filter-container">
        <div className="filter">

          <div className="selectWrapper">
          <label>Stad</label>
          <select> 
            <option value="Jönköping">Jönköping</option>
            <option value="Göteborg">Göteborg</option>
            <option value="Värnamo">Värnamo</option>
            <option value="Stockholm">Stockholm</option>
            <option value="Linköping">Linköping</option>
            <option value="Gävle">Gävle</option>
            <option value="Sundsvall">Sundsvall</option>
            <option value="Luleå">Luleå</option>
            <option value="Malmö">Malmö</option>
          </select>
          </div>

          <div className="selectWrapper">
          <label>Nivå</label>
          <select>
            <option>Lätt</option>
            <option>Medel</option>
            <option>Svår</option>
          </select>
          </div>

          <label className="checkboxLabel"> Kostnadsfria
            <input type="checkbox" />
          </label>


        </div>
      </div>

      <div>
        <RunclubCard title={""} description={""} city={""} level={""} when={""} socialMediaLink={""} image={""} />
      </div>
    </div>

    </div>

  )
};

export default Runclubs;