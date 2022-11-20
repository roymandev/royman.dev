import BaseLink, { BaseLinkProps } from '@/components/BaseLink';
import twclsx from '@/lib/twclsx';

const LinkPrimary = ({ className, ...rest }: BaseLinkProps) => (
  <BaseLink
    className={twclsx(
      'rounded-md py-2 px-5 transition-all hover:bg-zinc-800 hover:shadow hover:text-white',
      className,
    )}
    {...rest}
  />
);

export default LinkPrimary;
