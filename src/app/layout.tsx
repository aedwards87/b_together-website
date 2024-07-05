import { Metadata } from 'next';
import { PrismicPreview } from '@prismicio/next';
import { createClient, repositoryName } from '@/prismicio';
import { SpeedInsights } from '@vercel/speed-insights/next';
// Imported Styles
import './styles/globals.css';
import { fonts } from './styles/fonts/fonts';
// Imported Components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="any" href="/favicon.ico" />
        {/* <!-- OneTrust Cookies Consent Notice start for www.b-together.com --> */}
        <script
          src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
          type="text/javascript"
          charSet="UTF-8"
          data-domain-script="1926b376-230b-4280-aadc-8432cb420235"
          async
        />
        <script type="text/javascript">function OptanonWrapper() {}</script>
        {/* <!-- OneTrust Cookies Consent Notice end for www.b-together.com --> */}
      </head>
      <body className={fonts.className}>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
        <SpeedInsights />
      </body>
    </html>
  );
}
