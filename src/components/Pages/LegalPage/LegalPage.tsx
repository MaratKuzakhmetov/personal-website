import { PortableTextBlock } from '@/components/PortableTextBlock';
import type { PortableTextBlock as PortableTextBlockType } from '@portabletext/types';

import styles from './LegalPage.module.css';

interface LegalPageProps {
  data: {
    title?: string;
    content?: PortableTextBlockType[];
  } | null;
}

export const LegalPage: React.FC<LegalPageProps> = ({ data }) => {
  return (
    <div className={styles.root}>
      {data?.title && <h1 className={styles.title}>{data.title}</h1>}
      <PortableTextBlock content={data?.content ?? []} type="default" />
    </div>
  );
};
