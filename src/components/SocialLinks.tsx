import CustomButton from '@/components/CustomButton';
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';

const SocialLinks = () => (
  <>
    <CustomButton type="secondary" icon href="mailto:royman.dev@gmail.com">
      <FaRegEnvelope className="h-5 w-5" />
    </CustomButton>
    <CustomButton type="secondary" icon href="https://github.com/roymandev">
      <FaGithub className="h-5 w-5" />
    </CustomButton>
    <CustomButton
      type="secondary"
      icon
      href="https://www.linkedin.com/in/roymandev"
    >
      <FaLinkedinIn className="h-5 w-5" />
    </CustomButton>
  </>
);

export default SocialLinks;
