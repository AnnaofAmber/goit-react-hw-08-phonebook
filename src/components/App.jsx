
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import { refreshThunk } from "redux/auth/operations";
import { selectIsRefreshing } from "redux/auth/selectors";
import { RestrictedRoute } from "./RestrictedRoute";
import {PrivateRoute} from "./PrivateRoute";
import { Loader } from "./Loader/Loader";
import { Header } from "./Header/Header";

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
      <Header/>
{ isRefreshing? <Loader/>: <Suspense>
        <Routes>
        <Route path="*" element={<HomePage/>}></Route>
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

