import { useState } from 'react';

const CreateRunClub = () => {
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Endast bilder är tillåtna!");
      return;
    }

    setImage(file)
    setPreview(URL.createObjectURL(file))
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    if (image) formData.append("image", image);

    console.log("Skickar:", formData);
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
              <input type="text" />

              <label>Beskrivning</label>
              <textarea maxLength={200} placeholder="Max 50 ord" />

              <label>Sociala medier</label>
              <input type="text" />
            </div>

            {/* RIGHT */}
            <div className="formColumn">
              <label>Stad & Plats</label>
              <input type="text" />

              <label>Dag & Tid</label>
              <input type="text" />

              <label>Nivå</label>
              <select>
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

          <button className="runclubBtn" type="submit">
            Lägg till klubb
          </button>

        </form>

      </div>

    </div>
  )
}

export default CreateRunClub;