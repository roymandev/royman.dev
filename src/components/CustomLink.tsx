import BaseLink, { BaseLinkProps } from '@/components/BaseLink';
import twclsx from '@/lib/twclsx';

const CustomLink = ({ className, ...rest }: BaseLinkProps) => (
  <BaseLink
    className={twclsx(
      'underline decoration-slate-400 underline-offset-2 hover:decoration-slate-800',
      'outline-none ring-2 ring-transparent focus-visible:outline-none focus-visible:ring-indigo-500/90',
      'dark:decoration-neutral-700 dark:hover:decoration-neutral-400',
      className,
    )}
    {...rest}
  />
);

export default CustomLink;
