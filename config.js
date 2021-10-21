import getConfig from 'next/config'

/*
NOTE:

This config exist because of different behavior when reading environment
variables in Vercel server and the server running with Docker (Helm).
https://github.com/vercel/next.js/discussions/13427

By default, Next.js can read environment variables directly using process.env.[SOME_KEY].
In Docker, we need to setup Express server and read environment variables using next-dotenv.
In contrast, Vercel server return empty object when using getConfig();

To resolve this issue, you need to read environment variables from this config file.
*/

const config = getConfig() || {}

const isConfigHasValue = Boolean(config.publicRuntimeConfig?.NEXT_PUBLIC_API_URL)

const configAlternative = {
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_FB_API_KEY: process.env.NEXT_PUBLIC_FB_API_KEY,
    NEXT_PUBLIC_FB_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
    NEXT_PUBLIC_FB_PROJECT_ID: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
    NEXT_PUBLIC_FB_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
    NEXT_PUBLIC_FB_SENDER_ID: process.env.NEXT_PUBLIC_FB_SENDER_ID,
    NEXT_PUBLIC_FB_APP_ID: process.env.NEXT_PUBLIC_FB_APP_ID,
  },
  serverRuntimeConfig: {},
}

export const publicRuntimeConfig = isConfigHasValue
  ? config.publicRuntimeConfig
  : configAlternative.publicRuntimeConfig

export const serverRuntimeConfig = isConfigHasValue
  ? config.serverRuntimeConfig
  : configAlternative.serverRuntimeConfig
