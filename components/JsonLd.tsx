import { siteConfig } from '@/config/site';

/**
 * Injects JSON-LD structured data for Google rich results.
 * Implements Person + WebSite schema.
 */
export function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sriniwas Awasthi',
    alternateName: 'Sriniwas Awasthi',
    description:
      '2nd year Computer Science Engineering Student at P.D.A College of Engineering, Full Stack Developer, and AI Systems Builder based in Kalaburagi, India.',
    url: siteConfig.url,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    jobTitle: 'Computer Science Engineering Student',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'P.D.A College of Engineering',
    },
    knowsAbout: [
      'Full Stack Development',
      'Artificial Intelligence',
      'TypeScript',
      'Next.js',
      'Java',
      'Python',
      'Data Structures and Algorithms',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kalaburagi',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: 'Sriniwas Awasthi',
    },
    inLanguage: 'en-US',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
