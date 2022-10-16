import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { fadeInRight } from '../../motion/variants';

import styles from './Footer.module.css';

const Footer = ({
    homeSocial
}) => {

    const { ref, inView } = useInView({ threshold: 0.2 });

    return (
        <footer ref={ref} className={styles.footer}>
            <motion.div
             variants={fadeInRight}
             initial='initial'
             animate={inView ? 'animate' : 'initial'}
             className={styles.footer__container}
             >
                <h1 className={styles.footer__title}>Aleksandar Avradaliev</h1>
                <ul className={styles.footer__list}>
                    <li>
                        <a href="#about" className={styles.footer__link}>About</a>
                    </li>
                    <li>
                        <a href="#skills" className={styles.footer__link}>Skills</a>
                    </li>
                    <li>
                        <a href="#work" className={styles.footer__link}>Project</a>
                    </li>
                </ul>
                <ul className={styles.footer__social}>
                    {
                        homeSocial.map((s, i) => {
                            return (
                                <li key={i}>
                                    <Link href={s.link}>
                                        <a target='_blank' className={styles.footer__social__link}>
                                            <i className={s.icon}></i>
                                        </a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <span className={styles.footer__copy}>
                    &#169; Aleksandar Avradaliev. All rigths reserved
                </span>
            </motion.div>
        </footer>

    );
};

export default Footer;