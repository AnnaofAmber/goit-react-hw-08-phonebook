import { useDispatch, useSelector } from 'react-redux';
import css from './HomePage.module.css'
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export const HomePage = () =>{


  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return(
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
    )
}