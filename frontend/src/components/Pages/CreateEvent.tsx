
const CreateEvent = () => {

  return (
    <div className="eventFormPage">
      <div className="eventform">
        <div className="eventFormTitle">
          <h1>Marknadsför ditt lopp/event</h1>
        </div>

        <form>
          <div className="eventInputs">
            <label>Namn& datum på event</label>
            <input
              type="text"
            />

            <label>Beskrivning</label>
            <textarea
              placeholder="Max 50 ord"
              className="formDesciption"
            />

            <label>Länk till anmälan</label>
            <input
              type="text"
            />
          </div>

          <div className="eventFormBtn">
            <button className="eventBtn" type="submit">
              Posta
            </button>
          </div>

        </form>
      </div>
    </div>

  )

}

export default CreateEvent;