import Header from '../components/Header/Header';
import Home from '../components/Home/Home';

import { homeHeading, homeSocial } from '../data/homeData';
import { aboutBox, aboutInfo } from '../data/dataAbout';

import styles from '../styles/Index.module.css';
import About from '../components/About/About';

const Index = ({
  homeHeading,
  homeSocial,
  aboutBox,
  aboutInfo
}) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Home homeHeading={homeHeading} homeSocial={homeSocial} />
        <About aboutBox={aboutBox} aboutInfo={aboutInfo}/>
      </main>
    </>
  )
};

export const getStaticProps = async () => {
  return {
    props: {
      homeHeading,
      homeSocial,
      aboutBox,
      aboutInfo
    },
  };
};

export default Index;

