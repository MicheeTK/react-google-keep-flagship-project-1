import { useState } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Modal from "../Modal/Modal";
import Notes from "../Notes/Notes";
import Forms from "../Forms/Forms";
import { uniqueID } from "../uniqueID/uniqueID";

function App() {
  const [noteTitleValue, setNoteTitleValue] = useState("");
  const [inputNoteValue, setinputNoteValue] = useState("");
  const [notes, setNotes] = useState([]);
  const [openActiveForm, setopenActiveForm] = useState(false);

  const newNote = { id: uniqueID(), title: noteTitleValue, text: inputNoteValue };

  const handleActiveFormSubmit = (event) => {
    event.preventDefault();
    setNotes([...notes, newNote]);
    setNoteTitleValue("");
    setinputNoteValue("");
    setopenActiveForm(false);
  };

  const handleNoteTitle = (event) => setNoteTitleValue(event.target.value);
  const handleInputNote = (event) => setinputNoteValue(event.target.value);
  const handleInputClick = () => setopenActiveForm(true);

  return (
    <div className="App wrapper-container">
      <Navbar />
      <div className="main-aside-wrapper">
        <Sidebar />
      </div>

      <main className="main-container">
        <Forms
          noteTitleChange={handleNoteTitle}
          inputNoteChange={handleInputNote}
          submitActiveForm={handleActiveFormSubmit}
          noteTitleValue={noteTitleValue}
          inputNoteValue={inputNoteValue}
          openActiveForm={openActiveForm}
          handleInputClick={handleInputClick}
        />
        <Modal />
        <Notes notes={notes} />
      </main>
    </div>
  );
}

export default App;
