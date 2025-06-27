import ThemeAndCartContext from "../../context/ThemeAndCartContext";
import { useContext } from "react";
import { CgCloseO } from "react-icons/cg";

import {CartContainer,CartHeading,EmptyContainer,EmptyPara,CartItemContainer,CartItem,CartImg ,
    CartPrice,Button,Count,RemoveButton,CartDetailsContainer,CartDetailsTotal,CartDetailsCount,
    EmptyImg ,RemoveContainer,CartDetails,CartDetailsTitle ,CartDetailsBrand,CrossRemoveButton} from "./StyledComponents";
import Navbar from "../Navbar";


const Cart = () => {
    const { cartList, removeCartItem, incrementCartQuantity, decrementCartQuantity, removeAllCartItem,isDarkTheme } = useContext(ThemeAndCartContext);
    const bgColor = isDarkTheme ? ' #000000' : ' #f9f9f9';
    const color = isDarkTheme ? ' #ffffff' : ' #000000';
    const shadowColor = isDarkTheme ? 'rgb(170, 166, 166)' : 'rgb(210, 207, 207)';
    return (
        <>
        <Navbar />
        <CartContainer color={bgColor} >
        <CartHeading color={color}>My Cart</CartHeading>
        {cartList.length === 0 ? (
            <EmptyContainer>
            <EmptyImg src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png" alt="cart empty" />
            <EmptyPara color={color}>Your cart is empty</EmptyPara>
            </EmptyContainer>
        ) : (
            <CartItemContainer>
                {cartList.length > 0 && (
            <RemoveContainer>
            <RemoveButton  onClick={removeAllCartItem}>Remove All Items</RemoveButton>
            </RemoveContainer>
        )}
            {cartList.map((item) => (
                <CartItem color={shadowColor} key={item.id}>
                <CartImg src={item.imageUrl} alt={item.brand} />  
                <CartDetails>
                    <CartDetailsTitle color={color}>{item.title}</CartDetailsTitle>
                    <CartDetailsBrand>{item.brand}</CartDetailsBrand>
                </CartDetails>
                <CartPrice> ₹{item.price * item.cartCount}/-</CartPrice> 
                <Button style={{backgroundColor:'red'}} onClick={() => decrementCartQuantity(item.id)}>-</Button>
                <Count color={color}>{item.cartCount}</Count>
                <Button style={{backgroundColor:'green'}} onClick={() => incrementCartQuantity(item.id)}>+</Button>
                <CrossRemoveButton  color={color} onClick={() => removeCartItem(item.id)}><CgCloseO/></CrossRemoveButton>
                </CartItem>
            ))}
                <CartDetailsContainer>
                <CartDetailsTotal>Total: ₹{cartList.reduce((total, item) => total + item.price * item.cartCount, 0)}/-</CartDetailsTotal>
                <CartDetailsCount>{cartList.length} items in cart</CartDetailsCount>
                </CartDetailsContainer>
            </CartItemContainer>
        )}
        
        </CartContainer>
        </>
    )
    }

export default Cart;