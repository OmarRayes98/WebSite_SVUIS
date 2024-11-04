import { NavLink } from 'react-router-dom';
import styles from './header.module.css';


const Navbar = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
            <div>
                <NavLink to="/" className={styles.logo}>
                    <span style={{color:'#B2A260'}}>
                        S
                    </span>
                    <span style={{color:'#005A82'}}>
                        VUIS
                    </span>
                </NavLink>
            </div>

        </nav>
    </header>

    )
}

export default Navbar;