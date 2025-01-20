import classes from '../module/Card.module.scss';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = ({ search, addToCart }) => {
    const [cards, setCards] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    // Fetch products from the API
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                setCards(response.data);
                setError('');
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setError('failed to load products');
                setLoading(false);
            });
    }, []);

    const filteredCards = cards.filter(card =>
        search.toLowerCase() === '' || card.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleAddToCart = (card) => {
        addToCart(card);
    };

    return (
        <div className={classes['main-container']}>

            {loading ? (
                <div className={classes['loading']}>
                    <h3 className={classes['loading']}> products are Loading on Deko Shop</h3>
                </div>
            ) : filteredCards.length === 0 ? (
                <div className={classes['no-results']}>
                    <h3>Sorry, we could not find the product you were looking for. Please try again.</h3>
                </div>
            ) : (
                filteredCards.map((card) => (
                    <div key={card.id} className={classes['main-wrapper']}>
                        <Link to={`/product/${card.id}`} className={classes['card-link']}>
                            <div className={classes['content']}>
                                <div className={classes['img']}>
                                    <img src={card.image} alt={card.title} className={classes['img']} />
                                </div>
                                <h3 className={classes['card-title']}>{card.title}</h3>
                                <div className={classes['inside-content']}>
                                    <span className={classes['inside-desc']}>Category: <h3>{card.category}</h3></span>
                                    <span className={classes['inside-desc']}>Price: <h3>${card.price}</h3></span>
                                </div>
                            </div>
                        </Link>

                        <button
                            className={classes['button']}
                            onClick={() => handleAddToCart(card)}>
                            ADD TO CART
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Card;
