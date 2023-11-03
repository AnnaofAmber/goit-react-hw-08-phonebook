import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectContacts, selectContactsIsLoading, selectFilter, selectIsLoading } from 'redux/contacts/selectors';

import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';



const onFilteredContacts = (contacts, filter) => {
  console.log(contacts);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading)
  // console.log(contacts);
  // console.log(contacts);
  // const map = contacts.map(e=>e)
  // console.log(map);
//   const filter = useSelector(selectFilter);
//  let filteredContacts;
//  console.log(contacts);
// if(contacts.length > 0){
//   console.log('asdas');
//   filteredContacts = onFilteredContacts(contacts, filter);
//   console.log(filteredContacts);

// }
 const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

  return (
<>
  
<Grid item xs={12} md={6} sx={{ mt: 4, mb: 2 }}>
  <Demo>
    <List>
    {Array.isArray(contacts) && contacts.map(contact => (
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

</>
  )
}



