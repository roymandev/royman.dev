import BaseLink, { BaseLinkProps } from '@/components/BaseLink';
import twclsx from '@/lib/twclsx';

const CustomLink = ({ className, ...rest }: BaseLinkProps) => (
  <BaseLink
    className={twclsx(
      'underline decoration-cyan-200/30 underline-offset-2 hover:text-cyan-100 hover:decoration-cyan-200/50',
      className,
    )}
    {...rest}
  />
);

export default CustomLink;
