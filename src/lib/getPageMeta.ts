import { DEFAULT_OG_IMAGE, SITE_URL } from '@/constant';
import { NextSeoProps } from 'next-seo';

export interface BasePageMetaProps extends NextSeoProps {
  title: string;
  description: string;
  image?: { url: string; alt: string };
  slug: string;
  type?: 'website';
}

export const getBasePageMeta = ({
  title,
  description,
  image,
  slug,
  type,
  ...rest
}: BasePageMetaProps): NextSeoProps => ({
  title,
  canonical: SITE_URL + slug,
  description,
  openGraph: {
    title,
    description,
    url: SITE_URL + slug,
    type: type || 'website',
    images: [
      {
        ...(image || DEFAULT_OG_IMAGE),
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  ...rest,
});
