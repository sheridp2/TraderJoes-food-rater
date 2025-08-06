import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import App from './App'
import ItemPage from './ItemPage';
import Login from './Login';
import SignUp from './Signup';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/product/:pid" element={<ItemPage />}/>
    </Routes>
  </BrowserRouter>
)
