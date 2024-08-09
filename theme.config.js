/**
 * Icons from react-icons: https://react-icons.github.io/react-icons
 */

import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import { TfiHome } from 'react-icons/tfi'
import { SlUser, SlBriefcase, SlEnvolope } from 'react-icons/sl'

/**
 * Main Menu Items
 */

export const menu = [
  {
    name: 'Home',
    slug: '/',
    Icon: TfiHome,
  },
  {
    name: 'Over Mij',
    slug: '/about',
    Icon: SlUser,
  },
  {
    name: 'Projecten',
    slug: '/projects',
    Icon: SlBriefcase,
  },
  {
    name: 'Contact',
    slug: '/contact',
    Icon: SlEnvolope,
  },
]

/**
 * Social Links under the Main Menu
 */

export const social = [
  {
    name: 'Github',
    url: 'https://github.com/meesgoudbeek',
    Icon: IoLogoGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/meesgoudbeek',
    Icon: IoLogoLinkedin,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/meesgoudbeek/',
    Icon: IoLogoInstagram,
  },
]

/**
 * General configurations
 */

export const config = {
  dateLocale: 'nl-NL',
  dateOptions: {
    // dateOptions is passed to JavaScript's toLocaleDateString()
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  },
  convertKit: {
    tipUrl: 'https://fantastic-mover-3439.ck.page/products/blog',
  },
  contactForm: {
    inputs: require('./content/contact-form.json'),
    recipient: 'meesgoudbeek@protonmail.com',
    sender: 'SENDER@EXAMPLE.com',
    subject: 'EMAIL NOTIFICATION SUBJECT',
  },
}

/**
 * MDX/Markdown configurations
 */

export const mdxConfig = {
  publicDir: 'public',
  pagesDir: 'content',
  fileExt: '.md',
  collections: ['/blog', '/projects'],
  remarkPlugins: [],
  rehypePlugins: [],
}

/**
 * Global SEO configuration for next-seo plugin
 * https://github.com/garmeeh/next-seo
 */

export const siteMetaData = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'http://localhost:3000',
  authorName: 'Mees Goudbeek',
  siteName: 'Mees Goudbeek',
  defaultTitle: 'Mees Goudbeek',
  titleTemplate: 'Mees Goudbeek | %s',
  description: 'Mees is a experienced front-end developer with a broad skillset.',
  email: 'meesgoudbeek@protonmail.com',
  locale: 'nl_NL',
}
