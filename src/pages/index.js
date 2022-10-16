import { homeHeading, homeSocial } from '../data/homeData';
import { aboutBox, aboutInfo } from '../data/dataAbout';
import { frontend, backend } from '../data/dataSkills';
import { worksInfo } from '../data/dataWorks';
import { FormProvider } from '../components/Contact/context/formContext';

import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Works from '../components/Works/Works';
import Contact from '../components/Contact/Contact';

import styles from '../styles/Index.module.css';
import Footer from '../components/Footer/Footer';

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
        <About aboutBox={aboutBox} aboutInfo={aboutInfo} />
        <Skills frontend={frontend} backend={backend} />
        <Works worksInfo={worksInfo} />
        <FormProvider>
          <Contact />
        </FormProvider>
        <Footer homeSocial={homeSocial} />
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

