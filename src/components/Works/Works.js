import Image from 'next/future/image';

import { useInView } from 'react-intersection-observer';

import Container from '../Common/Container/Container';
import SectionTitle from '../Common/SectionTitle/SectionTitle';
import Card from './Card';

import styles from './Works.module.css';

const Works = ({
    worksInfo
}) => {

    const { ref, inView } = useInView({ threshold: 0.2 });

    return (
        <section ref={ref} className={`${styles.section} ${styles.work}`} id='work'>
            <SectionTitle inView={inView} title='My ' secondTitle='Portfolio' subTitle='Works' />
            <Container containerStyle={styles.work__container}>
                {
                    worksInfo.map((info, i) => <Card key={i} info={info} inView={inView}/>)
                }
            </Container>
        </section>
    )
};

export default Works;