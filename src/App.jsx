import './App.css';
import { useState } from 'react';
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";


    export default function App() {
      const [SelectedContactId, setSelectedContactId] = useState(null);

      return (
        <>
        {SelectedContactId ? (
          <div>SelectedContactView</div>
        ) : (
          <ContactList />
        )}
        </>
      );
    }
  
