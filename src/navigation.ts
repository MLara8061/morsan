import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Servicios',
      href: getPermalink('/services'),
    },
    {
      text: 'Acerca de',
      href: getPermalink('/about'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Contáctanos', href: getPermalink('/contact'), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Navegación',
      links: [
        { text: 'Inicio', href: getPermalink('/') },
        { text: 'Servicios', href: getPermalink('/services') },
        { text: 'Acerca de', href: getPermalink('/about') },
        { text: 'Contacto', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { text: 'Guardias 24/7', href: getPermalink('/services') },
        { text: 'Monitoreo CCTV', href: getPermalink('/services') },
        { text: 'Control de Accesos', href: getPermalink('/services') },
        { text: 'Seguridad Hotelera', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'Tel: 998-677-2992', href: 'tel:+529986772992' },
        { text: 'Cel: 998-319-1259', href: 'tel:+529983191259' },
        { text: 'Email', href: 'mailto:contactogrupomorsan@gmail.com' },
        { text: 'Cancún, Q. Roo', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/share/1BJnXU8Dg5/' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
    Powered by <a class="text-blue-600 underline dark:text-muted" href="https://wa.me/529985401540" target="_blank" rel="noopener">Arla</a> · Grupo Morsan Seguridad Privada © ${new Date().getFullYear()} · Todos los derechos reservados.
  `,
};
