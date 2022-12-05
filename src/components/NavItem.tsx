import CustomButton from '@/components/CustomButton';
import twclsx from '@/lib/twclsx';
import { useRouter } from 'next/router';

export interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children }: NavItemProps) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <CustomButton
      type="secondary"
      href={href}
      className={twclsx(isActive ? 'font-bold' : 'text-cyan-100/50')}
    >
      {children}
    </CustomButton>
  );
};

export default NavItem;
