import { Container, Typography } from '@mui/material'
import PageLayout from '../components/PageLayout'

export default function Offers() {
    return (
        <PageLayout titl='Ofertas'>
            <Container sx={{
                margin: '64px 0 0 0',
            }}>
                <Typography variant='h3'>Offers Page</Typography>
            </Container>
        </PageLayout>
    )
}