import Config from 'react-native-config';

const localhost: string = 'http://localhost:3000';
const localLocalNetwork: string = 'http://192.168.2.101:3000';

/**
 * @description use it when ios simulator doesn't want to use the value from .env file
 */
const forcedLocalhost = false ? localhost : undefined;
/**
 *  @description use it when running android on a real device
 */
const forcedLocalNetwork = false ? localLocalNetwork : undefined;

const EnvironmentVariables = {
    API_URL:
        forcedLocalhost ||
        forcedLocalNetwork ||
        Config.API_URL ||
        'https://ticketmanager2-8ibpcg4j.ue.gateway.dev',
    WS_URL: Config.WS_URL,
    SUPPORT_EMAIL: Config.SUPPORT_EMAIL,
    GOOGLE_API_KEY: Config.GOOGLE_API_KEY,
    SENTRY_URL: Config.SENTRY_URL,
    SENTRY_ORG: Config.SENTRY_ORG,
    SENTRY_PROJECT: Config.SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN: Config.SENTRY_AUTH_TOKEN,
    SENTRY_KEY: Config.SENTRY_KEY,
    ENVIRONMENT: Config.SENTRY_ENVIRONMENT,
    RELEASE_VERSION: Config.RELEASE_VERSION,
    DEV_ENV: Config.DEV_ENV,
    S3_BUCKET_NAME: Config.S3_BUCKET_NAME,
    IOS_APP_STORE_URL: 'https://apps.apple.com/us/app/materially/id1601551850',
    ANDROID_APP_STORE_URL:
        'https://play.google.com/store/apps/details?id=com.materially.app',
};

export default EnvironmentVariables;
