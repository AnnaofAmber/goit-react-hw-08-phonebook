import { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);


  const nameAlreadyExists = contact => {
    return contacts.some(({ name }) => name === contact);
  };

  const onSubmit = contact => {
  if(Array.isArray(contacts)){
  if (nameAlreadyExists(contact.name)) {
    alert(`${contact.name} already exists!`);
    return;
  }
}
    dispatch(addContact(contact));
    reset();
  };
  return (
    <form className={css.contactForm} onSubmit={handleSubmit(onSubmit)}>
      <label className={css.label} htmlFor="name">
        Name
      </label>
      <input
      {...register('name', { required: true })}
        className={css.input}
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.label} htmlFor="number">
        Number
      </label>
      <input
      {...register('number', { required: true })}
        className={css.input}
        id="number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.btnAdd} type="submit">
        Add 
        <AddCircleIcon/>
      </button>
    </form>
  );
};
