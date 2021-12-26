/**
 * Global types definition for
 * environment variables.
 *
 * @summary environment variables schema
 */
declare global {
    namespace NodeJS {
        // NOTE: only string type is supported
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production' | 'test';
            REACT_APP_ENV: 'dev' | 'qa' | 'prod';

            // SECTION: project info from package.json
            REACT_APP_VERSION: string;
            REACT_APP_NAME: string;
            REACT_APP_TITLE: string;
            REACT_APP_DESCRIPTION: string;

            // SECTION: base config
            PORT: string;
            PUBLIC_URL: string;
            REACT_APP_DEBUG: 'true' | 'false';
            REACT_APP_SERVICE_WORKER: 'true' | 'false';
            REACT_APP_BASE_PATH: string;
        }
    }

    // SECTION: custom global types

    type UUID = `${string}-${string}-${string}-${string}-${string}`;

    type NumberString = `${number}`;
}

export {};
