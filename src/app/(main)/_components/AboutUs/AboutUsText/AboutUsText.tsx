import { Text, Title } from '@mantine/core'
import { clamp } from '@utils/clamp'

const AboutUsText = () => {
  return (
    <>
      <Title size={'14px'} fw={'normal'}>
        NUESTRA HISTORIA
      </Title>
      <Title size={clamp(40, 48)} fw={'bold'}>
        Construyendo juntos <br />
        el futuro
      </Title>
      <Text size={'16px'} lh={'24px'}>
        Nuestro nombre proviene de la cultura &lsquo;argárica&rsquo;, famosa por
        la conservación de sus restos y una de las culturas que mejor entendió
        la importancia de construir para siempre.
      </Text>
      <br />
      <Text size={'16px'} lh={'24px'} mb={'2rem'}>
        Compartimos esta pasión y hemos creado un Mercado de Obra donde
        arquitectos, diseñadores, constructores y proveedores se unen para
        brindarte una experiencia integral.
      </Text>
    </>
  )
}
export default AboutUsText
