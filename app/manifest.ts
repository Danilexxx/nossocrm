import type { MetadataRoute } from 'next';
import { brandConfig } from '@/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brandConfig.name,
    short_name: brandConfig.shortName,
    description: brandConfig.description,
    start_url: '/boards',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: brandConfig.primaryColor,
    icons: [
      {
        src: brandConfig.logoUrl,
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}