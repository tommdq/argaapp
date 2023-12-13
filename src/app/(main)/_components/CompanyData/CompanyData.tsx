import { Flex, Text } from '@mantine/core'

const CompanyData = () => {
  return (
    <Flex direction={'column'} gap={'1rem'}>
      <div>
        <Text fw={'bold'}>Arga Mercado de Obra</Text>
        <Text>Acceso Este, Arturo González y Maipú, Mendoza.</Text>
      </div>
      <div>
        <Text>Tel: 261 4718228</Text>
        <Text>Mail: comercial@arga.ar</Text>
      </div>
    </Flex>
  )
}
export default CompanyData
