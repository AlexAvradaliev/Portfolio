import Image from 'next/future/image';
import Link from 'next/link';

import styles from './Modal.module.css';

const Modal = ({
    info,
    onClose
}) => {

    return (
            <div className={styles.modal} >
                <article className={styles.modal__container}>
                    <i className={`bx bx-x ${styles.icon__close}`} onClick={onClose}></i>
                    <h2 className={styles.modal__title}>{info.title}</h2>
                    <p className={styles.modal__desc}>{info.description}</p>
                    <ul className={styles.info}>
                        <li className={styles.info__item}>
                            <i className='bx bx-file'></i>
                            <p className={styles.info__desc}>Project: {info.tech}</p>
                        </li>
                        <li className={styles.info__item}>
                            <i className='bx bx-code-alt'></i>
                            <p className={styles.info__desc}>Langages: {info.langages}</p>
                        </li>
                        <li className={styles.info__item}>
                            <i className='bx bxl-github'></i>
                            <Link href={info.urlGit}>
                                <a className={styles.info__desc} target='_blank'>Demo</a>
                            </Link>
                        </li>
                        <li className={styles.info__item}>
                            <i className='bx bx-link-external'></i>
                            <Link href={info.urlProject}>
                                <a className={styles.info__desc} target='_blank'>Demo</a>
                            </Link>
                        </li>
                    </ul>
                    <Image className={styles.image} src={info.image} alt={info.title} />
                </article>
            </div>
    )
};

export default Modal;