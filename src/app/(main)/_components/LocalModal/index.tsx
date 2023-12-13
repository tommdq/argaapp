'use client'
import Image from '@app/_components/Image'
import useDeviceType from '@app/_hooks/useDeviceType'
import { ICONS } from '@assets/svg/constants'
import { Local } from '@locals/mockups'
import { Carousel } from '@mantine/carousel'
import { Box, Flex, Modal, ScrollArea, Text } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { LocalInfo } from './LocalInfo'
import styles from './localModal.module.css'

export function LocalModal({ localData }: { localData: Local }) {
  const router = useRouter()
  const { isMobile, isTablet } = useDeviceType()
  console.log('🚀 ~ file: index.tsx:15 ~ LocalModal ~ isMobile:', isMobile)

  function handleClose() {
    router.push('/locals', { scroll: false })
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
        content: { height: isMobile ? undefined : '95%' },
        body: {
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: isMobile ? 'column-reverse' : 'row'
        }
      }}
    >
      {/* Left Card */}
      <Flex direction={'column'} component={'article'} style={{ flex: 1 }}>
        <Carousel
          height={'100%'}
          h={'58%'}
          withControls={false}
          withIndicators
          loop
          styles={{
            indicator: { background: 'white', height: '9px', width: '10px' }
          }}
        >
          <Carousel.Slide>
            <Image
              src={localData.banner}
              alt='simple tech'
              radius={0}
              h={'100%'}
            />
          </Carousel.Slide>
        </Carousel>
        <LocalInfo localInfo={localData.info} />
      </Flex>
      {/* Right card */}
      <Flex
        direction={'column'}
        component={'article'}
        justify={'space-between'}
        style={{ flex: 1, position: 'relative', background: '#F6F6F6' }}
        p={'2rem'}
        gap={'2rem'}
      >
        <Flex gap={'2rem'} pos={'absolute'} top={0} right={0} m={'1rem'}>
          <Image
            src={ICONS.EXPORT}
            alt={'close icon'}
            w={'1.5rem'}
            h={'auto'}
            fit={'contain'}
            style={{ cursor: 'pointer' }}
          />
          <Image
            src={ICONS.CLOSE}
            alt={'close icon'}
            fit={'contain'}
            w={'1.5rem'}
            h={'auto'}
            style={{ cursor: 'pointer' }}
            onClick={handleClose}
          />
        </Flex>
        {/* Links Locales */}
        <Flex
          direction={'column'}
          justify={'space-between'}
          style={{ flex: 1 }}
          gap={'1rem'}
        >
          <Box
            style={{
              padding: '.5rem',
              width: 'fit-content',
              height: 'fit-content',
              borderRadius: '1rem'
            }}
            className={styles.box}
          >
            <Image
              src={localData.logo}
              alt={localData.name}
              style={{
                objectFit: 'contain',
                maxWidth: '10rem',
                maxHeight: '10rem'
              }}
              // fill
            />
          </Box>
          <Text>{localData.info.description}</Text>
          <Box>
            {localData.info?.networks?.web && (
              <Flex justify={'space-between'} align={'center'}>
                <Flex align={'center'} gap={'sm'}>
                  <Image src={ICONS.LOCAL_URL} alt={'local url'} />
                  <Text
                    ta={'left'}
                    size={'m'}
                    style={{ wordBreak: 'break-all' }}
                  >
                    {localData.info.networks.web}
                  </Text>
                </Flex>
                <Image
                  src={ICONS.ARROW_INDICATIONS_BLACK}
                  alt={'arrow indications'}
                  w={'1rem'}
                />
              </Flex>
            )}
            {localData.info?.networks?.instagram && (
              <Flex justify={'space-between'} align={'center'} mt={'sm'}>
                <Flex align={'center'} gap={'sm'}>
                  <Image
                    src={ICONS.LOCAL_INSTAGRAM}
                    alt={'local instagram'}
                    radius={'xl'}
                  />
                  <Text
                    ta={'left'}
                    size={'m'}
                    style={{ wordBreak: 'break-all' }}
                  >
                    {localData.info.networks.instagram}
                  </Text>
                </Flex>
                <Image
                  src={ICONS.ARROW_INDICATIONS_BLACK}
                  alt={'arrow indications'}
                  w={'1rem'}
                />
              </Flex>
            )}
          </Box>
        </Flex>
        {/* Productos destacados */}
        <Flex direction={'column'} style={{ flex: 0 }}>
          <Text fw={'bold'} size={'xl'} mb={'md'}>
            Productos destacados
          </Text>
          <ScrollArea>
            <Flex gap={'xl'}>
              {localData.products.map((product) => (
                <Flex
                  direction={'column'}
                  key={product.title}
                  gap={'.5rem'}
                  justify={'flex-start'}
                  h={'fit-content'}
                  p={'1rem'}
                >
                  <Image
                    src={product.img}
                    alt={product?.title ?? 'proximamente'}
                    className={styles.productImage}
                  />
                  {product?.title && <Text fw={'bold'}>{product.title}</Text>}
                </Flex>
              ))}
            </Flex>
          </ScrollArea>
        </Flex>
      </Flex>
    </Modal>
  )
}
