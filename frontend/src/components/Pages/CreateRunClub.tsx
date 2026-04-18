import { useState } from 'react';


const CreateRunClub = () => {

  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleImageChange = (e : React.ChangeEvent<HTMLInputElement>) => {
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

    if (image) {
      formData.append("image", image);
    }

    console.log("Skickar:", formData);
  };

return (
  <div className="runclubFormPage">
      <div className="runclubform">

        <div className="runclubFormTitle">
          <h1>Lägg till löparklubb</h1>
        </div>

        <form onSubmit={handleSubmit}>
        <div className="splitForm">
          <div className="runclubInputsLeft">
            <label>Namn på löparklubb</label>
            <input
              type="text"
            />

            <label>Beskrivning</label>
            <textarea
              placeholder="Max 50 ord"
              className="formDesciption"
            />
            <label>Länk till sociala media</label>
            <input
              type="text"
            />
          </div>

          <div className="runclubInputsRight">
            <label>Stad & Plats</label>
            <input
              type="text"
            />
            <label>Dag & Tid</label>
            <input
              type="text"
            />
          <div className="selectWrapper">
            <label htmlFor="level">Välj nivå:</label>
            <select className="level">
                <option value="Lätt">Lätt</option>
                <option value="Medel">Medel</option>
                <option value="Svår">Svår</option>
            </select>
          </div>

          <div className="selectWrapper">
            <label htmlFor="level">Ladda upp bild</label>
            <input
              type='file'
              accept='image/*'
              onChange={handleImageChange}
            />

          {preview && (
            <img
            src={preview}
            alt='Preview'
            style={{ width: "200px", marginTop: "10px" }}
            />
          )}


          </div>
          
            <div className="runclubFormBtn">
              <button className="runclubBtn" type="submit">
                Lägg till
              </button>
            </div>
          </div>
        </div>

        </form>

      </div>
    </div>
  )
}

export default CreateRunClub;