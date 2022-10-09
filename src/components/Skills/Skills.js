import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { fadeInLeft, fadeInRight } from '../../motion/variants';
import Container from '../Common/Container/Container';

import styles from './Skills.module.css';
import SectionTitle from '../Common/SectionTitle/SectionTitle';

const Skills = ({
    frontend,
    backend,
}) => {

    const { ref, inView } = useInView({ threshold: 0.2 });
    
    return (
        <section ref={ref} className={`${styles.section} ${styles.skills}`} id='skills'>
            <SectionTitle inView={inView} title='My ' secondTitle='Experience' subTitle='Abilities' />
            <Container containerStyle={styles.skills__container}>
                <motion.div
                variants={fadeInRight}
                initial='initial'
                animate={inView ? 'animate' : 'initial'}
                 className={styles.skills__content}
                  >
                    <h3 className={styles.skills__title}>{frontend.title}</h3>
                    <div className={styles.skills__groups}>
                        {
                            frontend.skills.map((skill, index) => {
                                return (
                                    <div className={styles.skills__data} key={index}>
                                        <i className='bx bxs-badge-check'></i>
                                        <article className={styles.skills__data__container}>
                                            <h3 className={styles.skills__name}>{skill.tech}
                                            </h3>
                                            <div className={styles.skills__tech}>
                                                <motion.div
                                                    initial={{ width:0 }}
                                                    animate={inView
                                                        ? { width: Number(skill.level), transition: { type: 'spring', duration: 1, delay: 1 } }
                                                        : { width: 0 }}

                                                    className={styles.skills__tech__level}
                                                    style={{ width: `${skill.level}%` }}
                                                >
                                                </motion.div>
                                            </div>
                                        </article>
                                    </div>
                                )
                            })
                        }
                    </div>
                </motion.div>
                <motion.div 
                variants={fadeInLeft}
                initial='initial'
                animate={inView ? 'animate' : 'initial'}
                className={styles.skills__content}
                >
                    <h3 className={styles.skills__title}>{backend.title}</h3>
                    <div className={styles.skills__groups}>
                        {
                            backend.skills.map((skill, index) => {
                                return (
                                    <div className={styles.skills__data} key={index}>
                                        <i className='bx bxs-badge-check'></i>
                                        <article className={styles.skills__data__container}>
                                            <h3 className={styles.skills__name}>{skill.tech}
                                            </h3>
                                            <div className={styles.skills__tech}>
                                                <motion.div
                                                       initial={{ width:0 }}
                                                       animate={inView
                                                           ? { width: Number(skill.level), transition: { type: 'spring', duration: 1, delay: 1 } }
                                                           : { width: 0 }}
   
                                                    className={styles.skills__tech__level}
                                                    style={{ width: `${skill.level}%` }}
                                                >
                                                </motion.div>
                                            </div>
                                        </article>
                                    </div>
                                )
                            })
                        }
                    </div>
                </motion.div>
            </Container>
        </section>
    )
};

export default Skills;