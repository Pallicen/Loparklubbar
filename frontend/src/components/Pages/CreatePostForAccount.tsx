import { useState } from "react";


const CreatePostForAccount = () => {

  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  console.log("Vald fil: ", selectedFile);

  return (
    <div className="create-post-form-page">

    <div className="create-post-form">

      <div className="img-post">
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
              <img src={previewUrl} alt="Förhandsvisning" width={400} />
            </div>
          )}
      </div>

      <div className="desciption-post">
        <label>Beskrivning</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="post-btn">
        <button className="post-activity-Btn">Dela</button>
      </div>

    </div>

  </div>
  
  )
}

export default CreatePostForAccount
