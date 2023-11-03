// import css from './App.module.css';

// import { HomePage } from "pages/HomePage/HomePage";
import { Suspense, lazy, useEffect } from "react";
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
import { Navigation } from "./Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { refreshThunk } from "redux/auth/operations";
import { RestrictedRoute } from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
import { selectIsRefreshing } from "redux/auth/selectors";
import { Loader } from "./Loader/Loader";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing)
  const dispatch = useDispatch()
useEffect(()=>{
  dispatch(refreshThunk())
},[dispatch])



  return (
    <div>
      <Navigation/>
    
{ isRefreshing? <Loader/>: <Suspense>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/register"  element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          } />
          <Route path="/login" element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />}/> }/>
          <Route path="/contacts" element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />}/> } />
        </Routes>
      </Suspense>}
  </div>
  );
};

