// ==================================================
// Server configs
// ==================================================

// Note:
// - Default environment is 'development'
// - Jest test environment is 'test'
const { NODE_ENV } = process.env;
const HOST = process.env.HOST || null;

function setupPort(env, port) {
  switch (env) {
    case 'development':
    case 'production':
      return 3000;

    case 'test':
      return 8888;

    default:
      return +(port || 3003);
  }
}

const PORT = setupPort(NODE_ENV, process.env.PORT);

// ==================================================
// Environment configs
// ==================================================

// const PATHS = {
//   LOGIN_PAGE: `${process.env.CONSOLE_API_URL}/3.0/authenticate/user`,
//   GOOGLE_VERIFY: 'https://www.google.com/recaptcha/api/siteverify',
//   API_BASE_URL_V1: `${process.env.CONSOLE_API_URL}/3.0/`,
//   API_BASE_URL_V2: `${process.env.CATALYST_CONSOLE_API_URL}/`,
// };

// const googleApi = {
//   development: 'AIzaSyAkb5YQ2W-h1FBiQ6Yvom4n0ACRqlfU2HQ', // LWY's key
//   production: 'AIzaSyDhyJDIeVR812WNJcPCmeOsHs35Q0_YknQ', // pulse's key
// };

// ==================================================
// Config default values
// ==================================================

// const GOOGLE_API_KEY = googleApi[NODE_ENV];

// ==================================================
// Exports
// ==================================================

module.exports = {
  NODE_ENV, // e.g. "production". Used for string-based configs.
  [NODE_ENV.toUpperCase()]: true, // e.g. PRODUCTION: true. Used for bool-based configs.
  PORT,
  HOST,
  PATHS,
  setupPort,
  GOOGLE_API_KEY,
};
