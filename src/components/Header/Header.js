import Link from 'next/link';
import * as Scroll from 'react-scroll';
import { motion } from 'framer-motion';

import { fadeInDown, menu, menuItems } from '../../motion/variants';

import styles from './Header.module.css';

const Header = () => {

    const Links = Scroll.Link;

    return (
        <header className={styles.header} id="header">
            <nav className={styles.nav}>
                <Link href='/'>
                    <motion.a
                        variants={fadeInDown}
                        initial='initial'
                        animate='animate'
                        className={styles.nav__logo}
                    >
                        Avradaliev
                    </motion.a>
                </Link>
                <motion.div
                    variants={menu}
                    initial='initial'
                    animate='animate'
                    className={styles.nav__menu}
                >

                    <ul className={styles.nav__list}>
                        <motion.li
                            variants={menuItems}
                            initial='initial'
                            animate='animate'
                            className={styles.nav__item}>
                            <Links activeClass={styles.active} className={`${styles.nav__link} ${styles.active}`} to='home' spy={true} offset={-58} duration={500}>
                                <i className='bx bx-home'></i>
                            </Links>
                        </motion.li>
                        <motion.li
                            variants={menuItems}
                            initial='initial'
                            animate='animate'
                            className={styles.nav__item}>
                            <Links activeClass={styles.active} className={styles.nav__link} to='about' spy={true} offset={-58} duration={500}>

                                <i className='bx bx-user'></i>
                            </Links>
                        </motion.li>
                        <motion.li
                            variants={menuItems}
                            initial='initial'
                            animate='animate'
                            className={styles.nav__item}>
                            <Links activeClass={styles.active} className={styles.nav__link} to='skills' spy={true} offset={-58} duration={500}>
                                <i className='bx bx-book'></i>
                            </Links>
                        </motion.li>
                        <motion.li
                            variants={menuItems}
                            initial='initial'
                            animate='animate'
                            className={styles.nav__item}>
                            <Links activeClass={styles.active} className={styles.nav__link} to='work' spy={true} offset={-58} duration={500}>
                                <i className='bx bx-briefcase-alt-2'></i>
                            </Links>
                        </motion.li>
                        <motion.li
                            variants={menuItems}
                            initial='initial'
                            animate='animate'
                            className={styles.nav__item}>
                            <Links activeClass={styles.active} className={styles.nav__link} to='contact' spy={true} offset={-58} duration={500}>
                                <i className='bx bx-message-square-detail'></i>
                            </Links>
                        </motion.li>
                    </ul>
                </motion.div>
                <motion.span
                    variants={fadeInDown}
                    initial='initial'
                    animate='animate'
                >
                    <i className={`bx bx-moon ${styles.change__theme}`} id='theme-button'></i>
                </motion.span>
            </nav>
        </header>
    );
};

export default Header;