import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsPage.module.css';
import { selectContactsIsLoading } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      </div>
    </div>
  );
};

export default ContactsPage;
