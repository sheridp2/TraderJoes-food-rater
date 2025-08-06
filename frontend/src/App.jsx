import { useState } from 'react';
import Container from '@mui/material/Container';

import ItemList from "./ItemList";
import Header from "./Header";
import Login from './Login';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('access_token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <>
    <Container maxWidth='xl'>
      <Header />
      <ItemList />
    </Container>
    </>
  );
}

export default App;
