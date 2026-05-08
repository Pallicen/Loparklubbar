import { useEffect, useState } from "react";
import RunclubCard from "../RunclubCard";
import { api } from "../../../api";
import type { RunclubDto } from "../../../api";


const Runclubs = () => {
  const [runclubs, setRunclubs] = useState<RunclubDto[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadRunclubs = async () => {
      try {
        const data = await api.runclub.list();
        setRunclubs(data);
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : "Kunde inte hämta löparklubbar.");
      }
    };

    void loadRunclubs();
  }, []);

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


          <div className="freeCheckbox">
            <label className="checkboxLabel"> Kostnadsfria
            <input className="check" type="checkbox" />
            </label>
          </div>


        </div>
      </div>

      <div>
        {errorMessage && <p>{errorMessage}</p>}
        {runclubs.map((runclub) => (
          <RunclubCard
            key={runclub.id}
            title={runclub.name}
            description={runclub.description}
            city={runclub.city}
            level={runclub.level}
            when={runclub.time}
            socialMediaLink={runclub.socialMediaLink}
            image={runclub.image}
          />
        ))}
      </div>
    </div>

    </div>

  )
};

export default Runclubs;
