import Link, { LinkProps } from 'next/link';

export interface BaseLinkProps extends LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
}

const BaseLink = ({ href, children, title, ...props }: BaseLinkProps) => {
  if (href.startsWith('http'))
    return (
      <a
        title={title}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        {...props}
      >
        {children}
      </a>
    );

  return (
    <Link href={href} {...props}>
      <a title={title} className={props.className}>
        {children}
      </a>
    </Link>
  );
};

export default BaseLink;
