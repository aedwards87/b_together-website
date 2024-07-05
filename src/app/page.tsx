import { Metadata } from 'next';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

/**
 * This component renders your homepage.
 *
 * Use Next's generateMetadata function to render page metadata.
 *
 * Use the SliceZone to render the content of the page.
 */

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle('settings');
  const page = await client.getByUID('page', 'home');

  return {
    title:
      `${settings.data.siteTitle} | ${page.data.title[0]?.text}` ||
      'b_together | Nursery',
    description: settings.data.metaDescription,
    openGraph: {
      title: `b_together | ${page.data.metaTitle}` || 'b_together | Nursery',
      images: [
        {
          url: settings.data.ogImage.url || '/og-image.png',
        },
      ],
    },
  };
}

export default async function Index() {
  /**
   * The client queries content from the Prismic API
   */
  const client = createClient();
  const home = await client.getByUID('page', 'home');

  return <SliceZone slices={home.data.slices} components={components} />;
}
