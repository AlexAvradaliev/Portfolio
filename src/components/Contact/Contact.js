import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useFormContext } from './context/formContext';
import { fadeInLeft, fadeInRight, image } from '../../motion/variants';
import { emailInfo } from '../../config/config';

import Container from '../Common/Container/Container';
import SectionTitle from '../Common/SectionTitle/SectionTitle';

import styles from './Contact.module.css';

const Contact = ({

}) => {

    const { ref, inView } = useInView({ threshold: 0.2 });

    const { value, changeValue, errors, checkData, isFormValid, initialState } = useFormContext();

    const [response, setResponse] = useState({
        status: '',
        msg: ''
    });

    useEffect(() => {
        if (response.status === 'failed') {
            setTimeout(() => {
                setResponse({
                    status: '',
                    msg: ''
                })
            }, 3000);
        } else if (response.status === 'success') {
            initialState();
            setTimeout(() => {
                setResponse({
                    status: '',
                    msg: ''
                });
            }, 3000);
        }
    }, [response]);

    const changeHandler = (e) => {
        changeValue(e.target.name, e.target.value);
    };

    const verifyField = (e) => {
        checkData(e.target.name, e.target.value);
    };

    const submitData = (e) => {
        e.preventDefault();
        if (isFormValid()) {

            emailjs.send(emailInfo.SERVICE_ID, emailInfo.TEMPLATE_ID, value, emailInfo.PUBLIC_KEY)
                .then(() => {
                    setResponse({
                        status: 'success',
                        msg: 'Your message send successfully!'
                    })
                })
                .catch(() => {
                    setResponse({
                        status: 'failed',
                        msg: 'Something wrong!!!'
                    });
                });
        };
    };

    return (
        <section ref={ref} className={`${styles.section} ${styles.contact}`} id='contact'>
            <SectionTitle inView={inView} title='get in ' secondTitle='touch' subTitle='Contact' />
            <Container containerStyle={styles.contact__container}>
                <motion.div
                    variants={fadeInRight}
                    initial='initial'
                    animate={inView ? 'animate' : 'initial'}
                    className={styles.contact__content}
                >
                    <h3 className={styles.contact__title}>Talk to me</h3>
                    <div className={styles.contact__info}>
                        <div className={styles.contact__card}>
                            <i className={`bx bx-mail-send ${styles.contact__card__icon}`}></i>
                            <h3 className={styles.contact__card__title}>Email</h3>
                            <span className={styles.contact__card__data}>alex@alexval.net</span>
                            <a href="mailto:alex@alexval.net" target="_blank" className={styles.contact__button}>
                                Write me <i className={`bx bx-right-arrow-alt ${styles.contact__button__icon}`}></i>
                            </a>
                        </div>
                        <div className={styles.contact__card}>
                            <i className={`bx bxl-messenger ${styles.contact__card__icon}`}></i>
                            <h3 className={styles.contact__card__title}>Messenger</h3>
                            <span className={styles.contact__card__data}>Alex</span>
                            <a href="https://m.me/Aleks.Avr/" target="_blank" className={styles.contact__button}>
                                Write me <i className={`bx bx-right-arrow-alt ${styles.contact__button__icon}`}></i>
                            </a>
                        </div>
                        {
                            response.status &&
                            (<div className={styles.success}>
                                {
                                    response.status === 'failed'
                                        ? <p className={styles.error__status}>{response.msg}</p>
                                        : <p>{response.msg}</p>
                                }
                            </div>)
                        }
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeInLeft}
                    initial='initial'
                    animate={inView ? 'animate' : 'initial'}
                    className={styles.contact__content}
                >
                    <h3 className={styles.contact__title}>Write me your project</h3>
                    <form onSubmit={submitData} method='POST' className={styles.contact__form}>
                        <div className={`${styles.contact__form__div} ${errors.name ? styles.error : ''} `}>
                            <label htmlFor='name' className={`${styles.contact__form__tag}  `}>Names</label>
                            <input
                                type="text"
                                id='name'
                                name='name'
                                className={styles.contact__form__input}
                                onChange={changeHandler}
                                onBlur={verifyField}
                                value={value.name}
                            />
                            {
                                errors.name &&
                                <motion.p
                                variants={image}
                                initial='initial'
                                animate='animate'
                                >
                                    {errors.name}
                                    </motion.p>
                            }
                        </div>
                        <div className={`${styles.contact__form__div} ${errors.email ? styles.error : ''} `}>
                            <label htmlFor='email' className={styles.contact__form__tag}>E-mail</label>
                            <input
                                type="text"
                                id='email'
                                name='email'
                                className={styles.contact__form__input}
                                onChange={changeHandler}
                                onBlur={verifyField}
                                value={value.email}
                            />
                            {
                                errors.email &&
                                <motion.p
                                variants={image}
                                initial='initial'
                                animate='animate'
                                >
                                    {errors.email}
                                    </motion.p>
                            }
                        </div>
                        <div className={`${styles.contact__form__div} ${errors.message ? styles.error : ''} ${styles.contact__form__area}`}>
                            <label htmlFor='message' className={styles.contact__form__tag}>Message</label>
                            <textarea
                                type="text"
                                id='message'
                                name='message'
                                cols="30"
                                rows="10"
                                className={styles.contact__form__input}
                                onChange={changeHandler}
                                onBlur={verifyField}
                                value={value.message}
                            >
                            </textarea>
                            {
                                errors.message &&
                                <motion.p
                                variants={image}
                                initial='initial'
                                animate='animate'
                                >
                                    {errors.message}
                                    </motion.p>
                            }
                        </div>
                        <button className={styles.button}>send message</button>
                    </form>
                </motion.div>
            </Container>
        </section>
    )
};

export default Contact;