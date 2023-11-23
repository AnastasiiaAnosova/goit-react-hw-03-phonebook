import { Component } from "react";
import { nanoid } from "nanoid";
import CreateContact from '../CreateContact';
import ContactList from "../ContactList";
import SearchContact from "../SearchContact";
import { AppContainer, Header } from "./App.styled"; 

class App extends Component {

  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData && JSON.parse(localData).length) {
      this.setState({ contacts: JSON.parse(localData) });
    }
  }

  componentDidUpdate(_, prevState) {
    const currentContacts = this.state.contacts;
    if (currentContacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(currentContacts));
    }
  }

  createContact = (contact) => {
    const isAlreadyExist = this.state.contacts.some((el) => el.name.toLowerCase() === contact.name.toLowerCase());
    if (isAlreadyExist) return alert(`${contact.name} is already in contacts.`);
    const newContact = {
      ...contact,
      id: nanoid(),
    }
    this.setState((prev) => ({
      contacts: [newContact, ...prev.contacts],
    }));
  }  

  handleSearchChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  searchContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }))
  }

  render() {
    const filteredContacts = this.searchContact();
    return (
      <AppContainer>
        <Header>Phonebook</Header>
        <CreateContact createContact={this.createContact} />
        <Header>Contacts</Header>
        <SearchContact handleSearchChange={this.handleSearchChange} />
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
      </AppContainer>
    );
  }
}
export default App;