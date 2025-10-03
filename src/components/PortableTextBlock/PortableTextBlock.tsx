import { PortableText, PortableTextComponents } from 'next-sanity';
import type { PortableTextBlock as PortableTextBlockType } from '@portabletext/types';
import { makeClassName } from '@/utils/makeClassName';
import { motion } from 'framer-motion';
import styles from './PortableTextBlock.module.css';

interface PortableTextBlockProps {
  content: PortableTextBlockType[];
  type: 'mainPage' | 'aboutPage' | 'default';
}

export const PortableTextBlock = ({ content, type = 'default' }: PortableTextBlockProps) => {
  const baseComponents: PortableTextComponents = {
    block: {
      normal: ({ children }) => <p>{children}</p>,
      right: ({ children }) => <p style={{ textAlign: 'right' }}>{children}</p>,
      blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    },
    list: {
      bullet: ({ children }) => <ul>{children}</ul>,
    },
    marks: {
      link: ({ children, value }) => (
        <a href={value.href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
      textColor: ({ children, value }) => <span style={{ color: value.value }}>{children}</span>,
      highlightColor: ({ children, value }) => (
        <span style={{ background: value.value }}>{children}</span>
      ),
    },
    listItem: ({ children }) => (
      <li>
        <span>{children}</span>
      </li>
    ),

    types: {
      subBlock: ({ value }) => {
        return (
          <div
            className={makeClassName([
              [styles.subBlock, true],
              [styles[type], type],
            ])}
            // style={{ background: value?.background } as React.CSSProperties}
          >
            <div className={styles.container}>
              <motion.h3
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                {value.title}
              </motion.h3>

              <motion.div
                className={styles.description}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <PortableText value={value.blockContent ?? []} components={baseComponents} />
              </motion.div>
            </div>
          </div>
        );
      },
    },
  };

  return <PortableText value={content} components={baseComponents} />;
};
