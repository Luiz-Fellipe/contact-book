export const defaultTheme = {
  pallet: {
    primary: '#F9FBFB',
    secondary: '#3D9FFF',
    white: {
      W50: '#ffffff',
      W100: '#FEFFFF',
      W200: '#F2F7FA',
    },
    black: {
      B100: 'rgba(0,0,0,0.1)',
      BW500: '#171717'
    },
    gray: {
      G50: '#F0F2F7',
      G100: '#C3CACF',
      G200: '#A6B1C3',
    },
    feedback: {
      success: '#41BD00',
      danger: '#F32525',
      warning: '#FFD700',
      info: '#006DBA',
    }
  },
  borderRadius: {
    btnRectangle: '4px',
    btnRound: '50%',
    input: '5px',
    card: '5px',
  },
  fontSize: {
    /** @property 0.625rem (10px) */
    xxs: '0.625rem',
    /** @property 0.75rem (12px) */
    xs: '0.75rem',
    /** @property 0.875rem (14px) */
    sm: '0.875rem',
    /** @property 1rem (16px) */
    md: '1rem',
    /** @property 1.125rem (18px) */
    lg: '1.125rem',
    /** @property 1.25rem (20px)  */
    xl: '1.25rem',
    /** @property 1.5rem (24px) */
    xxl: '1.5rem',
    /** @property 2rem (32px) */
    xxxl: '2rem',
    /** @property   2.5rem (40px) */
    xxxxl: '2.5rem',
  },
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
  },
  space: {
    '4': `0.25rem`,
    '8': `0.5rem`,
    '10': '0.625rem',
    '12': `0.75rem`,
    '16': `1rem`,
    '24': `1.5rem`,
    '32': `2rem`,
  },
  boxShadow: {
    main: '5px 6px 4px rgba(0, 0, 0, 0.25)',
  },
  device: {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1400px)',
  },
} as const;