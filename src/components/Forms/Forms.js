import "./Forms.css";
import "../Modal/Modal.css";
import { useState } from "react";
import FormInactive from "./FormInactive";
import FormActive from "./FormActive";

export default function Forms() {
  const [openActiveForm, setopenActiveForm] = useState(false);
  const handleInputClick = () => setopenActiveForm(true);
  return (
    <>
      <FormInactive inputClick={handleInputClick} />
      {openActiveForm && <FormActive />}
    </>
  );
}
