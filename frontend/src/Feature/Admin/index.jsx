import { Route, Routes, useLocation } from 'react-router-dom';
import Main from '../../components/layout/admin_layout/components/main';
import Category from './Category/Category';
import PageNotFound from '../Error/PageNotFound';
import AddCategory from './Category/AddCategory';
import Product from './Product/Product';
import AddProduct from './Product/AddProduct';


function Admin() {
  const location = useLocation();
  
  return (
      <Main>
        <Routes location={location}>
          <Route path='/categories' element={<Category />} />
          <Route path='/categories/add-category' element={<AddCategory/>}/>
          <Route path='/products' element={<Product />} />
          <Route path='/products/add-product' element={<AddProduct/>}/>
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </Main>
  );
}

export default Admin;