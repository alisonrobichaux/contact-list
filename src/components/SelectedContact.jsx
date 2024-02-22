import { useState } from 'react';
import { useEffect } from 'react';

function SelectedContact({ SelectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState();

  useEffect(() => {
    async function fetchContact() {
      try {
        console.log(SelectedContactId)
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${SelectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);
  console.log(contact);
  return(<><div>{`${contact.name}`}</div></>)
}

export default SelectedContact;