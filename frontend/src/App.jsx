
import { Route, Routes } from 'react-router-dom'
import Admin from './Feature/Admin';
import Login from './Feature/Auth/Login/Login';
import Singup from './Feature/Auth/Signup/Signup';

function App() {
    return (
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign-up" element={<Singup/>} />
      </Routes>
    );
}

export default App
