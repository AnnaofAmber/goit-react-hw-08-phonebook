import css from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, IconButton } from '@mui/material';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <li className={css.item}>
      <div className={css.profile}>
        <Avatar>
          <AccountCircleIcon />
        </Avatar>
        {name}: {number}
      </div>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={onDelete}
        title={`Delete ${name}`}
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
};
