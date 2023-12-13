import Button from '@app/_components/Button'
import Image from '@app/_components/Image'
import { LOGOS } from '@assets/svg/constants'
import { AppShell, Flex, UnstyledButton } from '@mantine/core'
import { IconX } from '@tabler/icons-react'
import CompanyData from '../CompanyData/CompanyData'
import { Links } from '../Links'
import SocialNetworks from '../SocialNetworks/SocialNetworks'

type Props = {
  opened: boolean
  toggle: () => void
}

const Navbar = ({ opened, toggle }: Props) => {
  return (
    <AppShell.Navbar
      py='md'
      bg={'white'}
      zIndex={200}
      h={'100vh'}
      withBorder={false}
      display={opened ? 'flex' : 'none'}
    >
      <Flex
        direction='column'
        h={'100vh'}
        w={'100%'}
        align={'start'}
        justify={'space-between'}
        mb={'3rem'}
        gap='md'
        p={'1rem'}
      >
        <Flex w={'100%'} justify={'space-between'}>
          <Image src={LOGOS.LOGO_NAME_BLACK} alt='Logo Arga' />
          <UnstyledButton>
            <IconX
              onClick={toggle}
              color='black'
              style={{ backgroundColor: 'transparent' }}
              size={36}
              aria-label={'close-navigation-menu-button'}
            />
          </UnstyledButton>
        </Flex>
        <Links toggle={toggle} fw='bold' gap='2rem' />
        <SocialNetworks />
        <CompanyData />
        <Button type='primary' radius={'.2rem'} h={'3rem'} w={'100%'}>
          CONTACTO
        </Button>
      </Flex>
    </AppShell.Navbar>
  )
}
export default Navbar
