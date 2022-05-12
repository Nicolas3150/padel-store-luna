import { createContext, useState } from "react";

const CartContext = createContext({
    products: [],
    addProduct: () => { },
    removeItem: () => { },
    clear: () => { },
    isInCart: () => { },
    getCartQuantity: () => { }
});

export const CartContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);

    const addProduct = (product) => {
        isInCart(product.id) ?
            setProductList(productList.map(p => p.id === product.id && (p.quantity + product.quantity) <= product.stock ?
                { ...p, quantity: p.quantity + product.quantity } : p)) :
            setProductList([product, ...productList]);
    }
    const removeItem = (id) => {
        const indexToRemove = productList.findIndex(item => item.id === id);
        if (indexToRemove !== -1) {
            productList[indexToRemove].quantity === 1 ?
                setProductList(productList.filter(i => i.id !== id)) :
                setProductList(productList.map(p => p.id === id ? { ...p, quantity: p.quantity - 1 } : p));
        }
    }
    const clear = () => {
        setProductList([]);
    }
    const isInCart = (id) => {
        return productList.find(p => p.id === id) !== undefined;
    }
    const getCartQuantity = () => {
        return productList.reduce((total, value) => {
            return total + value.quantity;
        }, 0)
    }

    return (
        <CartContext.Provider value={{
            products: productList,
            addProduct,
            removeItem,
            clear,
            isInCart,
            getCartQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
