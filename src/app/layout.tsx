import '@/app/globals.css'
import '@mantine/carousel/styles.css'
import { ColorSchemeScript, Container } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import type { Metadata } from 'next'
import { Providers } from './Providers'

export const metadata: Metadata = {
  title: 'Arga - Mercado de Obra',
  description:
    'Descubre Arga App, la plataforma líder que conecta a profesionales de la construcción y clientes. Encuentra expertos, obtén presupuestos y gestiona tus proyectos de manera eficiente. ¡Transforma tus ideas en realidad!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          <Container size='1440px' p={0} style={{ overflowX: 'hidden' }}>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  )
}
