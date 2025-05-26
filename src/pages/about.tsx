import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout/Layout';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const Section = styled(motion.section)`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: var(--color-text);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SkillCard = styled(motion.div)`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--color-gray-100);
  text-align: center;

  [data-theme='dark'] & {
    background-color: var(--color-gray-800);
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
`;

const SkillDescription = styled.p`
  font-size: 0.875rem;
  color: var(--color-text);
`;

export default function About() {
  const { t, i18n } = useTranslation('common');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skills = {
    en: [
      { title: 'Frontend', description: 'React, Next.js, TypeScript, CSS-in-JS' },
      { title: 'Backend', description: 'Node.js, Express, Python, Django' },
      { title: 'Database', description: 'PostgreSQL, MongoDB, Redis' },
      { title: 'DevOps', description: 'Docker, AWS, CI/CD' },
    ],
    ru: [
      { title: 'Фронтенд', description: 'React, Next.js, TypeScript, CSS-in-JS' },
      { title: 'Бэкенд', description: 'Node.js, Express, Python, Django' },
      { title: 'Базы данных', description: 'PostgreSQL, MongoDB, Redis' },
      { title: 'DevOps', description: 'Docker, AWS, CI/CD' },
    ],
    de: [
      { title: 'Frontend', description: 'React, Next.js, TypeScript, CSS-in-JS' },
      { title: 'Backend', description: 'Node.js, Express, Python, Django' },
      { title: 'Datenbank', description: 'PostgreSQL, MongoDB, Redis' },
      { title: 'DevOps', description: 'Docker, AWS, CI/CD' },
    ],
  };

  const currentSkills = skills[i18n.language as keyof typeof skills] || skills.en;

  return (
    <Layout>
      <AboutContainer>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Section variants={itemVariants}>
            <SectionTitle>{t('about.title')}</SectionTitle>
            <Paragraph>{t('about.intro')}</Paragraph>
            <Paragraph>{t('about.background')}</Paragraph>
          </Section>

          <Section variants={itemVariants}>
            <SectionTitle>{t('about.skills.title')}</SectionTitle>
            <Paragraph>{t('about.skills.intro')}</Paragraph>
            <SkillsGrid>
              {currentSkills.map(skill => (
                <SkillCard key={skill.title} variants={itemVariants}>
                  <SkillTitle>{skill.title}</SkillTitle>
                  <SkillDescription>{skill.description}</SkillDescription>
                </SkillCard>
              ))}
            </SkillsGrid>
          </Section>

          <Section variants={itemVariants}>
            <SectionTitle>{t('about.interests.title')}</SectionTitle>
            <Paragraph>{t('about.interests.description')}</Paragraph>
          </Section>
        </motion.div>
      </AboutContainer>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
