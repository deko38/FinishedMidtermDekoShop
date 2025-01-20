import {Link} from "react-router-dom";
import classes from '../module/Footer.module.scss'

const Footer =()=> {


    return (
        <>
            <div className={classes['nav-wrapper']}>
                <Link to={'/home'} className={classes['nav-logo']}>
                    <h1>DEKO SHOP </h1>
                    <span>was created in 2025 by Deko Dumbadze</span>
                </Link>

                <Link to={'/about'} className={classes['nav-element']}> go to about page </Link>
                <Link to={'/home'} className={classes['nav-element']}> go to home page </Link>
                <Link to={'/contact'} className={classes['nav-element']}> go to contact page </Link>
                <Link to={'/cart'} className={classes['nav-element']}> go to cart  </Link>
            </div>

        </>
    )
}

export default Footer
