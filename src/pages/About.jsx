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
                    <h2>About DEKO SHOP</h2>
                    <span>Welcome to Deko Shop, your one-stop destination for an incredible variety of products tailored to your every need! Our store features an amazing selection of items thoughtfully categorized for your convenience. Dive into our electronics collection, where you will find top-notch gadgets and cutting-edge technology to enhance your everyday life. Explore our jewelry section, showcasing timeless pieces perfect for special occasions or adding a touch of elegance to your outfit.
                        In the men is clothing category, discover stylish, durable, and comfortable apparel designed to fit every lifestyle. For women, our women is clothing section offers chic, trendy, and versatile options that blend fashion with functionality.
                        At Deko Shop, we believe in providing quality products that meet the highest standards. Whether you are looking to upgrade your wardrobe, enhance your home, or find the perfect gift, Deko Shop has you covered. Shop with us and experience excellence today!</span>
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
