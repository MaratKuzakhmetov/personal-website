import { PortableText, PortableTextComponents } from 'next-sanity';

const components: PortableTextComponents = {
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
};

interface PortableTextBlockProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
}

export const PortableTextBlock = ({ content }: PortableTextBlockProps) => (
  <PortableText value={content} components={components} />
);
