import './styles/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignInPage from './components/signIn/SignInPage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInPage/>} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
