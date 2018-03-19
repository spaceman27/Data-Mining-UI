// `.env.ts` is generated by the `npm run env` command
import env from './.env.json';

export const environment = {
  production: true,
  version: env.npm_package_version,
  baseUrl: 'dist',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'fr-FR'
  ]
};
