import { BrowserRouter,Route,Routes } from 'react-router-dom'; 
import './App.css';
import { useState } from 'react';
import Login from './components/Login';  
import Signup from './components/Register';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import SpecificProduct from './components/SpecificProduct';
import ThemeAndCartContext from './context/ThemeAndCartContext'
import ProtectedRoute from './components/ProtectedRoute';


const  App = () => {

  const [isDarkTheme,setAppTheme] = useState(false)
  const [cartList,setCartList] = useState([])


  const setTheme = () => {
    setAppTheme(prevState => !prevState)
  }

  const addCartList = newList => {
    const find = cartList.some(eachItem => eachItem.id === newList.id)
    if(find){
      setCartList(prevState => prevState.map(eachItem => {
        if(eachItem.id === newList.id){
          const updateCount = eachItem.cartCount + newList.cartCount
          return {...eachItem,cartCount:updateCount}
        }
        return eachItem
      }))
    }else{
        setCartList(prevState => [...prevState,newList])
    }
  }

  const removeCartItem = (id) => {
      console.log("removeCartItem",id)
      setCartList(prevState => prevState.filter(eachItem => eachItem.id !== id))
  }

  const incrementCartQuantity = (id) => {
    setCartList(prevState => prevState.map(eachItem => {
      if(eachItem.id === id){
        const updateCount = eachItem.cartCount + 1
        return {...eachItem,cartCount:updateCount}
      }
      return eachItem
    }))
  }

  const decrementCartQuantity = (id) => {
    const productObj = cartList.find(eachItem => eachItem.id ===id )
    if(productObj.cartCount > 1){
      setCartList(prevState => prevState.map(eachItem => {
        if(eachItem.id === id){
          const updateCount = eachItem.cartCount - 1
          return {...eachItem,cartCount:updateCount}
        }
        return eachItem
      }))
    }else{
      removeCartItem(id)
    }
  }

  const removeAllCartItem = () => {
  setCartList([])  
}

  return (
    <ThemeAndCartContext.Provider
      value = {{
        isDarkTheme,
        cartList,
        setTheme,
        addCartList,
        incrementCartQuantity,
        decrementCartQuantity,
        removeAllCartItem,
        removeCartItem
      }}
    >
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/product/:id" element={<SpecificProduct/>} />
          <Route path="/cart" element={<Cart/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeAndCartContext.Provider>
  
  );
}

export default App;
