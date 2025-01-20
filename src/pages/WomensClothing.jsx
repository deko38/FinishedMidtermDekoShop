import Navbar from '../components/Navbar.jsx'
import Footer from "../components/Footer.jsx";
import Categories from "../components/Categories.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import classes from "../module/Pages.module.scss";

const WomensClothing =({addToCart, cart})=> {

    const [components, setComponents] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(` https://fakestoreapi.com/products/category/women's clothing`)
            .then(function (response) {
                // Handle success
                console.log(response.data);
                setComponents(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                // Handle error
                setLoading(false);
                console.log(error);
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


            <div className={classes['jewl-header']}>

                <h1> welcome Womans Clothing page</h1>
                <p>Welcome to our Women’s Clothing Collection, where style meets comfort and elegance. Discover a wide range of trendy and timeless fashion pieces designed to suit every occasion and personality. From chic casual wear to sophisticated formal attire, we offer options for work, weekend outings, or special events.
                    Explore an array of dresses, tops, trousers, skirts, and outerwear crafted from premium materials that blend comfort with durability. Our collection caters to all sizes and preferences, ensuring every woman finds something that makes her feel confident and beautiful.
                    Stay ahead of the fashion curve with our regularly updated styles, featuring vibrant colors, classic designs, and the latest trends. Enjoy easy browsing, secure checkout, and fast shipping for a seamless shopping experience.
                    Whether you’re refreshing your wardrobe or searching for the perfect outfit, our Women’s Clothing page is your ultimate destination. Start exploring now and embrace fashion that’s made for you!</p>
            </div>


            <div className={classes['main-jewels']}>
                {loading ? (
                    <div className={classes['loading']}>
                        <h3 className={classes['loading']}> Womens clothing are Loading...</h3>
                    </div>
                ) :filteredCards.length === 0 ? (
                    <div className={classes['no-results']}>
                        <h3>
                            sorry, we could not find product you were looking for please try again</h3>
                    </div>
                ) : (
                    filteredCards.map((component) => (
                    <div className={classes['main-wrapper']} key={component.id}>
                        <div className={classes['content']}>
                            <div className={classes['img']}>
                                <img src={component.image} alt={component.title} className={classes['img']}/>
                            </div>
                            <h3>{component.title}</h3>
                            <div className={classes['inside-content']}>
                                <span className={classes['inside-desc']}>Category: <h3>{component.category}</h3></span>
                                <span className={classes['inside-desc']}>Price: <h3>${component.price}</h3></span>
                                <button
                                    className={classes['button']}
                                    onClick={() => handleAddToCart(component)}>
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                    ))
                )}
            </div>

            <Footer/>
        </>
    )
}

export default WomensClothing