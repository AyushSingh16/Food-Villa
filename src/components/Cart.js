import { useSelector } from "react-redux";

const Cart = ()=>{

    const cartItems = useSelector(store => store.cart.items)
    // const cartItems = useSelector(store => items)            //major performance issue

    return<h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>;
};
export default Cart;