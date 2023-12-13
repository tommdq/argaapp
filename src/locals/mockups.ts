import { PRODUCTS } from '@assets/img/constants'
import { BANNERS, LOGOS } from '@assets/locals/locals'
import { StaticImageData } from 'next/image'

enum categories {
  'CONTRUCCION_Y_FERRETERIA',
  'ENERGIA_Y_SUSTENTABILIDAD',
  'TECNOLOGIA_Y_SEGURIDAD',
  'DECORACION_Y_MOBILIARIO'
}

export type Local = {
  name: string
  logo: string
  icon: string
  banner: StaticImageData
  category: categories
  categoryName: string
  info: LocalInfo
  products: Product[]
}

export type LocalInfo = {
  localNumber: string
  tags: string[]
  schedule: string
  description: string
  networks: {
    web: string
    instagram: string
  }
}

type Product = {
  img: StaticImageData
  title?: string
}

export const locals: Local[] = [
  {
    name: 'ABERTEC',
    logo: LOGOS.ABERTEC_LOGO,
    icon: LOGOS.ABERTEC_LOGO,
    banner: BANNERS.ABERTEC_BANNER,
    category: categories.CONTRUCCION_Y_FERRETERIA,
    categoryName: 'FERRETERÍA',
    info: {
      localNumber: 'Local C4-5',
      tags: ['PVC', 'Vidrio', 'Aberturas', 'Aluminio', 'Diseño'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Aberturas Inteligentes en Vidrio, PVC y Aluminio. Invertimos en tecnología y desarrollo de productos para otorgarles a nuestros clientes las mejores soluciones de tecnología en aberturas.',
      networks: {
        web: 'www.abertec.com.ar',
        instagram: 'instagram.com/abertec_aberturas_inteligentes'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'SIMPLETECH',
    logo: LOGOS.SIMPLE_TECH_LOGO,
    icon: LOGOS.SIMPLE_TECH_LOGO,
    banner: BANNERS.SIMPLE_TECH_BANNER,
    category: categories.CONTRUCCION_Y_FERRETERIA,
    categoryName: 'CONSTRUCCIÓN',
    info: {
      localNumber: 'Local 23',
      tags: ['Paredes', 'Techos', 'Paneles', 'Aislantes', 'Fachadas', 'Muros'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Simpletech es una solución integral para construir tu techo de manera rápida y eficiente, renovar o ampliar espacios en el ámbito residencial.',
      networks: {
        web: 'www.grupoltn.com',
        instagram: 'instagram.com/grupoltn.oficial'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'BRINCALTO',
    logo: LOGOS.BRINCALTO_LOGO,
    icon: LOGOS.BRINCALTO_LOGO,
    banner: BANNERS.BRINCALTO_BANNER,
    category: categories.CONTRUCCION_Y_FERRETERIA,
    categoryName: 'ARIDOS CONTENEDORES MOV SUELOS',
    info: {
      localNumber: 'Local A11',
      tags: ['Aridos', 'Suelos', 'Carga', 'Transporte'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'VENTA DE ARIDOS, MOVIMIENTO DE SUELOS, TRANSPORTE DE CARGAS.',
      networks: {
        web: '',
        instagram: 'instagram.com/brincalto.sa'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE,
        title: ''
      },
      {
        img: PRODUCTS.PROXIMAMENTE,
        title: ''
      },
      {
        img: PRODUCTS.PROXIMAMENTE,
        title: ''
      }
    ]
  },
  {
    name: 'ALOISIO',
    logo: LOGOS.ALOISIO_LOGO,
    icon: LOGOS.ALOISIO_LOGO,
    banner: BANNERS.ALOISIO_BANNER,
    category: categories.ENERGIA_Y_SUSTENTABILIDAD,
    categoryName: 'CLIMATIZACIÓN',
    info: {
      localNumber: 'Local B12',
      tags: ['Aridos', 'Suelos', 'Carga', 'Transporte'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Venta de productos y servicios de aire acondicionado y calefaccion. Departamento técnico de climatización residencial comercial e industrial. Departamento de arquitectura y diseño.',
      networks: {
        web: 'www.aloisiofriocalor.com',
        instagram: 'instagram.com/aloisio.friocalor'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'BANCO NACION',
    logo: LOGOS.BANCO_NACION_LOGO,
    icon: LOGOS.BANCO_NACION_LOGO,
    banner: BANNERS.BANCO_NACION_BANNER,
    category: categories.CONTRUCCION_Y_FERRETERIA,
    categoryName: 'BANCO',
    info: {
      localNumber: 'Local C6',
      tags: ['Banco', 'Cajas', 'Retiros', 'Tarjetas', 'Finanzas'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Productos, servicios y promociones diseñados para atender las necesidades de personas y empresas de los distintos sectores productivos del país..',
      networks: {
        web: 'www.bna.com.ar/personas',
        instagram: 'instagram.com/banconacion'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'LADRILLERA BASILE',
    logo: LOGOS.BASILE_LOGO,
    icon: LOGOS.BASILE_LOGO,
    banner: BANNERS.BASILE_BANNER,
    category: categories.CONTRUCCION_Y_FERRETERIA,
    categoryName: 'CONSTRUCCION',
    info: {
      localNumber: 'Local C10',
      tags: [
        'Ladrillos',
        'Ladrillones',
        'Construccion',
        'Tarjetas',
        'Finanzas'
      ],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Empresa dedicada a la comercialización en el área de la construcción de variedades de ladrillos y de ladrillones; y a la comercialización de carbonilla.',
      networks: {
        web: 'www.ladrillerabasile.com.ar',
        instagram: 'instagram.com/ladrillerabasile'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'HIPER CERAMICO',
    logo: LOGOS.HIPER_CERAMICO_LOGO,
    icon: LOGOS.HIPER_CERAMICO_LOGO,
    banner: BANNERS.HIPER_CERAMICO_BANNER,
    category: categories.CONTRUCCION_Y_FERRETERIA,
    categoryName: 'CONSTRUCCION',
    info: {
      localNumber: 'Local C1-2-3',
      tags: [
        'Ceramicos',
        'Diseño',
        'Arquitectura',
        'Revestimiento',
        'Terminación'
      ],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Visitanos y encontrá pisos, revestimientos y equipamiento para baños y cocinas para que tu casa quede increíble..',
      networks: {
        web: 'linktr.ee/hiperceramico',
        instagram: 'instagram.com/hiperceramico'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'HERRAJES BAUZA',
    logo: LOGOS.BAUZA_LOGO,
    icon: LOGOS.BAUZA_LOGO,
    banner: BANNERS.BAUZA_BANNER,
    category: categories.CONTRUCCION_Y_FERRETERIA,
    categoryName: 'HERRAJES',
    info: {
      localNumber: 'Local B8',
      tags: [
        'Herrajes',
        'Cerraduras',
        'Correderas',
        'Picaportes',
        'Herramientas'
      ],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Empresa Familiar fundada en el año 1.979 dedicada a la comercialización de herrajes. Con la más amplia variedad de productos.',
      networks: {
        web: 'www.herrajesbauza.com.ar',
        instagram: 'instagram.com/herrajesbauza'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'GIUFFRE MADERAS',
    logo: LOGOS.GIUFFRE_LOGO,
    icon: LOGOS.GIUFFRE_LOGO,
    banner: BANNERS.GIUFFRE_BANNER,
    category: categories.CONTRUCCION_Y_FERRETERIA,
    categoryName: 'MADERAS',
    info: {
      localNumber: 'Local B10',
      tags: ['Melaminas', 'Maderas', 'Terciados', 'Cantos', 'Fenólicos'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Todos los productos que comercializamos están producidos en base a materia prima proveniente de plantaciones forestales manejadas y certificadas bajo estándar de manejo sostenible.',
      networks: {
        web: 'www.giuffremaderas.com.ar',
        instagram: 'instagram.com/giuffremaderas'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'FISCHER',
    logo: LOGOS.FISCHER_LOGO,
    icon: LOGOS.FISCHER_LOGO,
    banner: BANNERS.FISCHER_BANNER,
    category: categories.CONTRUCCION_Y_FERRETERIA,
    categoryName: 'FISCHER POINT',
    info: {
      localNumber: 'Local A7',
      tags: ['Fijaciones', 'Sistemas', 'Abrazaderas', 'Driwall', 'Mechas'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Empresa multinacional alemana, líder en la fabricación y distribución de sistemas de fijación para el sector de la construcción y el hobbista.',
      networks: {
        web: 'linktr.ee/fischerlatam',
        instagram: 'instagram.com/fischerlatam'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'CHIRINO',
    logo: LOGOS.CHIRINO_LOGO,
    icon: LOGOS.CHIRINO_LOGO,
    banner: BANNERS.CHIRINO_BANNER,
    category: categories.CONTRUCCION_Y_FERRETERIA,
    categoryName: 'LADRILLOS Y PRENSADOS',
    info: {
      localNumber: 'Local B6',
      tags: [
        'Ceramicos',
        'Prensados',
        'Premoldeados',
        'Cerámicos',
        'Ladrillos'
      ],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Líderes en la oferta de soluciones avanzadas y sostenibles de alta tecnología para el sector de la construcción. Nuestro enfoque principal se centra en la eficiencia, el ahorro y la excelencia en la fabricación de nuestra variedad de productos: ladrillos cerámicos, premoldeados y pretensados.',
      networks: {
        web: 'www.chirino.com',
        instagram: 'instagram.com/industriaschas'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'HORMISERV SRL',
    logo: LOGOS.HORMISERV_LOGO,
    icon: LOGOS.HORMISERV_LOGO,
    banner: BANNERS.HORMISERV_BANNER,
    category: categories.CONTRUCCION_Y_FERRETERIA,
    categoryName: 'HORMIGON',
    info: {
      localNumber: 'Local C11',
      tags: ['Aridos', 'Materiales', 'Hormigon', 'Construcción', 'Cemento'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Producción y comercialización de hormigón, áridos y materiales de construcción en forma integral, es decir incluyendo las etapas de extracción, clasificación y transporte de material bruto desde sus canteras hasta bases operativas.',
      networks: {
        web: 'www.hormiserv.com.ar',
        instagram: 'instagram.com/hormisersrl'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'LAFUENTE',
    logo: LOGOS.LA_FUENTE_LOGO,
    icon: LOGOS.LA_FUENTE_LOGO,
    banner: BANNERS.LA_FUENTE_BANNER,
    category: categories.DECORACION_Y_MOBILIARIO,
    categoryName: 'AMOBLAMIENTOS',
    info: {
      localNumber: 'Local C11',
      tags: ['Aridos', 'Materiales', 'Hormigon', 'Construcción', 'Cemento'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Producción y comercialización de hormigón, áridos y materiales de construcción en forma integral, es decir incluyendo las etapas de extracción, clasificación y transporte de material bruto desde sus canteras hasta bases operativas.',
      networks: {
        web: 'www.lafuentemuebles.com.ar',
        instagram: 'instagram.com/lafuentemuebles'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'MACHENA',
    logo: LOGOS.MACHENA_LOGO,
    icon: LOGOS.MACHENA_LOGO,
    banner: BANNERS.MACHENA_BANNER,
    category: categories.CONTRUCCION_Y_FERRETERIA,
    categoryName: 'FERRETERIA INDUSTRIAL',
    info: {
      localNumber: 'Local A1-2',
      tags: ['Ferreteria', 'Equipos', 'Herrajes', 'Amoladora', 'Taller'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'FERRETERÍA INDUSTRIAL.Desde 1956, la misma pasión por las herramientas.',
      networks: {
        web: 'www.machenaonline.com',
        instagram: 'instagram.com/marchena.ferreteria'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'MACROMAT',
    logo: LOGOS.MACROMAT_LOGO,
    icon: LOGOS.MACROMAT_LOGO,
    banner: BANNERS.MACROMAT_BANNER,
    category: categories.ENERGIA_Y_SUSTENTABILIDAD,
    categoryName: 'INSTALACIONES ELECTRICAS',
    info: {
      localNumber: 'Local B4',
      tags: ['Tubo', 'Riegos', 'Instalaciones', 'Sanitarios', 'Accesorios'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Tubos y accesorios para instalaciones sanitarias, riegos y redes de insfraestructura.',
      networks: {
        web: 'www.macromatsa.com',
        instagram: 'instagram.com/macromatsa'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'MANAGER ELECTRIC',
    logo: LOGOS.MANAGER_ELECTRIC_LOGO,
    icon: LOGOS.MANAGER_ELECTRIC_LOGO,
    banner: BANNERS.MANAGER_ELECTRIC_BANNER,
    category: categories.ENERGIA_Y_SUSTENTABILIDAD,
    categoryName: 'INSTALACIONES ELECTRICAS',
    info: {
      localNumber: 'Local A5',
      tags: ['Energia', 'Paneles', 'Solar', 'Sostenible', 'LED'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Nos especializamos en brindar soluciones energéticas sostenibles para un futuro más verde. Somos expertos en asesoramiento, venta e instalación de productos lumínicos LED, paneles solares y termotanques solares.',
      networks: {
        web: 'www.managerelectric.com',
        instagram: 'instagram.com/managerelectric'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'MARMOLES CANADA',
    logo: LOGOS.MARMOLES_CANADA_LOGO,
    icon: LOGOS.MARMOLES_CANADA_LOGO,
    banner: BANNERS.MARMOLES_CANADA_BANNER,
    category: categories.CONTRUCCION_Y_FERRETERIA,
    categoryName: 'MARMOLES',
    info: {
      localNumber: 'Local A12',
      tags: ['Marmol', 'Pisos', 'Granitos', 'Baño', 'Cocina'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Nos dedicamos a la producción de mármoles y granitos a medida. Cocinas, baños, pisos travertino rústico y pulido, y piscinas.',
      networks: {
        web: 'linktr.ee/marmolescanada',
        instagram: 'instagram.com/marmoles_canada'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'SALDAÑA',
    logo: LOGOS.SALDANA_LOGO,
    icon: LOGOS.SALDANA_LOGO,
    banner: BANNERS.SALDANA_BANNER,
    category: categories.DECORACION_Y_MOBILIARIO,
    categoryName: 'ACERO CEMENTO CIDERURGICA',
    info: {
      localNumber: 'Local A3-4',
      tags: ['Materiales', 'Hierro', 'Ciderúrgico', 'Construcción', 'Barras'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Contamos con experiencia en la comercialización de materiales siderúrgicos: hierros para la construcción, caños estructurales, perfiles, vigas, barras, y mucho más.',
      networks: {
        web: 'www.salanamateriales.com',
        instagram: 'instagram.com/saldanamateriales'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'PHB PREMOLDEADOS',
    logo: LOGOS.PHB_PREMOLDEADOS_LOGO,
    icon: LOGOS.PHB_PREMOLDEADOS_LOGO,
    banner: BANNERS.PHB_PREMOLDEADOS_BANNER,
    category: categories.CONTRUCCION_Y_FERRETERIA,
    categoryName: 'PREMOLDEADOS',
    info: {
      localNumber: 'Local A8',
      tags: ['Hormigon', 'Camaras', 'Premoldeados', 'Piletas', 'Cierres'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Si busca productos premoldeados, PMB Premoldeados Barboza es el lugar indicado. Líderes en la fabricación de productos Premoldeados.',
      networks: {
        web: 'www.premoldeadosbarboza.com',
        instagram: 'instagram.com/phbpremoldeados'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'OROPEL',
    logo: LOGOS.OROPEL_LOGO,
    icon: LOGOS.OROPEL_LOGO,
    banner: BANNERS.OROPEL_BANNER,
    category: categories.TECNOLOGIA_Y_SEGURIDAD,
    categoryName: 'AISLACION',
    info: {
      localNumber: 'Local B2',
      tags: ['Easy', 'Aislante', 'Easy Panel', 'Membrana', 'Sustentable'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'El Mejor Sistema Constructivo del Momento. Aislantes Oropel S.A. es líder en fabricación y distribución de Easy Panel.',
      networks: {
        web: 'www.aislantesoropelsa.com',
        instagram: 'instagram.com/aislanteoropen'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'MS1',
    logo: LOGOS.MS1_LOGO,
    icon: LOGOS.MS1_LOGO,
    banner: BANNERS.MS1_BANNER,
    category: categories.TECNOLOGIA_Y_SEGURIDAD,
    categoryName: 'TECNOLOGIA',
    info: {
      localNumber: 'Local A9',
      tags: ['Seguridad', 'Camaras', 'Tecnología', 'Alarmas'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Trabajamos con personal altamente capacitado, con certificaciones y motivado para brindarte la mejor solución. Ofrecemos soluciones específicas a cada problemática desde la seguridad y tecnología.',
      networks: {
        web: 'www.ms1seguridad.com',
        instagram: 'instagram.com/ms1seguridad'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'MOKKA',
    logo: LOGOS.MOKKA_LOGO,
    icon: LOGOS.MOKKA_LOGO,
    banner: BANNERS.MOKKA_BANNER,
    category: categories.DECORACION_Y_MOBILIARIO,
    categoryName: 'CAFE RESTO',
    info: {
      localNumber: '',
      tags: ['Cafe', 'Meriendas', 'Comidas', 'Cafeteria', 'Descanso'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description: 'Somos más que una simple cafeteria, descubri porque.',
      networks: {
        web: 'mokkacafeterias.taplink.ws/p/cc1887',
        instagram: 'instagram.com/mokkacoffeestore'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'SALDAÑA KNAUF',
    logo: LOGOS.KNAUF_LOGO,
    icon: LOGOS.KNAUF_LOGO,
    banner: BANNERS.KNAUF_BANNER,
    category: categories.CONTRUCCION_Y_FERRETERIA,
    categoryName: 'CONSTRUCCION EN SECO',
    info: {
      localNumber: 'Local A6',
      tags: ['Yeso', 'Revoque', 'Cieloraso', 'Construcción', 'Seco'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Distribuidor oficial de Knauf y Barbieri, líder mundial en sistemas de construcción en seco. Contamos con una amplia variedad de productos para la construcción en seco.',
      networks: {
        web: 'www.knauf.com.ar',
        instagram: 'instagram.com/saldanaconstruccionesenseco'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'SIERRA',
    logo: LOGOS.SIERRA_LOGO,
    icon: LOGOS.SIERRA_LOGO,
    banner: BANNERS.SIERRA_BANNER,
    category: categories.ENERGIA_Y_SUSTENTABILIDAD,
    categoryName: 'ILUMINACION DOMOTICA',
    info: {
      localNumber: 'Local B6',
      tags: ['Iluminación', 'Luz', 'Instalación', 'Electricidad', 'Colgantes'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description: 'Transformamos tus espacio con luz, diseño y calidad.',
      networks: {
        web: 'www.sierraelectricidad.com.ar',
        instagram: 'instagram.com/sierrailuminacion'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'TEKHOME',
    logo: LOGOS.TEKHOME_LOGO,
    icon: LOGOS.TEKHOME_LOGO,
    banner: BANNERS.TEKHOME_BANNER,
    category: categories.DECORACION_Y_MOBILIARIO,
    categoryName: 'MODULOS HABITACIONALES',
    info: {
      localNumber: 'Out 1',
      tags: ['Modular', 'Construcción', 'Arquitectura', 'Diseño'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description: '',
      networks: {
        web: 'www.practicasas.com.ar',
        instagram: 'instagram.com/tekhome.am'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'TRUCKSMEN',
    logo: LOGOS.TRUCKSMEN_LOGO,
    icon: LOGOS.TRUCKSMEN_LOGO,
    banner: BANNERS.TRUCKSMEN_BANNER,
    category: categories.CONTRUCCION_Y_FERRETERIA,
    categoryName: 'TRUKSMEN',
    info: {
      localNumber: 'Out 2',
      tags: [
        'Transporte',
        'Utilitario',
        'Camiones',
        'Concesionaria',
        'Vehículo'
      ],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Concesionario Oficial FOTON TRUCKS MENDOZA - ZANELLA TRUCKS MENDOZA Lider en Utilitarios y Camiones',
      networks: {
        web: 'www.fotontrucks.com.ar',
        instagram: 'instagram.com/trucks_men'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'VIVERO ARABIA',
    logo: LOGOS.VIVERO_ARABIA_LOGO,
    icon: LOGOS.VIVERO_ARABIA_LOGO,
    banner: BANNERS.VIVERO_ARABIA_BANNER,
    category: categories.DECORACION_Y_MOBILIARIO,
    categoryName: 'VIVERO',
    info: {
      localNumber: 'Local A10',
      tags: ['Vivero', 'Plantas', 'Jardín', 'Paisajismo', 'Árboles'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'Plantas de parque | Plantas Interior | Arboles frutales | Plantines | Diseño de jardines | Tierra preparada | Productor | Plantas en general.',
      networks: {
        web: '',
        instagram: 'instagram.com/vivero_arabia'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  },
  {
    name: 'VOLTICA',
    logo: LOGOS.VOLTICA_LOGO,
    icon: LOGOS.VOLTICA_LOGO,
    banner: BANNERS.VOLTICA_BANNER,
    category: categories.ENERGIA_Y_SUSTENTABILIDAD,
    categoryName: 'MATERIALES ELECTRICOS',
    info: {
      localNumber: 'Local B5',
      tags: ['Insumo', 'Electricidad', 'Asesoramiento', 'Ingeniería'],
      schedule: 'Lunes a domingos - 11.00 a 19.00hs',
      description:
        'En Vóltica, entendemos que tus proyectos requieren de mucho más que solo productos. Nuestra amplia experiencia respalda nuestro compromiso de brindarte la mejor variedad en insumos eléctricos y también el asesoramiento que tus proyectos necesitan.',
      networks: {
        web: '',
        instagram: 'instagram.com/voltica_materiales_electricos'
      }
    },
    products: [
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      },
      {
        img: PRODUCTS.PROXIMAMENTE
      }
    ]
  }
]
