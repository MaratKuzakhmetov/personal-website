import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout/Layout';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const Hero = styled.div`
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 2.25rem;
  font-weight: bold;
  color: var(--color-text);
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }

  [data-theme='dark'] & {
    color: var(--color-text-dark);
  }
`;

const Description = styled(motion.div)`
  font-size: 1.25rem;
  color: var(--color-gray-600);

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  [data-theme='dark'] & {
    color: var(--color-gray-300);
  }

  p + p {
    margin-top: 0.5rem;
  }
`;

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Hero>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('title')}
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>{t('intro.greeting')}</p>
          <p>{t('intro.description')}</p>
        </Description>
      </Hero>
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
