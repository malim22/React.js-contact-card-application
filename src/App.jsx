// src/App.jsx
import { useState } from "react";
import ContactForm from "./components/ContactForm";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([contact, ...contacts]);
  };

  return (
    <div className="app">
      <h1>Contact Cards</h1>
      <ContactForm onAdd={addContact} />
      <UserList contacts={contacts} />
    </div>
  );
}

export default App;
