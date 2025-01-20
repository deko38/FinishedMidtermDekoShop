import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import classes from '../module/ProductDetails.module.scss';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const ProductDetails = ({ addToCart,cart }) => {
    const { id } = useParams();  // Get the product ID from the URL
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error("Failed to fetch product:", error);
            });
    }, [id]);

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <>
            <Navbar cart={cart}/>
            <div className={classes['product-details-container']}>
                {product ? (
                    <>
                        <img className={classes['product-image']} src={product.image} alt={product.title}/>
                        <div className={classes['product-info']}>
                            <h1 className={classes.title}>{product.title}</h1>
                            <p className={classes.description}>{product.description}</p>
                            <p className={classes['category']}>Category: {product.category}</p>
                            <p className={classes['price']}>Price: ${product.price}</p>
                            <button className={classes['add-to-cart-button']} onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                        </div>
                    </>
                ) : (
                    <div className={classes['loading']}>Loading you Cart Items</div>
                )}
            </div>
            <Footer/>
        </>

    );
};

export default ProductDetails;
