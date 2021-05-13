import NextApp from 'next/app'
import React, {ComponentType} from 'react'

import './_app.css'

type PageProps = Record<string, unknown>

type Props = {
    Component: ComponentType<PageProps>
    pageProps: PageProps // populated with getServerSideProps and friends
}

export default function App({
    Component,
    pageProps,
}: Props): JSX.Element {
    return (
        <Component {...pageProps} />
    )
}

// Opt out of automatic static HTML generation (that's what a CDN is for) to enable runtime configuration.
// This prevents accidentally omitting getInitialProps from a page that needs runtime config.
App.getInitialProps = NextApp.getInitialProps.bind(App)
