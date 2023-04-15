import "../Notes/Notes.css";

function DisplayNote({ props }) {
  return props.notes.map((note) => (
    <div className="create-note" id={note.id} key={note.id}>
      <span className="material-icons check-circle"> check_circle </span>
      <div className="create-note--title">{note.title}</div>
      <div className="create-note--text">{note.text}</div>

      <div className="create-note--footer">
        <div className="tooltip">
          <i className="material-icons hover">add_alert</i>
          <span className="tooltip-text">Remind me</span>
        </div>
        <div className="tooltip">
          <i className="material-icons hover">person_add</i>
          <span className="tooltip-text">Collaborator</span>
        </div>
        <div className="tooltip">
          <i className="material-icons hover">palette</i>
          <span className="tooltip-text">Background options</span>
        </div>

        <div className="tooltip">
          <i className="material-icons hover">image</i>
          <span className="tooltip-text">Add Image</span>
        </div>
        <div className="tooltip archive">
          <i className="material-icons hover">archive</i>
          <span className="tooltip-text">Archive</span>
        </div>
        <div className="tooltip">
          <i className="material-icons hover">more_vert</i>
          <span className="tooltip-text">More</span>
        </div>
      </div>
    </div>
  ));
}
export default DisplayNote;
