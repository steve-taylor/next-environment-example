import styled from 'styled-components'

import {API_BASE_URL} from '../common/constants'

const Title = styled.h1`
    font-size: 50px;
`

export default function Home() {
    return (
        <main>
            <Title>Next.js runtime environment POC</Title>
            <p>
                API base URL: {API_BASE_URL}
            </p>
        </main>
    )
}
