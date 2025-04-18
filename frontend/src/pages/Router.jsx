import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import ShopNow from './ShopNow'
import Cart from './Cart'
import Account from './Account'
import Orders from './Orders'
import Categories from './Categories'
import Blog from './Blog'
const Router = () => {
  return (
    <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path='/shop' element={<ShopNow/>}></Route>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/offers" element={<Offers />} />

    </Routes>
  )
}

export default Router