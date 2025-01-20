import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import Categories from "../components/Categories.jsx";
import Footer from "../components/Footer.jsx";
import classes from '../module/Home.module.scss';

const Home = ({addToCart, cart}) => {

    const [search, setSearch] = useState("");

    const  onSearchChange = (e)=>{
        setSearch(e.target.value)
    }



    return (
        <>
            <Navbar cart={cart} />
            <Categories search={search} onSearchChange={onSearchChange}  />
            <div className={classes['card']}>
                <Card search={search}  addToCart={addToCart} />
            </div>
            <Footer />
        </>
    );
};

export default Home;
