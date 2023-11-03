import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';

const onFilteredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  let filteredContacts;

  if (Array.isArray(contacts)) {
    filteredContacts = onFilteredContacts(contacts, filter);
  }

  return (
    <>
      <Grid item xs={12} md={6} sx={{ mt: 4, mb: 2 }}>
          <List bg="rgba(250, 235, 215, 0.267)">
            {Array.isArray(contacts) &&
              filteredContacts.map(contact => (
                <Contact
                  id={contact.id}
                  key={contact.id}
                  name={contact.name}
                  number={contact.number}
                />
              ))}
          </List>
      </Grid>
    </>
  );
};
