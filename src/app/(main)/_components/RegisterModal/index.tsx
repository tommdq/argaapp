'use client'
import Button from '@app/_components/Button'
import Image from '@app/_components/Image'
import useDeviceType from '@app/_hooks/useDeviceType'
import { ArrowDown } from '@assets/svg/components/ArrowDown'
import { ICONS } from '@assets/svg/constants'
import {
  Checkbox,
  Flex,
  Group,
  LoadingOverlay,
  Modal,
  Select,
  Text,
  TextInput
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import { useRouter, useSearchParams } from 'next/navigation'
import { setTimeout } from 'timers'
import { AboutRegister } from './AboutRegister'
import styles from './registerModal.module.css'

export function RegisterModal() {
  const { isMobile, isTablet } = useDeviceType()
  const [visible, handlers] = useDisclosure(false)
  const searchParams = useSearchParams()
  const isArquitect = searchParams.get('registerModal') === 'arquitect'
  const router = useRouter()

  function handleClose() {
    router.push('/', { scroll: false })
  }

  const form = useForm({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: '',
      website: '',
      profession: '', // TODO -> Add tuple with professions
      serviceOfInterest: '' // TODO -> Add tuple with services
    },
    validate: {
      name: (value) => (value.length < 4 ? 'Ingrese un nombre válido' : null),
      phoneNumber: (value) =>
        value.length < 10 ? 'Ingrese un número válido' : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : 'Ingrese un email válido'
    }
  })

  type FormValues = typeof form.values

  function handleSubmit(values: FormValues) {
    console.log(values)
    handlers.open()
    setTimeout(() => {
      handlers.close()
      notifications.show({
        message: 'El registro se generó con exito',
        autoClose: 2500,
        color: 'orange'
      })
      form.reset()
      router.push('/', { scroll: false })
    }, 2000)
  }

  return (
    <Modal
      opened={true}
      onClose={handleClose}
      centered
      withCloseButton={false}
      overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
      size={isTablet || isMobile ? '100%' : '80%'}
      radius={'lg'}
      padding={0}
      styles={{
        content: { height: '95%' },
        body: {
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: isMobile ? 'column' : 'row',
          overflowY: isMobile ? undefined : 'hidden'
        }
      }}
    >
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
      />

      <AboutRegister isArquitect={isArquitect} />
      {/* TODO Componetizar <Form /> */}
      <form
        className={styles.form}
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
        <Image
          src={ICONS.CLOSE}
          alt={'close icon'}
          pos={'absolute'}
          top={0}
          right={0}
          fit={'contain'}
          w={'auto'}
          m={'xl'}
          style={{ cursor: 'pointer' }}
          onClick={handleClose}
        />
        <TextInput
          type={'text'}
          label={'Nombre'}
          variant={'unstyled'}
          w={'100%'}
          withAsterisk
          classNames={{ input: styles.input, label: styles.label }}
          {...form.getInputProps('name')}
        />
        <TextInput
          type={'number'}
          label={'Teléfono'}
          variant={'unstyled'}
          withAsterisk
          classNames={{ input: styles.input, label: styles.label }}
          {...form.getInputProps('phoneNumber')}
        />
        <TextInput
          type={'text'}
          label={'Email'}
          variant={'unstyled'}
          withAsterisk
          classNames={{ input: styles.input, label: styles.label }}
          {...form.getInputProps('email')}
        />
        <TextInput
          type={'text'}
          label={'Sitio web o instagram'}
          variant={'unstyled'}
          classNames={{ input: styles.input, label: styles.label }}
          {...form.getInputProps('website')}
        />
        <Select
          type={'text'}
          label={isArquitect ? 'Tipo de profesional' : 'Elige una profesión'}
          variant={'unstyled'}
          withAsterisk
          rightSection={<ArrowDown />}
          data={[
            'Trabajo independiente',
            'Estudio propio',
            'Grupo empresarial',
            'Trabajo academico',
            'Arquitecto',
            'Constructora'
          ]}
          classNames={{
            input: styles.input,
            description: styles.description,
            dropdown: styles.dropdown,
            label: styles.label,
            option: styles.dropdownOption
          }}
          {...form.getInputProps('profession')}
        />
        <Checkbox.Group
          label={'Seleccionar los servicios de interés'}
          size={'xl'}
          withAsterisk
          classNames={{
            root: styles.checkboxContainer,
            label: styles.checkboxLabel
          }}
        >
          <Group
            className={styles.checkboxWrapper}
            {...form.getInputProps('serviceOfInterest', { type: 'checkbox' })}
          >
            <Checkbox
              size={isMobile || isTablet ? 'md' : 'lg'}
              radius={'md'}
              label={'Salas de reuniones'}
              color={'black'}
              classNames={{ icon: styles.checkboxIcon, input: styles.checkbox }}
              value={'meetingRooms'}
            />
            <Checkbox
              size={isMobile || isTablet ? 'md' : 'lg'}
              radius={'md'}
              label={'Café y delicias'}
              color={'black'}
              classNames={{ icon: styles.checkboxIcon, input: styles.checkbox }}
              value={'amenities'}
            />
            <Checkbox
              size={isMobile || isTablet ? 'md' : 'lg'}
              radius={'md'}
              label={'Oficinas'}
              color={'black'}
              classNames={{ icon: styles.checkboxIcon, input: styles.checkbox }}
              value={'offices'}
            />
            <Checkbox
              size={isMobile || isTablet ? 'md' : 'lg'}
              radius={'md'}
              label={'Auditorio'}
              color={'black'}
              classNames={{ icon: styles.checkboxIcon, input: styles.checkbox }}
              value={'auditorium'}
            />
          </Group>
        </Checkbox.Group>
        <Flex
          justify={'space-between'}
          align={'center'}
          direction={isMobile ? 'column' : 'row'}
        >
          {isMobile ? (
            <Text
              size='1rem'
              className={styles.terms}
              w={isMobile ? '100%' : 'auto'}
            >
              Acepto las{' '}
              <span style={{ textDecoration: 'underline' }}>
                condiciones de servicio
              </span>{' '}
              y la{' '}
              <span style={{ textDecoration: 'underline' }}>
                política de privacidad.
              </span>
            </Text>
          ) : (
            <Text
              size='1rem'
              className={styles.terms}
              w={isMobile ? '100%' : 'auto'}
            >
              Acepto las{' '}
              <span style={{ textDecoration: 'underline' }}>
                condiciones de servicio
              </span>
              <br /> y la{' '}
              <span style={{ textDecoration: 'underline' }}>
                política de privacidad.
              </span>
            </Text>
          )}
          {/* TODO -> Hacer logica disabled */}
          <Button
            type={'primary'}
            w={isMobile ? '100%' : '10rem'}
            size={'xl'}
            radius={'md'}
            m={isMobile ? 'md' : '0'}
            fw={'bold'}
            isSubmit
          >
            ENVIAR
          </Button>
        </Flex>
      </form>
    </Modal>
  )
}
