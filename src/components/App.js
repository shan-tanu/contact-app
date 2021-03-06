import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { uuid } from 'uuidv4';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetail from './ContactDetail';
import ConfirmDelete from './ConfirmDelete';

//import './App.css';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
      setContacts(retrieveContacts)
    }
  }, []);


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


  const removeContactHandler = (id) => {
    const filteredContactList = contacts.filter((ele) => {
      return ele.id !== id
    });

    setContacts(filteredContactList);
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <br></br>
        <br></br>
        <br></br>
        <Switch>
          <Route path="/" exact render={(props) =>
            <ContactList {...props} contacts={contacts} getContactId={removeContactHandler} />
          } />

          <Route path="/add" render={(props) =>
            <AddContact {...props} addContactHandler={addContactHandler} />
          } />

          <Route path="/contact/:id" component={ContactDetail} />

          <Route path="/confirm" render={(props) =>
            <ConfirmDelete {...props} getId={removeContactHandler} />
          } />

        </Switch>

      </Router>
    </div>
  );
}

export default App;
