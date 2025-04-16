import { IFinancialProduct, ProductCategory } from '@/types/Product';

export const productsMock: IFinancialProduct[] = [
  {
    id: 'prod-001',
    name: 'Cuenta Ahorro Plus',
    description: 'Cuenta de ahorros con intereses competitivos y sin comisiones',
    category: 'cuentas',
    interestRate: 3.5,
    minimumBalance: 100,
    riskLevel: 'bajo',
    benefits: [
      'Sin comisiones de mantenimiento',
      'Acceso a banca móvil 24/7',
      'Tarjeta débito gratuita',
      'Hasta 4 retiros mensuales sin costo'
    ],
    features: [
      'Tasa de interés anual del 3.5%',
      'Saldo mínimo de apertura $100',
      'Asegurada por el IPAB hasta por $2,500,000',
      'App móvil con reconocimiento facial'
    ],
    monthlyFee: 0,
    imageUrl: '/images/savings-account.png',
    recommended: true
  },
  {
    id: 'prod-002',
    name: 'Tarjeta Oro',
    description: 'Tarjeta de crédito con beneficios exclusivos',
    category: 'tarjetas',
    annualFee: 1200,
    riskLevel: 'medio',
    benefits: [
      '1% cashback en todas tus compras',
      'Seguro de protección de compras',
      'Acceso a salas VIP en aeropuertos',
      'Asistencia de viaje internacional'
    ],
    features: [
      'Línea de crédito desde $20,000 hasta $150,000',
      'Tasa de interés preferencial del 24% anual',
      '12 meses sin intereses en compras superiores a $3,000',
      'Cobertura de seguro contra fraude'
    ],
    imageUrl: '/images/gold-card.png',
    recommended: true
  },
  {
    id: 'prod-003',
    name: 'Fondo de Inversión Conservador',
    description: 'Inversión de bajo riesgo con rendimientos estables',
    category: 'inversiones',
    interestRate: 5.2,
    riskLevel: 'bajo',
    benefits: [
      'Liquidez diaria',
      'Diversificación automática',
      'Rendimientos superiores a CETES',
      'Sin penalización por retiro'
    ],
    features: [
      'Horizonte de inversión recomendado: 6+ meses',
      'Inversión mínima $1,000',
      'Comisión de administración del 0.8% anual',
      'Rendimiento histórico del 5.2% anual'
    ],
    imageUrl: '/images/conservative-fund.png',
    recommended: false
  },
  {
    id: 'prod-004',
    name: 'Préstamo Personal Express',
    description: 'Préstamo rápido con mínimos requisitos',
    category: 'prestamos',
    interestRate: 18.5,
    riskLevel: 'medio',
    benefits: [
      'Aprobación en 24 horas',
      'Sin aval ni garantía',
      'Plazos flexibles de 12 a 60 meses',
      'Pagos fijos durante todo el plazo'
    ],
    features: [
      'Montos desde $5,000 hasta $500,000',
      'CAT promedio del 25.3%',
      'Seguro de desempleo incluido',
      'Posibilidad de adelantar pagos sin penalización'
    ],
    imageUrl: '/images/personal-loan.png',
    recommended: false
  },
  {
    id: 'prod-005',
    name: 'Seguro de Auto Plus',
    description: 'Cobertura amplia para tu automóvil',
    category: 'seguros',
    riskLevel: 'medio',
    benefits: [
      'Cobertura contra daños materiales',
      'Responsabilidad civil',
      'Asistencia vial las 24 horas',
      'Pérdida total por robo o accidente'
    ],
    features: [
      'Deducible desde el 5%',
      'Amparo a conductor designado',
      'Auto sustituto por 15 días',
      'Descuentos por no siniestralidad'
    ],
    monthlyFee: 850,
    imageUrl: '/images/car-insurance.png',
    recommended: true
  },
  {
    id: 'prod-006',
    name: 'Cuenta Nómina Premium',
    description: 'Cuenta especial para recibir tu sueldo',
    category: 'cuentas',
    interestRate: 1.2,
    minimumBalance: 0,
    riskLevel: 'bajo',
    benefits: [
      'Sin comisiones por manejo de cuenta',
      'Transferencias ilimitadas sin costo',
      'Pago de servicios desde la app',
      'Retiros en cualquier cajero del país'
    ],
    features: [
      'Depósito inicial mínimo $0',
      'Tasa de interés del 1.2% anual',
      'Seguro de vida gratuito por $100,000',
      'Soporte prioritario 24/7'
    ],
    imageUrl: '/images/payroll-account.png',
    recommended: false
  },
  {
    id: 'prod-007',
    name: 'Tarjeta Platino Empresarial',
    description: 'Tarjeta diseñada para necesidades empresariales',
    category: 'tarjetas',
    annualFee: 3500,
    riskLevel: 'alto',
    benefits: [
      '3% cashback en gastos empresariales',
      'Control de gastos por empleado',
      'Límites de gasto personalizables',
      'Reportes fiscales automáticos'
    ],
    features: [
      'Línea de crédito desde $100,000',
      'Tasa preferencial del 18% anual',
      '24 meses sin intereses en equipo de cómputo',
      'Seguro de viaje internacional'
    ],
    imageUrl: '/images/platinum-card.png',
    recommended: true
  },
  {
    id: 'prod-008',
    name: 'Fondo de Inversión Agresivo',
    description: 'Inversión de alto riesgo y alto rendimiento',
    category: 'inversiones',
    interestRate: 12.8,
    riskLevel: 'alto',
    benefits: [
      'Exposición a mercados internacionales',
      'Posibilidad de altos rendimientos',
      'Administrado por expertos',
      'Reportes trimestrales detallados'
    ],
    features: [
      'Horizonte recomendado: 3+ años',
      'Inversión mínima $10,000',
      'Comisión de administración del 1.5%',
      'Rendimiento histórico del 12.8% anual'
    ],
    imageUrl: '/images/aggressive-fund.png',
    recommended: false
  },
  {
    id: 'prod-009',
    name: 'Hipoteca Verde',
    description: 'Crédito para vivienda con tasa preferencial',
    category: 'prestamos',
    interestRate: 8.9,
    riskLevel: 'medio',
    benefits: [
      'Financiamiento hasta el 90% del valor',
      'Plazos hasta 20 años',
      'Tasa fija durante todo el plazo',
      'Seguro de desempleo incluido'
    ],
    features: [
      'CAT del 9.5%',
      'Avalúo gratuito de la propiedad',
      'Bonificación por vivienda sustentable',
      'Opción de pagos bimestrales'
    ],
    imageUrl: '/images/mortgage.png',
    recommended: true
  },
  {
    id: 'prod-010',
    name: 'Seguro de Vida Familiar',
    description: 'Protección integral para tu familia',
    category: 'seguros',
    riskLevel: 'bajo',
    benefits: [
      'Cobertura por fallecimiento',
      'Invalidez total y permanente',
      'Enfermedades graves',
      'Asistencia funeraria'
    ],
    features: [
      'Suma asegurada hasta $5,000,000',
      'Cobertura para cónyuge e hijos',
      'Exención de primas por invalidez',
      'Posibilidad de incrementar cobertura'
    ],
    monthlyFee: 450,
    imageUrl: '/images/life-insurance.png',
    recommended: false
  },
  {
    id: 'prod-011',
    name: 'Cuenta Jóvenes',
    description: 'Cuenta diseñada para menores de 25 años',
    category: 'cuentas',
    interestRate: 2.5,
    minimumBalance: 50,
    riskLevel: 'bajo',
    benefits: [
      'Sin comisiones',
      'App con control parental',
      'Educación financiera gamificada',
      'Descuentos en comercios afiliados'
    ],
    features: [
      'Tarjeta débito con diseño personalizable',
      'Ahorro programado automático',
      'Metas de ahorro visuales',
      'Notificaciones instantáneas'
    ],
    imageUrl: '/images/youth-account.png',
    recommended: true
  },
  {
    id: 'prod-012',
    name: 'Tarjeta Internacional Básica',
    description: 'Tarjeta ideal para tus viajes al extranjero',
    category: 'tarjetas',
    annualFee: 600,
    riskLevel: 'medio',
    benefits: [
      'Sin comisión por conversión de divisas',
      'Descuentos en hoteles y aerolíneas',
      'Seguro de viaje básico',
      'Asistencia médica internacional'
    ],
    features: [
      'Tasa preferencial del 28% anual',
      'Límite de crédito desde $10,000',
      'Alertas de gastos en tiempo real',
      'Bloqueo temporal desde la app'
    ],
    imageUrl: '/images/travel-card.png',
    recommended: false
  },
  {
    id: 'prod-013',
    name: 'Fondo de Retiro Plus',
    description: 'Plan de ahorro para tu jubilación',
    category: 'inversiones',
    interestRate: 7.4,
    riskLevel: 'medio',
    benefits: [
      'Beneficios fiscales',
      'Aportaciones voluntarias',
      'Portabilidad entre empleadores',
      'Rendimiento garantizado'
    ],
    features: [
      'Horizonte de inversión: largo plazo',
      'Diversificación automática por edad',
      'Aportación patronal del 5%',
      'Retiros programados al jubilarse'
    ],
    imageUrl: '/images/retirement-fund.png',
    recommended: true
  },
  {
    id: 'prod-014',
    name: 'Crédito Automotriz',
    description: 'Financiamiento para tu auto nuevo o seminuevo',
    category: 'prestamos',
    interestRate: 10.5,
    riskLevel: 'medio',
    benefits: [
      'Financiamiento hasta el 80%',
      'Plazos hasta 60 meses',
      'Seguro de auto incluido el primer año',
      'Garantía extendida opcional'
    ],
    features: [
      'CAT promedio del 12.3%',
      'Tasa fija durante todo el plazo',
      'Proceso 100% digital',
      'Posibilidad de cambiar de auto cada 3 años'
    ],
    imageUrl: '/images/car-loan.png',
    recommended: false
  },
  {
    id: 'prod-015',
    name: 'Seguro de Gastos Médicos Mayores',
    description: 'Protección para tu salud y economía',
    category: 'seguros',
    riskLevel: 'medio',
    benefits: [
      'Cobertura en hospitales privados',
      'Consultas con especialistas',
      'Cirugías y hospitalización',
      'Medicamentos y terapias'
    ],
    features: [
      'Suma asegurada hasta $3,000,000',
      'Deducibles desde $5,000',
      'Cobertura internacional opcional',
      'Segundo opinión médica'
    ],
    monthlyFee: 1200,
    imageUrl: '/images/health-insurance.png',
    recommended: true
  }
];

export const productCategories: ProductCategory[] = [
  'cuentas',
  'tarjetas',
  'inversiones',
  'prestamos',
  'seguros'
];