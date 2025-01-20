import Navbar from '../components/Navbar.jsx'
import Footer from "../components/Footer.jsx";
import Categories from "../components/Categories.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import classes from "../module/Pages.module.scss";

const Electronics =({addToCart, cart})=> {

    const [components, setComponents] = useState([])
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get(` https://fakestoreapi.com/products/category/electronics`)
            .then(function (response) {
                console.log(response.data);
                setComponents(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleAddToCart = (component) => {
        addToCart(component);
    };

    const  onSearchChange = (e)=>{
        setSearch(e.target.value)
    }

    const filteredCards = components.filter(card =>
        search.toLowerCase() === '' || card.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>

            <Navbar cart={cart}  ></Navbar>
            <Categories  search={search} onSearchChange={onSearchChange} />

            <div className={classes['jewl-header']}>

                <h1> welcome Electronics page</h1>
                <p>Welcome to our Electronics Store, your one-stop destination for cutting-edge technology and innovative gadgets. Explore an extensive range of top-quality electronics designed to make your life smarter, more efficient, and enjoyable. From the latest smartphones and sleek laptops to state-of-the-art smart home devices and powerful gaming accessories, we have something for everyone.
                    Our carefully curated collection features trusted brands known for their performance, durability, and advanced features. Whether you are upgrading your tech, finding the perfect gift, or building your dream entertainment system, our electronics section has you covered.
                    Enjoy seamless navigation on our website, with easy filtering options by category, brand, or price to help you find exactly what you need. Plus, with secure payment options and reliable delivery services, your shopping experience is smooth and worry-free. Stay ahead of the curve with the latest technology at unbeatable prices. Shop now and power up your lifestyle!</p>
            </div>

            <div className={classes['main-jewels']}>
                {loading ? (
                    <div className={classes['loading']}>
                        <h3 className={classes['loading']}> Electronics are Loading</h3>
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

export default Electronics