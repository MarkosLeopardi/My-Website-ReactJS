import React from "react";
import { Navbar, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './NavMenu.module.css';

function NavMenu() {

    return (
        <Navbar className={styles.bar}>
            <div className={styles.navContainer}>
                <ul className={styles.navList}>
                    <NavItem>
                        <NavLink className={styles.liItem} tag={Link} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={styles.liItem} tag={Link} to="/Biography">Biography</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={styles.liItem} tag={Link} to="/CV">CV</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={styles.liItem} tag={Link} to="/Contact">Contact</NavLink>
                    </NavItem>
                </ul>
            </div>
        </Navbar>

    )
}

export default NavMenu;