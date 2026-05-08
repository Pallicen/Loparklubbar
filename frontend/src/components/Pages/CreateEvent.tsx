import { useState } from "react";
import type { FormEvent } from "react";
import { api } from "../../../api";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventLink, setEventLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmitting(true);

    try {
      await api.event.create({
        title: title.trim(),
        description: description.trim(),
        eventLink: eventLink.trim(),
      });
      setSuccessMessage("Evenemanget har publicerats.");
      setTitle("");
      setDescription("");
      setEventLink("");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Något gick fel vid skapande av evenemanget. Kontrollera dina uppgifter och försök igen."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="eventFormPage">

      <div className="eventCard">

        <div className="eventFormTitle">
          <h1>Marknadsför ditt lopp</h1>
          <p>Lägg till ett event så fler löpare kan delta</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="eventInputs">

            <div className="formGroup">
              <label>Namn & datum</label>
              <input
                type="text"
                placeholder="Ex: Jönköping Trail 12 juni"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="formGroup">
              <label>Beskrivning</label>
              <textarea
                maxLength={200}
                placeholder="Max 50 ord"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="formGroup">
              <label>Anmälningslänk</label>
              <input
                type="url"
                placeholder="https://..."
                value={eventLink}
                onChange={(e) => setEventLink(e.target.value)}
                required
              />
            </div>

          </div>

          {errorMessage && <p>{errorMessage}</p>}
          {successMessage && <p>{successMessage}</p>}

          <button className="eventBtn" type="submit" disabled={isSubmitting}>
            Posta event
          </button>

        </form>

      </div>

    </div>
  )
}

export default CreateEvent;
