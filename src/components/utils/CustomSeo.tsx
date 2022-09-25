import { NextSeo, NextSeoProps } from 'next-seo';

const CustomSeo = ({ titleTemplate, ...props }: NextSeoProps) => (
  <NextSeo {...props} titleTemplate={`%s - ${titleTemplate || 'Royman.dev'}`} />
);

export default CustomSeo;
