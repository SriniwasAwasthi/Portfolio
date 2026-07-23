export const siteConfig = {
  name: 'Sriniwas Awasthi',
  title: 'Sriniwas Awasthi — Computer Science Engineering Student',
  description:
    'Portfolio of Sriniwas Awasthi — 2nd year Computer Science Engineering student at P.D.A College of Engineering (Kalaburagi), building modern web apps, Java DSA tools, and AI systems.',
  url: 'https://srinivas-portfolio.vercel.app', // Fallback URL
  ogImage: 'https://srinivas-portfolio.vercel.app/og.png',
  links: {
    github: 'https://github.com/SriniwasAwasthi',
    linkedin: 'https://www.linkedin.com/in/sriniwas-awasthi210728/',
    email: 'mailto:sriawasthi164@gmail.com',
  },
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'GitHub', href: '#github' },
    { label: 'Contact', href: '#contact' },
  ],
};

export type SiteConfig = typeof siteConfig;
