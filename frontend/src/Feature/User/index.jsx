import { Route, Routes, useLocation } from 'react-router-dom';
import Main from "../../components/layout/user_layout/components/Main";
import Dashboard from './Dashboard/Dashboard';
import Category from './Category/Category';

function User() {
  const location = useLocation();
  
    return (
        <Main>
          <Routes location={location}>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/categories' element={<Category/>} />
          </Routes>
        </Main>
    );
}

export default User;