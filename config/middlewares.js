module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'https://cdn.sohnne.com',
            'https://d1h30a9w33js5b.cloudfront.net'
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'https://cdn.sohnne.com',
            'https://d1h30a9w33js5b.cloudfront.net'
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      formLimit: '20mb', // Increase form body size
      jsonLimit: '20mb', // Increase JSON body size
      textLimit: '20mb', // Increase text body size
      formidable: {
        maxFileSize: 20 * 1024 * 1024, // 20MB in bytes
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];