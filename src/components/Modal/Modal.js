import "../FormActive/FormActive.css";
import "./Modal.css";

function Modal() {
  return (
    <div className="modal">
      <div className="modal-content">
        <form className="form-container modal-active-form" id="modal-form">
          <input id="modal-note-title" className="note-title" type="text" placeholder="Title" />
          <input id="modal-input-note" className="input-note" type="text" placeholder="Take a note..." />
          <div className="form-actions">
            <div className="icons">
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
              <div className="tooltip">
                <i className="material-icons hover">archive</i>
                <span className="tooltip-text">Archive</span>
              </div>
              <div className="tooltip">
                <i className="material-icons hover">more_vert</i>
                <span className="tooltip-text">More</span>
              </div>

              <div className="tooltip">
                <i className="material-icons hover">undo</i>
                <span className="tooltip-text">Undo</span>
              </div>
              <div className="tooltip">
                <i className="material-icons hover">redo</i>
                <span className="tooltip-text">Redo</span>
              </div>
            </div>

            <button className="modal-active-form--close-btn">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Modal;
