import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getContacts, getFilter } from 'redux/contacts/selectors';

import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';



const onFilteredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
 let filteredContacts;
 if(contacts.length !== 0){
  filteredContacts = onFilteredContacts(contacts, filter);
 }
 const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

  return (
<>
  {contacts.length !== 0 && 
<Grid item xs={12} md={6} sx={{ mt: 4, mb: 2 }}>
  <Demo>
    <List>
      {filteredContacts.map(contact => (
                <Contact
                id={contact.id}
                key={contact.id}
                name={contact.name}
                number={contact.number}
              />
            ))}
    </List>
  </Demo>
</Grid>
}
</>
  )
}



