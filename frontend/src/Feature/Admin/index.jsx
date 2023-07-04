import { Route, Routes, useLocation } from 'react-router-dom';
import Main from '../../components/layout/admin_layout/components/Main';
import PageNotFound from '../Error/PageNotFound';
import Attribute from './Attribute/Attribute';
import AddCategory from './Category/AddCategory';
import Category from './Category/Category';
import AddCoupon from './Coupons/AddCoupon';
import Coupons from './Coupons/Coupons';
import AddGroup from './Group/AddGroup';
import Group from './Group/Group';
import AddManufacturer from './Manufacture/AddManufacturer';
import Manufacturer from './Manufacture/Manufacturers';
import AddProduct from './Product/AddProduct';
import Product from './Product/Product';
import Global from './Global/Global';
import Customers from './Customer/Customer';
import AddCustomer from './Customer/AddCustomer';
import Orders from './Order/Order';
import OrderDetail from './Order/OrderDetail';
import Dashboard from './Dashboard/Dashboard';


function Admin() {
  const location = useLocation();
  
  return (
      <Main>
        <Routes location={location}>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/categories' element={<Category />} />
          <Route path='/categories/add-category' element={<AddCategory/>}/>
          <Route path='/products' element={<Product />} />
          <Route path='/products/add-product' element={<AddProduct/>}/>
          <Route path='/attributes' element={<Attribute/>}/>
          <Route path='/manufacturers' element={<Manufacturer/>}/>
          <Route path='/manufacturers/add-manufacturer' element={<AddManufacturer/>}/>
          <Route path='/coupons' element={<Coupons/>}/>
          <Route path='/coupons/add-coupon' element={<AddCoupon/>}/>
          <Route path='/groups' element={<Group/>}/>
          <Route path='/groups/add' element={<AddGroup/>}/>
          <Route path='/globals' element={<Global/>}/>
          <Route path='/globals/add' element={<AddGroup/>}/>
          <Route path='/customers' element={<Customers/>}/>
          <Route path='/customers/add-customer' element={<AddCustomer/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/orders/detail' element={<OrderDetail/>}/>
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </Main>
  );
}

export default Admin;