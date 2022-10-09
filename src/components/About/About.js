import Image from 'next/future/image';
import { motion } from 'framer-motion';

import { fadeInLeft, fadeInRight } from '../../motion/variants';
import Container from '../Common/Container/Container';
import Section from '../Common/Section/Section';

import styles from './About.module.css';
import SectionTitle from '../Common/SectionTitle/SectionTitle';

const About = ({
    aboutBox,
    aboutInfo
}) => {

    return (
        <Section sectionStyle={styles.about} id='about'>
            <SectionTitle title='About' secondTitle='Me' subTitle='Resume' />
            <Container containerStyle={styles.about__container}>
                <motion.div
                variants={fadeInRight}
                initial='initial'
                animate='animate'
                >
                    <Image src={aboutInfo.image} alt="Aleksandar Avradaliev" className={styles.about__img} />
                </motion.div>
                <motion.div
                 variants={fadeInLeft}
                 initial='initial'
                 animate='animate'
                 className={styles.about__data}
                 >
                    <div className={styles.about__info}>
                        {
                            aboutBox.map((box, index) => {
                                return (<div className={styles.about__box} key={index}>
                                    <i className={`${box.icon} ${styles.about__icon}`}></i>
                                    <h3 className={styles.about__title}>{box.title}</h3>
                                    <span className={styles.about__subtitle}>{box.subtitle}</span>
                                </div>)
                            })
                        }

                    </div>
                    <p className={styles.about__description}>{aboutInfo.dascription}</p>
                    <a href="#contact" className={styles.button}>Contact Me</a>
                </motion.div>

            </Container>
        </Section>
    )
};

export default About;