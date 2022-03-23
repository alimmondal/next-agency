import Head from 'next/head';
import Intro from '../components/Intro';
import Services from '../components/Services';
import styles from '../styles/Home.module.css';
import { data } from '../data';
import Testimonials from '../components/Testimonials';

export default function Home({ services }) {
  console.log(services);
  return (
    <div className={styles.container}>
      <Head>
        <title>agency</title>
        <meta name="description" content="this is agency portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};
