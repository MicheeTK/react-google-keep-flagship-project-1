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
  const handleActiveFormSubmit = (event) => {
    event.preventDefault();
    setNoteTitleValue("");
    setinputNoteValue("");
  };

  const handleNoteTitle = (event) => setNoteTitleValue(event.target.value);
  const handleInputNote = (event) => setinputNoteValue(event.target.value);

  const notes = [{ id: uniqueID(), title: noteTitleValue, text: inputNoteValue }];

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
        />
        <Modal />
        <Notes notes={notes} />
      </main>
    </div>
  );
}

export default App;
