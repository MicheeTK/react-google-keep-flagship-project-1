function FormInactive(props) {
  return (
    <form className="form-container inactive-form">
      <input className="input-note" type="text" placeholder="Take a note..." onClick={props.inputClick} />
      <div className="form-actions">
        <div className="tooltip">
          <i className="material-icons hover">check_box</i>
          <span className="tooltip-text">New list</span>
        </div>
        <div className="tooltip">
          <i className="material-icons hover">brush</i>
          <span className="tooltip-text">New note with drawing</span>
        </div>
        <div className="tooltip">
          <i className="material-icons hover">image</i>
          <span className="tooltip-text">New note with image</span>
        </div>
      </div>
    </form>
  );
}

export default FormInactive;
