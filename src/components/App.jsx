// import css from './App.module.css';

// import { HomePage } from "pages/HomePage/HomePage";
import { Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom'
// import { ContactForm } from './ContactForm/ContactForm';
// import { Contacts } from './Contacts/Contacts';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { useDispatch, useSelector } from 'react-redux';
// import { getError, getIsLoading } from 'redux/contacts/selectors';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contacts/operations';
// import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export const App = () => {

  return (
    <div>
    {/* <Header /> */}
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/contacts" element={<ContactsPage/>} />
        </Routes>
      </Suspense>
    </div>
  </div>
  );
};
