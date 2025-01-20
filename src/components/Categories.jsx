import classes from '../module/Home.module.scss';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';




const Categories = ( { search, onSearchChange }) => {
    const [categories, setCategories] = useState([]);


    const sanitizeCategoryName = (category) => {
        return category.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
    };

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/categories`)
            .then(function (response) {
                // Handle success
                console.log(response.data);
                setCategories(response.data);
            })
            .catch(function (error) {
                // Handle error
                console.log(error);
            });
    }, []);



    return (
        <>
            <div>
                <div className={classes['search-wrapper']}>
                    <div className={classes['search-input']}>
                        <input placeholder='Search' value={search} className={classes['search']}
                               onChange={onSearchChange}/>
                    </div>

                    <div className={classes['button-filter']}>

                        {categories.map((category, index) => (
                            <Link to={`/${sanitizeCategoryName(category)}`} key={index}>
                                <button className={classes['button-element']}>
                                    {category}
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categories;
