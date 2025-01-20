import Navbar from '../components/Navbar.jsx'
import Footer from "../components/Footer.jsx";
import Categories from "../components/Categories.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import classes from "../module/Pages.module.scss";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MensClothing =({addToCart, cart})=> {

    const [components, setComponents] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(` https://fakestoreapi.com/products/category/men's clothing`)
            .then(function (response) {
                // Handle success
                console.log(response.data);
                setComponents(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                // Handle error
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleAddToCart = (component) => {
        addToCart(component);
    };

    const [search, setSearch] = useState("");

    const  onSearchChange = (e)=>{
        setSearch(e.target.value)
    }

    const filteredCards = components.filter(card =>
        search.toLowerCase() === '' || card.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>

            <Navbar cart={cart} ></Navbar>
            <Categories search={search} onSearchChange={onSearchChange} />

            <div className={classes['jewel-header']}>

                <h1> welcome Mans Clothing page</h1>
                <p>Welcome to our Men’s Clothing Collection, where style meets functionality. Discover a curated range of apparel designed to keep you looking sharp and feeling comfortable for every occasion. From tailored suits and crisp shirts for formal events to casual t-shirts, jeans, and outerwear for everyday wear, we’ve got your wardrobe needs covered.
                    Our collection features premium-quality materials and expert craftsmanship to ensure a perfect blend of style and durability. Whether you’re dressing for work, leisure, or a special occasion, our versatile options cater to all tastes and preferences.
                    Stay updated with the latest fashion trends and timeless classics, all available in a variety of sizes and fits. Our user-friendly site allows you to easily browse by category, style, or brand, ensuring a smooth shopping experience.
                    Elevate your wardrobe with confidence. Shop our Men’s Clothing Collection today and redefine your style with pieces that fit your lifestyle.</p>
            </div>

            <div className={classes['main-jewels']}>
                {loading ? (
                    <div className={classes['loading']}>
                        <h3 className={classes['loading']}> mens clothing are Loading...</h3>
                    </div>
                ) :filteredCards.length === 0 ? (
                    <div className={classes['no-results']}>
                        <h3>
                            sorry, we could not find product you were looking for please try again</h3>
                    </div>
                ) : (
                    filteredCards.map((component) => (
                        <div key={component.id} className={classes['main-wrapper']}>
                            <Link to={`/product/${component.id}`} className={classes['card-link']}>
                                <div className={classes['content']}>
                                    <div className={classes['img']}>
                                        <img src={component.image} alt={component.title} className={classes['img']}/>
                                    </div>
                                    <h3 className={classes['card-title']}>{component.title}</h3>
                                    <div className={classes['inside-content']}>
                                        <span
                                            className={classes['inside-desc']}>Category: <h3>{component.category}</h3></span>
                                        <span
                                            className={classes['inside-desc']}>Price: <h3>${component.price}</h3></span>
                                    </div>
                                </div>
                            </Link>

                            <button
                                className={classes['button']}
                                onClick={() => handleAddToCart(component)}>
                                ADD TO CART
                            </button>
                        </div>

                    ))
                )}
            </div>

            <Footer/>
        </>
    )
}

export default MensClothing