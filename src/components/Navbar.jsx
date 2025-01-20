import { Link } from "react-router-dom";
import classes from '../module/Navbar.module.scss';

const Navbar = ({ cart }) => {
    const cartLength = cart ? cart.length : 0;

    return (
        <div className={classes['nav-wrapper']}>
            <Link to={'/home'} className={classes['nav-logo']}>
                <h1>DEKO SHOP</h1>
            </Link>

            <Link to={'/about'} className={classes['nav-element']}>Go to About Page</Link>
            <Link to={'/home'} className={classes['nav-element']}>Go to Home Page</Link>
            <Link to={'/contact'} className={classes['nav-element']}>Go to Contact Page</Link>

            <Link to="/cart" className={classes['nav-element']}>

                Cart ({cartLength})

            </Link>


        </div>
    );
};

export default Navbar;