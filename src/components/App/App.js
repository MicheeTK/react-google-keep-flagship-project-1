import "./App.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import FormInactive from "../FormInactive/FormInactive";
import FormActive from "../FormActive/FormActive";
import Modal from "../Modal/Modal";
import Notes from "../Notes/Notes";
function App() {
  return (
    <div className="App wrapper-container">
      <Navbar />
      <div className="main-aside-wrapper">
        <Sidebar />
      </div>

      <main className="main-container">
        <FormInactive />
        <FormActive />
        <Modal />
        <Notes />
      </main>
    </div>
  );
}

export default App;
