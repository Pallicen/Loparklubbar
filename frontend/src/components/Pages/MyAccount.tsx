import {  MapPin } from "lucide-react";
import profileImage from '../../assets/1.png'

const MyAccount = () => {
  return (
    <div className="AccountPage">
    <div className="container">

      <div className="searchUser">
        <input placeholder="Sök användare"></input>
        <button className="searchUserBtn">Sök</button>
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
              <button className="message-btn">Meddelande</button>
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

            <div>
              <button className="post-activity-Btn">Posta inlägg</button>
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