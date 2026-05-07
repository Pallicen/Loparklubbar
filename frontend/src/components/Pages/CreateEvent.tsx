const CreateEvent = () => {

  return (
    <div className="eventFormPage">

      <div className="eventCard">

        <div className="eventFormTitle">
          <h1>Marknadsför ditt lopp</h1>
          <p>Lägg till ett event så fler löpare kan delta</p>
        </div>

        <form>

          <div className="eventInputs">

            <div className="formGroup">
              <label>Namn & datum</label>
              <input type="text" placeholder="Ex: Jönköping Trail 12 juni" />
            </div>

            <div className="formGroup">
              <label>Beskrivning</label>
              <textarea maxLength={200} placeholder="Max 50 ord" />
            </div>

            <div className="formGroup">
              <label>Anmälningslänk</label>
              <input type="text" placeholder="https://..." />
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