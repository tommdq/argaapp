import DESCRIPTION_BLOCK_BG from '@assets/img/bg-description-block.png'
import HIGHLIGHTS_BG from '@assets/img/bg-highlight.png'
import NEWSLETTER_BG from '@assets/img/bg-newsletter.png'
import SHOPPING_TOUR_BG from '@assets/img/bg-shopping-tour.png'
import TRUST_US_BG from '@assets/img/bg-trust-in-us.png'
import HEAVEN from '@assets/img/heaven.png'
import HIGHLIGHT from '@assets/img/highlight-img.png'
import STICKER from '@assets/img/sticker-arga.png'
import SIMPLE_TECH_SLIDER from '../img/locals/SIMPLE_TECH.png'
import SIMPLE_TECH_LOGO from '../img/locals/simpletech/logo.png'
import SIMPLE_TECH_1 from '../img/locals/simpletech/product1.png'
import SIMPLE_TECH_2 from '../img/locals/simpletech/product2.png'
import SIMPLE_TECH_3 from '../img/locals/simpletech/product3.png'
import ABOUT_US from './about-us-img.png'
import ARQUITECTS from './architect-img.png'
import LOCALS_DESCRIPTION_BG from './bg-locals-description.png'
import ABERTEC_BG from './locals/ABERTEC_BG.png'
import ALOISIO_BG from './locals/ALOISIO_BG.png'
import HIPERCERAMICO_BG from './locals/HIPERCERAMICO_BG.png'
import LTN_BG from './locals/LTN_BG.png'
import MANAGER_ELECTRIC_BG from './locals/MANAGER_ELECTRIC_BG.png'
import MILLENIUM_BG from './locals/MILLENIUM_BG.png'
import MOKKA_BG from './locals/MOKKA_BG.png'
import VIVERO_ARABIA_BG from './locals/VIVERO_ARABIA_BG.png'
import A30 from './locals/products/abertec/A30.png'
import Blindex from './locals/products/abertec/Blindex.png'
import DOMO_2_3_4_Hojas from './locals/products/abertec/DOMO 2-3-4 Hojas.png'
import MAP from './map.png'
import PROFESSIONALS from './professional-img.png'
import PROXIMAMENTE from './proximamente.png'

const IMAGES = {
  NEWSLETTER_BG,
  PROFESSIONALS,
  ARQUITECTS,
  ABOUT_US,
  MAP,
  TRUST_US_BG,
  HIGHLIGHTS_BG,
  HIGHLIGHT,
  SHOPPING_TOUR_BG,
  HEAVEN,
  STICKER,
  DESCRIPTION_BLOCK_BG,
  LOCALS_DESCRIPTION_BG,
  SIMPLE_TECH: {
    LOGO: SIMPLE_TECH_LOGO,
    SLIDER: SIMPLE_TECH_SLIDER,
    PRODUCTS: [
      { image: SIMPLE_TECH_1, description: 'UV Lamp Go' },
      { image: SIMPLE_TECH_2, description: 'UV Lamp Pro' },
      { image: SIMPLE_TECH_3, description: 'UV Stick' }
    ]
    // PRODUCTS: [SIMPLE_TECH_1, SIMPLE_TECH_2, SIMPLE_TECH_3]
  }
}

const LOCALS_BG = {
  ABERTEC_BG,
  ALOISIO_BG,
  HIPERCERAMICO_BG,
  LTN_BG,
  MANAGER_ELECTRIC_BG,
  MILLENIUM_BG,
  MOKKA_BG,
  VIVERO_ARABIA_BG
}

const PRODUCTS = {
  A30,
  Blindex,
  DOMO_2_3_4_Hojas,
  PROXIMAMENTE
}

export { IMAGES, LOCALS_BG, PRODUCTS }
