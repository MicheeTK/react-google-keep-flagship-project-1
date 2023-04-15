import "./Notes.css";
import DisplayNote from "../DisplayNote/DisplayNote";

function Notes(props) {
  return (
    <div className="notes">
      <DisplayNote props={props} />
    </div>
  );
}
export default Notes;
