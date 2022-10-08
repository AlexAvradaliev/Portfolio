import styles from './Container.module.css';

const Container = (props) => {

    return (
        <div className={`${styles.container} ${styles.grid} ${props.containerStyle}`} id={props.id}>
            {props.children}
        </div>
    );
};

export default Container;