import Navbar from '../components/Navbar.jsx'
import Footer from "../components/Footer.jsx";
import Categories from "../components/Categories.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import classes from "../module/Pages.module.scss";


// eslint-disable-next-line react/prop-types
const Jewelery =({addToCart, cart})=> {


    const [components, setComponents] = useState([])
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get(` https://fakestoreapi.com/products/category/jewelery`)
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

            <Navbar cart={cart} ></Navbar>
            <Categories search={search} onSearchChange={onSearchChange} />
<div className={classes['jewel-header']}>

    <h1> welcome Jewelery page</h1>
    <p>Welcome to our Jewelry Collection, where elegance meets craftsmanship. Explore a stunning range of exquisite jewelry designed to complement every style and occasion. From timeless classics like diamond-studded earrings and gold necklaces to modern statement pieces, our collection offers something for everyone.
        Each piece is carefully crafted using premium materials, ensuring quality and durability that lasts a lifetime. Whether you're shopping for a special gift or treating yourself, our jewelry is perfect for adding a touch of sophistication to any outfit.
        Discover collections that celebrate individuality, with designs that cater to all tastes—minimalist, bold, vintage, or contemporary. Our user-friendly site makes it easy to filter by material, style, and price, helping you find the perfect piece effortlessly.
        Shop with confidence knowing we offer secure checkout and excellent customer service. Celebrate life’s precious moments with jewelry that sparkles as bright as your memories. Start browsing now!</p>
</div>
            <div className={classes['main-jewels']}>
                {loading ? (
                    <div className={classes['loading']}>
                        <h3 className={classes['loading']}>  Jewelery are Loading</h3>
                    </div>
                ) : filteredCards.length === 0 ? (
                    <div className={classes['no-results']}>
                        <h3>
                            sorry, we could not find product you were looking for please try again</h3>
                    </div> // Show no results message
                ) : (
                    filteredCards.map((component) => (
                        <div className={classes['main-wrapper']} key={component.id}>
                            <div className={classes['content']}>
                                <div className={classes['img']}>
                                    <img src={component.image} alt={component.title} className={classes['img']}/>
                                </div>
                                <h3>{component.title}</h3>
                                <div className={classes['inside-content']}>
                                    <span
                                        className={classes['inside-desc']}>Category: <h3>{component.category}</h3></span>
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
export default Jewelery