import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="logo-area">
        <div className="tooltip">
          <i className="material-icons hover">menu</i>
          <span className="tooltip-text">Main menu</span>
        </div>

        <div className="keep-tooltip">
          <img className="keep-logo" src="./assets/keep_2020q4_48dp.png" alt="Keep-logo" />
          <span className="keep-tooltip-text">Keep</span>
        </div>

        <div className="keep-tooltip">
          <span className="keep-text">Keep</span>
          <span className="keep-tooltip-text">Keep</span>
        </div>
      </div>

      <form className="search-area">
        <div className="tooltip">
          <button>
            <i className="material-icons hover">search</i>
          </button>
          <span className="tooltip-text">Search</span>
        </div>
        <input className="search-input" type="text" placeholder="Search" />
      </form>

      <div className="settings-area">
        <div className="tooltip">
          <i className="material-icons hover">refresh</i>
          <span className="tooltip-text">Refresh</span>
        </div>

        <div className="tooltip">
          <img className="list-view hover" src="./assets/list_view.svg" alt="" />
          <span className="tooltip-text">List view</span>
        </div>

        <div className="tooltip">
          <i className="material-icons hover">settings</i>
          <span className="tooltip-text">Settings</span>
        </div>
      </div>
      <div className="profile-actions-area">
        <div className="tooltip">
          <i className="material-icons hover">apps</i>
          <span className="tooltip-text">apps</span>
        </div>

        <div className="tooltip">
          <i className="material-icons hover">account_circle</i>
          <span className="tooltip-text">Account</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
