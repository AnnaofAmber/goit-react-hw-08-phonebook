import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from 'redux/operations';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <li className={css.item}>
      {name}: {number}
      <button
        className={css.btnDelete}
        type="button"
        onClick={onDelete}
        title={`Delete ${name}`}
      >
        Delete
      </button>
    </li>
  );
};
