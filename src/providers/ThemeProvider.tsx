'use client';

import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { ReactNode } from 'react';

export default function ThemeProviderClient({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}