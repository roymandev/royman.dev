import Link, { LinkProps } from 'next/link';

export interface BaseLinkProps extends LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const BaseLink = ({ href, children, ...props }: BaseLinkProps) => {
  if (href.startsWith('http'))
    return (
      <a href={href} rel="noopener noreferrer" target="_blank" {...props}>
        {children}
      </a>
    );

  return (
    <Link href={href} {...props}>
      <a className={props.className}>{children}</a>
    </Link>
  );
};

export default BaseLink;
