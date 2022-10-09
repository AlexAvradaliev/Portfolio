import Link from 'next/link';
import Image from 'next/future/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { fadeInUp, fadeInLeft, fadeInRight, image } from '../../motion/variants';
import Container from '../Common/Container/Container';

import styles from './Home.module.css';

const Home = ({
  homeHeading,
  homeSocial
}) => {

  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} id='home'>
      <Container containerStyle={styles.home__container}>
        <div className={styles.home__data}>
          <motion.span
            variants={fadeInLeft}
            initial='initial'
            animate={inView ? 'animate' : 'initial'}
            className={styles.home__greeting}
          >
            {homeHeading.greeting}
          </motion.span>
          <motion.h1
            variants={fadeInRight}
            initial='initial'
            animate={inView ? 'animate' : 'initial'}
            className={styles.home__name}
          >
            {homeHeading.name}
          </motion.h1>
          <motion.h3
            variants={fadeInLeft}
            initial='initial'
            animate={inView ? 'animate' : 'initial'}
            className={styles.home__education}
          >
            {homeHeading.education}
          </motion.h3>
          <div className={styles.home__buttons}>

            <Link href='#'>
              <motion.a
                variants={fadeInRight}
                initial='initial'
                animate={inView ? 'animate' : 'initial'}
                target='_blank'
                download
                className={`${styles.button} ${styles.button__ghost}`}
              >
                Download CV
              </motion.a>
            </Link>


            <Link href='#about'>
              <motion.a
                variants={fadeInLeft}
                initial='initial'
                animate={inView ? 'animate' : 'initial'}

                href="#about"
                className={styles.button}
              >
                About me
              </motion.a>
            </Link>

          </div>
        </div>

        <motion.div
          variants={image}
          initial='initial'
          animate={inView ? 'animate' : 'initial'}
          className={styles.home__handle}
        >
          <Image src={homeHeading.image} width={160} height={263} alt="" className={styles.home__img} />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial='initial'
          animate={inView ? 'animate' : 'initial'}
          className={styles.home__social}
        >
          {
            homeSocial.map((s, i) => {
              return (
                <Link href={s.link} key={i}>
                  <a target='_blank' className={styles.home__social__link}>
                    <i className={s.icon}></i>
                  </a>
                </Link>
              )
            })
          }
        </motion.div>

        <motion.a
          variants={fadeInUp}
          initial='initial'
          animate={inView ? 'animate' : 'initial'}
          href="#about"
          className={styles.home__scroll}
        >
          <i className={`bx bx-mouse ${styles.home__scroll__icon}`}></i>
          <span className={styles.home__scroll__name}>Scroll Down</span>
        </motion.a>

      </Container>
    </section>
  )
};

export default Home;