const APP_NAME = import.meta.env.VITE_APP_NAME || 'Solid App';
const APP_ENV = import.meta.env.VITE_APP_ENV || 'development';

const CHANGELOG_URL = import.meta.env.VITE_CHANGELOG_URL || 'http://github.com/username/solidjs-chatbot/main';

export {
  APP_NAME,
  APP_ENV,
  CHANGELOG_URL
};