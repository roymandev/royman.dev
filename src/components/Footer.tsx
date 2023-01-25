import CustomButton from '@/components/CustomButton';
import SocialLinks from '@/components/SocialLinks';
import twclsx from '@/lib/twclsx';
import { HiArrowUp } from 'react-icons/hi2';

export type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => {
  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      className={twclsx(
        'container mx-auto flex max-w-4xl items-center gap-3 py-32 px-6',
        className,
      )}
    >
      <SocialLinks />

      <CustomButton
        title="Back to top"
        icon
        className="ml-auto"
        onClick={scrollToTopHandler}
      >
        <HiArrowUp className="h-5 w-5" />
      </CustomButton>
    </footer>
  );
};

export default Footer;
