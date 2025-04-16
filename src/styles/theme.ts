import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: {
      main: '#2563eb',
      dark: '#1d4ed8',
      light: '#3b82f6'
    },
    secondary: {
      main: '#059669',
      dark: '#047857',
      light: '#10b981'
    },
    green: {
      500: '#10b981'
    },
    yellow: {
      500: '#f59e0b'
    },
    red: {
      500: '#ef4444'
    },
    gray: {
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    }
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    full: '9999px'
  }
};

// Extender el tipo DefaultTheme para TypeScript
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        dark: string;
        light: string;
      };
      secondary: {
        main: string;
        dark: string;
        light: string;
      };
      green: {
        500: string;
      };
      yellow: {
        500: string;
      };
      red: {
        500: string;
      };
      gray: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
  }
}