import BaseLink, { BaseLinkProps } from '@/components/BaseLink';
import twclsx from '@/lib/twclsx';

const CustomLink = ({ className, ...rest }: BaseLinkProps) => (
  <BaseLink
    className={twclsx(
      'underline decoration-cyan-200/30 underline-offset-2 transition duration-300 hover:text-cyan-100 hover:decoration-cyan-200/50 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/70',
      className,
    )}
    {...rest}
  />
);

export default CustomLink;
