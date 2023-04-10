import "./App.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Modal from "../Modal/Modal";
import Notes from "../Notes/Notes";
import Forms from "../Forms/Forms";
import { uniqueID } from "../uniqueID/uniqueID";

function App() {
  const notes = [
    { id: uniqueID(), title: "My Title 1", text: "Content 1" },
    { id: uniqueID(), title: "My Title 2", text: "Content 2" },
    { id: uniqueID(), title: "My Title 3", text: "Content 3" },
  ];

  return (
    <div className="App wrapper-container">
      <Navbar />
      <div className="main-aside-wrapper">
        <Sidebar />
      </div>

      <main className="main-container">
        <Forms />
        <Modal />
        <Notes notes={notes} />
      </main>
    </div>
  );
}

export default App;
