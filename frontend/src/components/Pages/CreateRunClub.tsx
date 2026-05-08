import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { api } from "../../../api";

const CreateRunClub = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");
  const [level, setLevel] = useState("Lätt");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Endast bilder är tillåtna!");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      setImage(result);
      setPreview(result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmitting(true);

    try {
      await api.runclub.create({
        name: name.trim(),
        description: description.trim(),
        socialMediaLink: socialMediaLink.trim(),
        city: city.trim(),
        time: time.trim(),
        level,
        image,
      });

      setSuccessMessage("Löparklubben har skapats.");
      setName("");
      setDescription("");
      setSocialMediaLink("");
      setCity("");
      setTime("");
      setLevel("Lätt");
      setImage("");
      setPreview(null);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Något gick fel vid skapande av löparklubben. Kontrollera dina uppgifter och försök igen."
      );
    } finally {
      setIsSubmitting(false);
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
                required
              />

              <label>Beskrivning</label>
              <textarea
                maxLength={200}
                placeholder="Max 50 ord"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <label>Sociala medier</label>
              <input
                type="url"
                value={socialMediaLink}
                onChange={(e) => setSocialMediaLink(e.target.value)}
                required
              />
            </div>

            {/* RIGHT */}
            <div className="formColumn">
              <label>Stad & Plats</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />

              <label>Dag & Tid</label>
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />

              <label>Nivå</label>
              <select value={level} onChange={(e) => setLevel(e.target.value)}>
                <option>Lätt</option>
                <option>Medel</option>
                <option>Svår</option>
              </select>

              <label>Ladda upp bild</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />

              {preview && (
                <div className="imagePreview">
                  <img src={preview} alt="Preview" />
                </div>
              )}
            </div>

          </div>

          {errorMessage && <p role="alert">{errorMessage}</p>}
          {successMessage && <p role="status">{successMessage}</p>}

          <button className="runclubBtn" type="submit" disabled={isSubmitting}>
            Lägg till klubb
          </button>

        </form>

      </div>

    </div>
  )
}

export default CreateRunClub;
