
import { useState } from "react";
import RunclubList from "./RunclubList";


const Runclubs = () => {

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  

  return (
    <div className="runclub">

      <div className="runclubTitle">
        <p>Löparklubbar</p>
      </div>

    <div className="runclub-container">

      <div className="filter-container">
        <div className="filter">

          <div className="selectWrapper">
          <label>Stad</label>
          <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Välj</option>
            <option value="Jönköping">Jönköping</option>
            <option value="Göteborg">Göteborg</option>
            <option value="Värnamo">Värnamo</option>
            <option value="Stockholm">Stockholm</option>
            <option value="Linköping">Linköping</option>
            <option value="Gävle">Gävle</option>
            <option value="Sundsvall">Sundsvall</option>
            <option value="Luleå">Luleå</option>
            <option value="Malmö">Malmö</option>
            <option value="Malmö">Örebro</option>
            <option value="Karlstad">Karlstad</option>
            <option value="Lidköping">Lidköping</option>
            <option value="Piteå">Piteå</option>
            <option value="Borås">Borås</option>
            <option value="Lund">Lund</option>
            <option value="Kristianstad">Kristianstad</option>
            <option value="Uddevalla">Uddevallla</option>
            <option value="Halmstad">Halmstad</option>
            <option value="Västerås">Västerås</option>
            <option value="Kalmar">Kalmar</option>
            <option value="Karlskrona">Karlskrona</option>
            <option value="Leksand">Leksand</option>
            <option value="Idre">Idre</option>
            <option value="Uppsala">Uppsala</option>
          </select>
          </div>

          <div className="selectWrapper">
          <label>Nivå</label>
          <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="">Välj</option>
            <option value="Lätt">Lätt</option>
            <option value="Medel">Medel</option>
            <option value="Svår">Svår</option>
          </select>
          </div>


          <div className="freeCheckbox">
            <label className="checkboxLabel"> Kostnadsfria
            <input className="check" type="checkbox" />
            </label>
          </div>


        </div>
      </div>

      <div>
          <RunclubList selectedCity={selectedCity} selectedLevel={selectedLevel}/>
        </div>
      </div>

    </div>

  )
};

export default Runclubs;