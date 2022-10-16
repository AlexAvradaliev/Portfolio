import Image from 'next/future/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { fadeInRight } from '../../motion/variants';
import Modal from '../Common/Modal/Modal';

import styles from './Works.module.css';

const Card = ({
    info,
    inView
}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const show = () =>  setModalOpen(state => !state);
    
    

    return (
   <>
                          <motion.div
                                variants={fadeInRight}
                                initial='initial'
                                animate={inView ? 'animate' : 'initial'}
                                className={styles.work__item}
                                onClick={show}
                            >
                                <header className={styles.work__image__conatainer}>
                                    <Image src={info.image} alt={info.title} className={styles.work__image} width={358} height={204} />
                                </header>
                                <section className={styles.work__content}>
                                    <h3 className={styles.work__title}>{info.title}</h3>
                                    <p className={styles.work__info}>See more <i className='bx bxs-right-arrow-alt'></i></p>
                                    <div className={styles.work__tag}>
                                        <p>{info.tech}</p>
                                    </div>
                                </section>
                                {modalOpen &&
                                    <Modal info={info} />}
                            </motion.div>   
                            {modalOpen &&
                                    <Modal info={info} show={modalOpen} onClose={show}/>}  
                                </>
    )
};

export default Card;