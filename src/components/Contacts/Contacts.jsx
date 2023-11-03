import css from './Contacts.module.css';
import { Box } from '@mui/material';

export const Contacts = ({ title, children }) => {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 350, mt: '-32px' }}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </Box>
  );
};
