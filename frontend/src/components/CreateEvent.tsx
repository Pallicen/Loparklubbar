
import { useState } from "react";
import { api } from "../api";

const CreateEvent = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [distance, setDistance] = useState("");
  const [eventLink, setEventLink] = useState("");

  async function handleSubmit(e: React.FormEvent)
  {
    e.preventDefault();
 

  try {
      await api.createEvent({
        title,
        description,
        distance,
        eventLink
      })
        alert("Event skapat!");

        setTitle(""),
        setDescription(""),
        setDistance(""),
        setEventLink("")
      } catch (err) {
        console.error(err)
        alert("Något gick fel");
      }
  }

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
              />
            </div>

            <div className="formGroup">
              <label>Beskrivning</label>
              <textarea 
              maxLength={200} 
              placeholder="Max 50 ord"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
               />
            </div>

            <div className="formGroup">
                <label>Distans(km)</label>
                <select
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                >
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="5-10">5-10</option>
                  <option value="10">10</option>
                  <option value="10-15">11-14</option>
                  <option value="15">15</option>
                  <option value="15-20">15-20</option>
                  <option value="21">21</option>
                  <option value="22-30">22-30</option>
                  <option value="30-41">30-41</option>
                  <option value="42">42</option>
                  <option value="43-50">43-50</option>
                  <option value="51-60">51-60</option>
                  <option value="92">92</option>
                  <option value="100">100</option>
                </select>
            </div>

            <div className="formGroup">
              <label>Anmälningslänk</label>
              <input 
              type="text" 
              placeholder="https://..." 
              value={eventLink}
              onChange={(e) => setEventLink(e.target.value)}
              />
            </div>

          </div>

          <button className="eventBtn" type="submit">
            Posta event
          </button>

        </form>

      </div>

    </div>
  )
}

export default CreateEvent;