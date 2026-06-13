
import { useState } from "react";

type PostFormValues = {
  description: string;
  file: File | null;
};

function revokeBlobUrl(url: string) {
  if (url.startsWith("blob:")) {
    URL.revokeObjectURL(url);
  }
}

type PostFormProps = {

  //Rubrik till formuläret
  title?: string;

  //Text på submit-knappen
  submitLabel?: string;

  //Placeholdertext för beskrivning
  descriptionPlaceholder?: string;

  //Maxbredd på förhandsvisning
  previewWidth?: number;

  // Callback som körs när formuläret skickas.
  onSubmit?: (values: PostFormValues) => void | Promise<void>;
};

// PostForm är en formulärkomponent för att skapa inlägg med text och valfri bild.

// Komponenten är byggd för att kunna användas i andra applikationer där man vill:
//  - skriva en text
//  - välja en bild från datorn
//  - visa en förhandsvisning innan publicering
//  - hantera submit via en extern callback
// 
//  Den har även funktionalitet för:
//  - hantering av formulärstate med React hooks
//  - filuppladdning via input type="file"
//  - lokal bildförhandsvisning
 

const PostForm = ({
  title = "Skapa inlägg",
  submitLabel = "Publicera",
  descriptionPlaceholder = "Skriv något... ",
  previewWidth = 400,
  onSubmit,
}: PostFormProps) => {
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  const values: PostFormValues = {
    description,
    file: selectedFile,
  };

  if (onSubmit) {
    await onSubmit(values)
  }

  setDescription("")
  setSelectedFile(null);
  revokeBlobUrl(previewUrl);
  setPreviewUrl("");
}


  console.log("Vald fil: ", selectedFile);

  return (
    <div className="create-post-form-page">

    <div className="create-post-form">
      <h3><strong>{title}</strong></h3>

    <form onSubmit={handleSubmit}>
      <div className="img-post">
      <label htmlFor="post-image">Bild (URL)</label>
          <input
          id="post-image"
            type="file"
            accept="image/*"
            onChange={(e) => {
            const file = e.target.files?.[0] ?? null;

              if (!file) {
                setSelectedFile(null);
                revokeBlobUrl(previewUrl);
                setPreviewUrl("");
                return;
              }

              if (previewUrl) {
                revokeBlobUrl(previewUrl);
              }

              const objectUrl = URL.createObjectURL(file);
              setSelectedFile(file);
              setPreviewUrl(objectUrl);
            }}
          />
          {previewUrl && (
            <div>
              <img src={previewUrl} alt="Förhandsvisning" width={previewWidth} />
            </div>
          )}
      </div>

        <div className="desciption-post">
          <label htmlFor="post-description">Beskrivning</label>
            <textarea
            id="post-description"
              value={description}
              placeholder={descriptionPlaceholder}
              onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="post-btn">
          <button type="submit" className="post-activity-Btn">{submitLabel}</button>
        </div>

      </form>
    </div>
  </div>
  
  )
}

export default PostForm
