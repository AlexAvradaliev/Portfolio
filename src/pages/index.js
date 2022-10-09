import Header from '../components/Header/Header';
import Home from '../components/Home/Home';

import  {homeHeading, homeSocial}  from '../data/homeData';

import styles from '../styles/Index.module.css';

const Index = ({
  homeHeading,
  
}) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Home homeHeading={homeHeading} homeSocial={homeSocial}/>
      </main>
    </>
  )
};

export const getStaticProps = async () => {
  return {
    props: {
      homeHeading,
      homeSocial
    },
  };
};

export default Index;

