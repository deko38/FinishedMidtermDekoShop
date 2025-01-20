import Navbar from '../components/Navbar.jsx'
import Categories from "../components/Categories.jsx";
import {useState} from "react";
import classes from '../module/Aboutxcontact.module.scss'
import image from  '../assets/dekoshoplogo.jpeg'
import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";
const About =()=> {

    const [search, setSearch] = useState("");

    return (
        <>

            <Navbar></Navbar>

            <Categories search={search} onSearchChange={setSearch}/>


            <div className={classes['about-wrapper']}>
                <div className={classes['left-wrapper']}>
                    <h2>Contact DEKO SHOP</h2>

                    <span>Number:322555777</span>
                    <br/>
                    <span>Adress:Asatiani 15.Tbilisi.Georgia</span>
                    <br/>
                    <span> if you have any questions contact us on our Facebooks or Instagram page:DekoShop</span>
                </div>

                <Link to={'/home'} className={classes['right-wrapper']}>
                    <img src={image}/>
                </Link>

            </div>

            <Footer/>
        </>
    )
}

export default About
