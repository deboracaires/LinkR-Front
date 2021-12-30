import './styles/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignInPage from './components/signIn/SignInPage.js';
import SignUpPage from './components/signUp/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInPage/>} exact />
        <Route path='/signup' element={<SignUpPage />} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
