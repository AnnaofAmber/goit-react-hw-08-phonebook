import css from './App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader/Loader';

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.main}>
      <h1 className={css.title}>Phonebook</h1>
      {isLoading && !error && <Loader/>}
      {!isLoading && <div className={css.content}>
        <ContactForm />
      <Contacts title="Contacts">
        <Filter />
        <ContactList />
      </Contacts>
      </div>}
    </div>
  );
};
