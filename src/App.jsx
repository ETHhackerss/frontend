import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import CreateWallet from './pages/CreateWallet';
import IssueCertificate from './pages/IssueCertificate';
import UserProfile from './pages/UserProfile';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/createwallet" element={<CreateWallet />}></Route>
        <Route path="/issue" element={<IssueCertificate />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
