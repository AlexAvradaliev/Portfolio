import { motion } from 'framer-motion';

import { fadeInDown } from '../../../motion/variants';

import styles from './SectionTitle.module.css';

const SectionTitle = (props) => {
    return (
        <motion.div
            variants={fadeInDown}
            initial='initial'
            animate='animate'
            className={styles.title}
        >
            <span className={styles.section__subtitle}>{props.subTitle}</span>
            <h2 className={styles.section__title}>{props.title} <span>{props.secondTitle}</span></h2>
        </motion.div>
    );
};

export default SectionTitle;