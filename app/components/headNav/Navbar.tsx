"use client"
"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation'; 
import Link from 'next/link';
import styles from './navbar.module.css'; 

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); 

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    // Function to determine if the link is active
    const isActive = (path) => pathname === path;

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    LOGO
                </div>
                <div>
                    <ul className={isOpen ? `${styles['nav-link']} ${styles.active}` : styles['nav-link']}>
                        <li>
                            <Link
                                href="/"
                                className={isActive("/") ? styles.active : ""}
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className={isActive("/about") ? styles.active : ""}
                                onClick={() => setIsOpen(false)}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className={isActive("/contact") ? styles.active : ""}
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </li>
                        <button className={styles['demo-btn']}>
                    Demo
                </button>
                    </ul>
                </div>
                {/* <button className={styles['demo-btn']}>
                    Demo
                </button> */}
                <button onClick={toggle} className={styles['navbar-toggler']}>
                    {isOpen ? "X" : "☰"}
                </button>
            </nav>
        </header>
    );
}
