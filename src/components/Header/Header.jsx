import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './Header.module.css';
import { Navigation } from 'components/Navigation/Navigation';

export const Header = () => {
  return (
    <div className={css.header}>
      {' '}
      <Navigation />
      <UserMenu />
    </div>
  );
};
