import { useState } from "react";
import { api } from "../../../api";

const CreateRunClub = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [level, setLevel] = useState("Lätt");
  const [time, setTime] = useState("");
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const [image, setImage] = useState("");

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Endast bilder är tillåtna!");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

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
        image
      });

      alert("Runclub skapad!");

      setName("");
      setDescription("");
      setCity("");
      setLevel("Lätt");
      setTime("");
      setSocialMediaLink("");

      setImage(null);
      setPreview(null);

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

              <label>Stad & Plats</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <label>Dag & Tid</label>
              <input
                type="text"
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

              <label>Ladda upp bild</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />

              {preview && (
                <div className="imagePreview">
                  <img src={preview} alt="Preview" />
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