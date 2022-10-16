import Header from '../components/Header/Header';
import Home from '../components/Home/Home';

import { homeHeading, homeSocial } from '../data/homeData';
import { aboutBox, aboutInfo } from '../data/dataAbout';
import { frontend, backend } from '../data/dataSkills';
import { worksInfo } from '../data/dataWorks';

import styles from '../styles/Index.module.css';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Works from '../components/Works/Works';

const Index = ({
  homeHeading,
  homeSocial,
  aboutBox,
  aboutInfo,
  worksInfo
}) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Home homeHeading={homeHeading} homeSocial={homeSocial} />
        <About aboutBox={aboutBox} aboutInfo={aboutInfo}/>
        <Skills frontend={frontend} backend={backend} />
        <Works worksInfo={worksInfo} />
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
      aboutInfo,
      frontend,
      backend,
      worksInfo
    },
  };
};

export default Index;

