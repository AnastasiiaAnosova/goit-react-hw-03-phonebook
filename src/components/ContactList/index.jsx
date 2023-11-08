import { List } from "./ContactList.styled";

const ContactList = ({ contacts, deleteContact }) => {
    return (
      <List>
      <div>
          <ul>
              {contacts.map((contact) => (
                  <li key={contact.id}>{contact.name}: {contact.number}
                      <button
			            type='button'
                        className='btn-close'
                        onClick={()=> deleteContact(contact.id)}
                      >
                          Delete
                    </button>
                  </li>
              ))}
          </ul>
        </div>
        </List>
  )
}

export default ContactList;
