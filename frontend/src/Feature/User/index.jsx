import { Route, Routes, useLocation } from 'react-router-dom';
import Main from "../../components/layout/user_layout/components/Main";

function User() {
  const location = useLocation();
  
    return (
        <Main>
          <Routes location={location}>
            {/* <Route path='/' element={<Dashboard/>} />
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
            <Route path='/globals/edit' element={<EditGlobal/>}/>
            <Route path='/customers' element={<Customers/>}/>
            <Route path='/customers/add-customer' element={<AddCustomer/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/orders/detail' element={<OrderDetail/>}/>
            <Route path='/reviews' element={<Reviews/>}/>
            <Route path='*' element={<Dashboard/>} /> */}
          </Routes>
        </Main>
    );
}

export default User;