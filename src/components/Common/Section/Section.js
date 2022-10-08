import styles from './Section.module.css';

const Section = (props) => {
const sectionStyle = props.sectionStyle 
                    ? props.sectionStyle 
                    : ''

    return (
        <section className={`${styles.section} ${sectionStyle}`} id={props.id}>
            {props.children}
        </section>
    );
};

export default Section;