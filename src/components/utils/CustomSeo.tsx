import { BasePageMetaProps, getBasePageMeta } from '@/lib/getPageMeta';
import { NextSeo } from 'next-seo';

const CustomSeo = ({ titleTemplate, ...props }: BasePageMetaProps) => (
  <NextSeo
    {...getBasePageMeta(props)}
    titleTemplate={`%s - ${titleTemplate || 'Royman.dev'}`}
  />
);

export default CustomSeo;
