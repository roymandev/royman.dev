import BaseLink, { BaseLinkProps } from '@/components/BaseLink';
import twclsx from '@/lib/twclsx';

const HeaderLink = ({ className, ...props }: BaseLinkProps) => (
  <BaseLink
    className={twclsx(
      'z-10 border border-transparent bg-white px-3 py-1 transition-colors hover:border-stone-300',
      className,
    )}
    {...props}
  />
);

export default HeaderLink;
