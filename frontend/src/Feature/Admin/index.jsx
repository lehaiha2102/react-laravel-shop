import { Route, Routes, useLocation } from 'react-router-dom';
import Category from './Category/Category';
import PageNotFound from '../Error/PageNotFound';
import AddCategory from './Category/AddCategory';
import Product from './Product/Product';
import AddProduct from './Product/AddProduct';
import Attribute from './Attribute/Attribute';
import Main from '../../components/layout/admin_layout/components/Main';
import AddAttribute from './Attribute/AddAttribute';


function Admin() {
  const location = useLocation();
  
  return (
      <Main>
        <Routes location={location}>
          <Route path='/categories' element={<Category />} />
          <Route path='/categories/add-category' element={<AddCategory/>}/>
          <Route path='/products' element={<Product />} />
          <Route path='/products/add-product' element={<AddProduct/>}/>
          <Route path='/attributes' element={<Attribute/>}/>
          <Route path='/attributes/add-attribute' element={<AddAttribute/>}/>
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </Main>
  );
}

export default Admin;