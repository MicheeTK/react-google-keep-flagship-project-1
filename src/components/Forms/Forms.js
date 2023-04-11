import "./Forms.css";
import "../Modal/Modal.css";
import { useState } from "react";
import FormInactive from "./FormInactive";
import FormActive from "./FormActive";

export default function Forms(props) {
  const noteTitleChange = props.noteTitleChange;
  const inputNoteChange = props.inputNoteChange;
  const submitActiveForm = props.submitActiveForm;
  const noteTitleValue = props.noteTitleValue;
  const inputNoteValue = props.inputNoteValue;

  const [openActiveForm, setopenActiveForm] = useState(false);
  const handleInputClick = () => setopenActiveForm(true);
  return (
    <>
      {openActiveForm ? (
        <FormActive
          noteTitleChange={noteTitleChange}
          inputNoteChange={inputNoteChange}
          submitActiveForm={submitActiveForm}
          noteTitleValue={noteTitleValue}
          inputNoteValue={inputNoteValue}
        />
      ) : (
        <FormInactive inputClick={handleInputClick} />
      )}
    </>
  );
}
