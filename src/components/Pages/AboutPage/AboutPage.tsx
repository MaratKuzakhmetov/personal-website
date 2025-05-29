'use client';

import { motion } from 'framer-motion';
import styles from './AboutPage.module.css';
import { DataTypes } from '@/types/DataTypes';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

interface AboutPageProps {
  data: DataTypes;
}

export const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  const { about } = data;
  const currentSkills = about.skills.currentSkills;

  return (
    <div className={styles.aboutContainer}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.section className={styles.section} variants={itemVariants}>
          <h2 className={styles.sectionTitle}>{about.title}</h2>
          <p className={styles.paragraph}>{about.intro}</p>
          <p className={styles.paragraph}>{about.background}</p>
        </motion.section>

        <motion.section className={styles.section} variants={itemVariants}>
          <h2 className={styles.sectionTitle}>{about.skills.title}</h2>
          <p className={styles.paragraph}>{about.skills.intro}</p>
          <div className={styles.skillsGrid}>
            {currentSkills.map(skill => (
              <motion.div key={skill.title} className={styles.skillCard} variants={itemVariants}>
                <h3 className={styles.skillTitle}>{skill.title}</h3>
                <p className={styles.skillDescription}>{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className={styles.section} variants={itemVariants}>
          <h2 className={styles.sectionTitle}>{about.interests.title}</h2>
          <p className={styles.paragraph}>{about.interests.description}</p>
        </motion.section>
      </motion.div>
    </div>
  );
};
