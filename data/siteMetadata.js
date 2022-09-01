const siteMetadata = {
  title: 'Cris Blog',
  author: 'Cristian Gallegos',
  fullName: 'Cristian Jacob Gallegos Corona',
  headerTitle: 'Cris Blog',
  description: 'Cris Blog',
  language: 'es-mx',
  theme: 'system',
  siteUrl: 'https://my-blog-three-flax.vercel.app',
  siteRepo: 'https://github.com/CrisJGC/my-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  // socialBanner: '/static/images/twitter-card.png',
  email: 'jacob.gallegos.c@gmail.com',
  github: 'https://github.com/CrisJGC',
  twitter: 'https://twitter.com/CrisDevW',
  facebook: 'https://facebook.com',
  youtube: 'https://www.youtube.com/channel/UCAXDgdsaouDxqpfi65tOqew',
  linkedin: 'https://www.linkedin.com/in/cristian-jacob-gallegos-corona-48b320226/',
  locale: 'es-MX',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false,
    umamiWebsiteId: '',
    googleAnalyticsId: '',
    posthogAnalyticsId: '',
  },
  newsletter: {
    provider: 'buttondown',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'es',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '',
      label: '',
      theme: '',
      darkTheme: '',
    },
    disqusConfig: {
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
