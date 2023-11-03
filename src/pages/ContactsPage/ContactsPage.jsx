import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsPage.module.css';
import { selectContacts, selectContactsIsLoading, selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { addContact, deleteContact, fetchContacts } from 'redux/contacts/operations';
import { useForm } from 'react-hook-form';

const ContactsPage = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts)
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);


//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

// console.log(contacts);
//   return (

//   );

const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm();
const dispatch = useDispatch();
const contacts = useSelector(selectContacts);
const isLoading = useSelector(selectContactsIsLoading);
// const error = useSelector(selectContactsError);
// const filterTerm = useSelector(selectContactsFilterTerm);

useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch]);

const onSubmit = contact => {
  dispatch(addContact(contact));
  reset();
};

const onDeleteContact = contactId => {
  dispatch(deleteContact(contactId));
};

return (
  <div className={css.main}>
    <h1 className={css.title}>Phonebook</h1>
    <div className={css.content}>
  <ContactForm /> 
    {isLoading && <Loader />}
    <Contacts title="Contacts">
  <Filter />
   <ContactList />
  </Contacts>
    {/* <ul>
      {Array.isArray(contacts) &&
        contacts.map(contact => {
          return (
            <li key={contact.id}>
              <h3>{contact.name}</h3>
              <p>{contact.number}</p>
              <button onClick={() => onDeleteContact(contact.id)}>❌</button>
            </li>
          );
        })}
    </ul> */}
    </div>
  </div>
);
};

export default ContactsPage;


//  <div className={css.main}>
// <h1 className={css.title}>Phonebook</h1>
// {isLoading && !error && <Loader />}
// <div className={css.content}>
//   <ContactForm />
//   {Array.isArray(contacts) &&  
//   <Contacts title="Contacts">
//     <Filter />
//     <ContactList />
//   </Contacts>}
// </div>
// </div> 