export const siteConfig = {
  author: 'EverLeon',
  title: 'EverLeon',
  subtitle: '爱唯写在西元前',
  description: 'A Minimal, SEO-friendly portfolio and blog theme for Astro.',
  image: {
    src: '/hero.jpg',
    alt: 'Website Main Image',
  },
  email: 'reply@everleon.top',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/ChanYiCYJ/',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
  ],
  header: {
    logo: {
      src: '/favicon.svg',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
      {
        text: 'Projects',
        href: '/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
    ],
  },
  footer: {
    navLinks: [
      {
        src: '/Unionlogo.svg',
        href: 'https://space.bilibili.com/475906147',
      },
    ],
  },
}

export default siteConfig
