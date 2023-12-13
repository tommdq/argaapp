import { useMediaQuery } from '@mantine/hooks'
import { mediaQuerys } from './../../configs/mediaQuerys'

const useDeviceType = () => {
  const isMobile = useMediaQuery(`(max-width: ${mediaQuerys.tablet})`)
  const isTablet = useMediaQuery(`(min-width: ${mediaQuerys.tablet})`)
  const isDesktop = useMediaQuery(`(min-width: ${mediaQuerys.desktop})`)

  return { isMobile, isTablet, isDesktop }
}

export default useDeviceType
