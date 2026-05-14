import { useState } from "react";
import { api } from "../../../api";

const CreateRunClub = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [level, setLevel] = useState("Lätt");
  const [time, setTime] = useState("");
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  console.log("Vald fil: ", selectedFile);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {

      await api.createRunclub({
        name,
        description,
        city,
        level,
        time,
        socialMediaLink,
        image : previewUrl
      });

      alert("Runclub skapad!");

      setName("");
      setDescription("");
      setCity("");
      setLevel("Lätt");
      setTime("");
      setSocialMediaLink("");
      setSelectedFile(null);
      setPreviewUrl("");
    } catch (err) {
      console.error(err);
      alert("Något gick fel");
    }
  };

  return (
    <div className="runclubFormPage">

      <div className="runclubCard">

        <div className="runclubFormTitle">
          <h1>Lägg till löparklubb</h1>
          <p>Fyll i informationen nedan för att skapa din klubb</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="splitForm">

            {/* LEFT */}
            <div className="formColumn">

              <label>Namn på löparklubb</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Beskrivning</label>
              <textarea
                maxLength={200}
                placeholder="Max 50 ord"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <label>Sociala medier</label>
              <input
                type="text"
                value={socialMediaLink}
                onChange={(e) => setSocialMediaLink(e.target.value)}
              />

            </div>

            {/* RIGHT */}
            <div className="formColumn">

              <label>Stad</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="Jönköping">Jönköping</option>
                <option value="Göteborg">Göteborg</option>
                <option value="Värnamo">Värnamo</option>
                <option value="Stockholm">Stockholm</option>
                <option value="Linköping">Linköping</option>
                <option value="Gävle">Gävle</option>
                <option value="Sundsvall">Sundsvall</option>
                <option value="Luleå">Luleå</option>
                <option value="Malmö">Malmö</option>
                <option value="Örebro">Örebro</option>
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

              <label>Dag, tid & plats</label>
              <input
                type="text"
                placeholder="Ex: Onsdagar 17.00, Slottsparken"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />

              <label>Nivå</label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="Lätt">Lätt</option>
                <option value="Medel">Medel</option>
                <option value="Svår">Svår</option>
              </select>

              <label>Bild (URL)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  setSelectedFile(file);
                  setPreviewUrl(URL.createObjectURL(file));
                }}
              />
              {previewUrl && (
                <div>
                  <img src={previewUrl} alt="Förhandsvisning" width={150} />
                </div>
              )}

            </div>

          </div>

          <button className="runclubBtn" type="submit">
            Lägg till klubb
          </button>

        </form>

      </div>

    </div>
  );
};

export default CreateRunClub;