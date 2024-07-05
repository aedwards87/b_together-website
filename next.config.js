/** @type {import('next').NextConfig} */

//
// Below are all redirects
//

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/signup',
        destination: 'https://btogetheruk.perfectgym.com/clientportal2/#/login',
        permanent: true,
      },
      {
        source: '/sjw',
        destination: '/',
        permanent: true,
      },
      {
        source: '/membership-and-classes',
        destination: '/',
        permanent: true,
      },
      {
        source: '/membership-enquire',
        destination: '/events-enquire',
        permanent: true,
      },
      {
        source: '/camps',
        destination: '/holiday-camps',
        permanent: true,
      },
      {
        source: '/events',
        destination: '/parties',
        permanent: true,
      },
      {
        source: '/contact', // TO DO: create contact page
        destination: '/membership-enquire',
        permanent: true,
      },
      {
        source: '/confirmation',
        destination: '/thank-you',
        permanent: true,
      },
      {
        source: '/class-confirmation/',
        destination: '/thank-you',
        permanent: true,
      },
      {
        source: '/camps-confirmation/',
        destination: '/thank-you',
        permanent: true,
      },
      {
        source: '/classes',
        destination: '/membership-and-classes',
        permanent: true,
      },
      {
        source: '/faq-childcare',
        destination: '/nursery#faqs',
        permanent: true,
      },
      {
        source: '/nursery#faq',
        destination: '/nursery#faqs',
        permanent: true,
      },
      {
        source: '/childcare',
        destination: '/nursery',
        permanent: true,
      },
      {
        source: '/the-club',
        destination: '/membership-and-classes',
        permanent: true,
      },
      {
        source: '/camps-timetable',
        destination: '/camps#timetable',
        permanent: true,
      },
      {
        source: '/camps-timetable/:slug',
        destination: '/camps#timetable',
        permanent: true,
      },
      {
        source: '/classes-timetable',
        destination: '/classes#timetable',
        permanent: true,
      },
      {
        source: '/classes-timetable/:slug',
        destination: '/classes#timetable',
        permanent: true,
      },
      {
        source: '/easter-competition/',
        destination: '/membership-and-classes',
        permanent: true,
      },
      {
        source: '/parents-mingle-6th-june/',
        destination: '/parties',
        permanent: true,
      },
      {
        source: '/author/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/join-the-team',
        destination: '/',
        permanent: true,
      },
      {
        source: '/book-a-tour',
        destination: '/membership-enquire',
        permanent: true,
      },
      {
        source: '/spending-the-summer-in-london',
        destination: '/',
        permanent: true,
      },
      {
        source: '/open-day',
        destination: 'https://join-b-together-open-day.framer.website/',
        permanent: true,
      },
      {
        source: '/category',
        destination: '/',
        permanent: true,
      },
      {
        source: '/category/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/news-category/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/christmas-market',
        destination: '/',
        permanent: true,
      },
      {
        source: '/choosing-christmas-gifts-with-a-conscience/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/deck-the-halls-with-boughs-and-berries',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sustainable-christmas-wrapping-suggestions',
        destination: '/',
        permanent: true,
      },
      {
        source: '/how-to-choose-a-sustainable-christmas-tree',
        destination: '/',
        permanent: true,
      },
      {
        source: '/exhibitors',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:slug/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:slug/:slug/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:slug/:slug/:slug/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/covid-19',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/london',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dashboard_staging',
        destination: '/',
        permanent: true,
      },
      {
        source: '/transactions',
        destination: '/',
        permanent: true,
      },
      {
        source: '/test-page',
        destination: '/',
        permanent: true,
      },
      {
        source: '/whats-on-members-test',
        destination: '/parties',
        permanent: true,
      },
      {
        source: '/news',
        destination: '/',
        permanent: true,
      },
      {
        source: '/barclaycard-flexcheckout-exception',
        destination: '/',
        permanent: true,
      },
      {
        source: '/barclaycard-flexcheckout',
        destination: '/',
        permanent: true,
      },
      {
        source: '/barclaycard-flexcheckout-accept',
        destination: '/',
        permanent: true,
      },
      {
        source: '/transactions',
        destination: '/',
        permanent: true,
      },
      {
        source: '/club-faqs',
        destination: '/membership-and-classes',
        permanent: true,
      },
      {
        source: '/profile',
        destination:
          'https://btogetheruk.perfectgym.com/ClientPortal2/#/Profile/Family',
        permanent: true,
      },
      {
        source: '/dashboard',
        destination:
          'https://btogetheruk.perfectgym.com/ClientPortal2/#/Profile/Family',
        permanent: true,
      },
      {
        source: '/careers',
        destination: '/',
        permanent: true,
      },
      {
        source: '/whats-on',
        destination: '/parties',
        permanent: true,
      },
      {
        source: '/atfeast.com',
        destination: 'https://atfeast.com',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
