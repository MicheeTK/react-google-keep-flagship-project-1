import "./Notes.css";
import CreateNote from "../CreateNote/CreateNote";

function Notes(props) {
  return (
    <div className="notes">
      <CreateNote props={props} />
    </div>
  );
}
export default Notes;
