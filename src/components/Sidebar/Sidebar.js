import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="side-bar">
      <div className="side-bar-items active-item">
        <span className="material-symbols-outlined hover active"> lightbulb </span>
        <span className="side-bar-items--text">Notes</span>
      </div>
      <div className="side-bar-items">
        <span className="material-symbols-outlined hover"> notifications </span>
        <span className="side-bar-items--text">Reminders</span>
      </div>
      <div className="side-bar-items">
        <span className="material-symbols-outlined hover"> edit </span>
        <span className="side-bar-items--text">Edit Labels</span>
      </div>
      <div className="side-bar-items">
        <span className="material-symbols-outlined hover"> archive </span>
        <span className="side-bar-items--text">Archive</span>
      </div>
      <div className="side-bar-items">
        <span className="material-symbols-outlined hover"> delete </span>
        <span className="side-bar-items--text">Trash</span>
      </div>
    </aside>
  );
}

export default Sidebar;
