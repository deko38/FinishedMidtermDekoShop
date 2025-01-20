import Navbar from '../components/Navbar.jsx';
import classes from '../module/Cart.module.scss';
import Footer from "../components/Footer.jsx";

const Cart = ({ cart, deleteItem, addItem }) => {

    const handleDelete = (index) => {
        deleteItem(index);
    }

    const handleAddItem = (item) => {
        addItem(item);
    };

    return (
        <>
            <Navbar cart={cart} />
            <div className={classes['cart-container']}>
                <h2>Your Cart</h2>
                {cart.length === 0 ? (
                    <h3>Your cart is empty</h3>
                ) : (
                    <div>
                        {cart.map((item, index) => (
                            <div key={index} className={classes['cart-item']}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={classes['cart-item-image']}
                                />
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>Price: ${item.price}</p>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className={classes['delete-button']}
                                    >
                                        Delete item
                                    </button>
                                    <br/> <br/>
                                    <button
                                        onClick={() => handleAddItem(item)}
                                        className={classes['add-button']}
                                    >
                                        Add item
                                    </button>
                                </div>
                            </div>
                        ))}
                        <h3>Total: ${cart.reduce((total, item) => total + item.price, 0)}</h3>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;
