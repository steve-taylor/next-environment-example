import getConfig from 'next/config'

type RuntimeConfig = {
    publicRuntimeConfig: {
        apiOrigin?: string
    }
}

const {publicRuntimeConfig} = getConfig() as RuntimeConfig

if (!publicRuntimeConfig.apiOrigin) {
    console.error('WARNING: Missing API_ORIGIN environment variable.')
    console.error('         API calls will be made to the same origin.')
}

export const API_ORIGIN = publicRuntimeConfig.apiOrigin ?? ''

export const API_BASE_URL = `${API_ORIGIN}/api/v1`
