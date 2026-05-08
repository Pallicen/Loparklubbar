import { MapPin } from "lucide-react";
import profileImage from '../../assets/1.png'

const MyAccount = () => {
  return (
    <div className="AccountPage">
    <div className="container">

      <div>
        <input placeholder="Sök användare"></input>
      </div>

        {/* PROFILE CARD */}
        <div className="card profile-card">
          <div className="profile-main">
            <img
              src={profileImage}
              alt="profile"
              className="avatar"
            />

            <div className="profile-info">
              <div className="profile-header">
                <h2>Anna Svensson</h2>
                <button className="primary-btn">Följ</button>
              </div>

              <div className="location">
                <MapPin size={16} />
                <span>Jönköping</span>
              </div>

              <p className="bio">
                Tränar för halvmaraton 🏃‍♀️
              </p>
            </div>
          </div>
        </div>
      
      {/* GRID */}
        <div className="grid">

          {/* ACTIVITY */}
          <div className="column">
            <h3>Aktivitet</h3>

            <div className="card">
              <span className="muted">Igår</span>
              <p>Gick med i Jönköping Running Club</p>
            </div>
          </div>

        {/* SIDEBAR */}
          <div className="column">

            <div className="card">
              <h3>Kommande lopp</h3>
              <p className="bold">Göteborgsvarvet</p>
              <span className="muted">21 maj</span>
            </div>

            <div className="card">
              <h3>Löpare nära dig</h3>

              <div className="list-item">
                <span>Erik Johansson</span>
                <button className="secondary-btn">Följ</button>
              </div>

              <div className="list-item">
                <span>Lisa Karlsson</span>
                <button className="secondary-btn">Följ</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount