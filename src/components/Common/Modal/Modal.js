import Image from 'next/future/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { fadeInRight, fadeInDown, fadeInLeft, fadeInUp, menuItems } from '../../../motion/variants';

import styles from './Modal.module.css';

const Modal = ({
    info,
    onClose
}) => {

    return (
        <div className={styles.modal} >
            <article className={styles.modal__container}>

                <motion.i
                    variants={menuItems}
                    initial='initial'
                    animate='animate'
                    className={`bx bx-x ${styles.icon__close}`}
                    onClick={onClose}
                >
                </motion.i>

                <motion.h2
                    variants={fadeInDown}
                    initial='initial'
                    animate='animate'
                    className={styles.modal__title}
                >
                    {info.title}
                </motion.h2>

                <motion.p
                    variants={fadeInDown}
                    initial='initial'
                    animate='animate'
                    className={styles.modal__desc}
                >
                    {info.description}
                </motion.p>

                <ul className={styles.info}>

                    <motion.li
                        variants={fadeInRight}
                        initial='initial'
                        animate='animate'
                        className={styles.info__item}
                    >
                        <i className='bx bx-file'></i>
                        <p className={styles.info__desc}>Project: {info.tech}</p>
                    </motion.li>

                    <motion.li
                        variants={fadeInLeft}
                        initial='initial'
                        animate='animate'
                        className={styles.info__item}
                    >
                        <i className='bx bx-code-alt'></i>
                        <p className={styles.info__desc}>Langages: {info.langages}</p>
                    </motion.li>

                    <motion.li
                        variants={fadeInRight}
                        initial='initial'
                        animate='animate'
                        className={styles.info__item}
                    >
                        <i className='bx bxl-github'></i>
                        <Link href={info.urlGit}>
                            <a className={styles.info__desc} target='_blank'>Demo</a>
                        </Link>
                    </motion.li>

                    <motion.li
                        variants={fadeInLeft}
                        initial='initial'
                        animate='animate'
                        className={styles.info__item}
                    >
                        <i className='bx bx-link-external'></i>
                        <Link href={info.urlProject}>
                            <a className={styles.info__desc} target='_blank'>Demo</a>
                        </Link>
                    </motion.li>

                </ul>
                <motion.div
                    variants={fadeInUp}
                    initial='initial'
                    animate='animate'
                >
                    <Image className={styles.image} src={info.image} alt={info.title} />
                </motion.div>
            </article>
        </div>
    )
};

export default Modal;