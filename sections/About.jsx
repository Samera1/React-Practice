'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Sobre el Metaverso" textStyles="text-center" />

      <motion.p 
        variants={fadeIn('up', 'tween', 0.2, 1 )}
        className=" mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Metaverso
        
        es algo nuevo en el futuro, donde puedes disfrutar del mundo virtual sintiendo que es realmente real, puedes sentir lo que sientes en este mundo de metaverso, porque esta es realmente la locura del metaverso de hoy, usando solo dispositivos VR puede explorar fácilmente el mundo del metaverso que desea, convertir sus sueños en realidad. Exploremos la locura del metaverso desplazándonos hacia abajo
      </motion.p>
    </motion.div>
    About section
  </section>
);

export default About;
