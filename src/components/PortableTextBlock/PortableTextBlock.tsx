'use client';

import { PortableText, PortableTextComponents } from 'next-sanity';
import type { PortableTextBlock as PortableTextBlockType } from '@portabletext/types';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { makeClassName } from '@/utils/makeClassName';
import styles from './PortableTextBlock.module.css';

gsap.registerPlugin(ScrollTrigger);

interface PortableTextBlockProps {
  content: PortableTextBlockType[];
  type: 'mainPage' | 'aboutPage' | 'default';
}

export const PortableTextBlock = ({ content, type = 'default' }: PortableTextBlockProps) => {
  useEffect(() => {
    if (type !== 'aboutPage') return;

    const sections = gsap.utils.toArray<HTMLElement>(`.${styles.subBlock}.${styles.aboutPage}`);

    sections.forEach((section, i) => {
      // добавляем data-index для CSS
      section.dataset.index = String(i + 1);

      // создаём пин-эффект
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        pin: true,
        pinSpacing: false,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [type]);

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
      subBlock: ({ value }) => (
        <section
          className={makeClassName([
            [styles.subBlock, true],
            [styles[type], type],
          ])}
        >
          <div className={styles.container}>
            <h3 className={styles.title}>{value.title}</h3>
            <div className={styles.description}>
              <PortableText value={value.blockContent ?? []} components={baseComponents} />
            </div>
          </div>
        </section>
      ),
    },
  };

  return <PortableText value={content} components={baseComponents} />;
};
