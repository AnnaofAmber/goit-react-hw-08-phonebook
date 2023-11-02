import { Box } from '@mui/material';
import css from './Contacts.module.css';

export const Contacts = ({ title, children }) => {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 350 }}>
      <h2 className={css.title}>{title}</h2>
      {children}
      </Box>
  );
};
