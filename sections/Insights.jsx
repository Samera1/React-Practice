'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, InsightCard, TitleText } from '../components';
import { staggerContainer } from '../utils/motion';
import { insights } from '../constants';

const Insights = () => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: 'false', amount: 0.25 }}
    className={`${styles.paddings} mx-auto flex flex-col`}
  >
    <TypingText title="Perspectiva" textStyles="text-center" />
    <TitleText
      title="Perspectivas sobre el Metaverso"
      textStyles="text-center"
    />
    <div className="mt-[50px] flex flex-col gap-[30px]">
      {insights.map((insight, index) => (
        <InsightCard key={`insight-${index}`} {...insight} index={index + 1} />

      ))}
    </div>

  </motion.div>
);

export default Insights;
