import React from 'react';

// Función factory para crear componentes mockeados
const createStyledComponent = (element) => {
  const StyledComponent = (props) => {
    const { children, ...rest } = props;
    return React.createElement(element, rest, children);
  };

  // Cadena de métodos que usa styled-components internamente
  const chainableMethods = {
    withConfig: () => StyledComponent,
    attrs: () => StyledComponent,
    defaultProps: {},
    toString: () => 'StyledComponent',
    [Symbol.iterator]: function* () {}
  };

  return Object.assign(StyledComponent, chainableMethods);
};

// Proxy para manejar styled.div, styled.button, etc.
const styled = new Proxy({}, {
  get(target, element) {
    if (element === 'default') return styled;
    return createStyledComponent(element);
  }
});

// Mock completo con todas las utilidades
module.exports = {
  ...jest.requireActual('styled-components'),
  default: styled,
  css: jest.fn(() => ''),
  ThemeProvider: ({ children, theme }) => (
    React.createElement('div', { 'data-testid': 'theme-provider' }, children)
  ),
  createGlobalStyle: jest.fn(() => () => null),
  keyframes: jest.fn(() => 'keyframes-mock'),
  isStyledComponent: jest.fn(() => false),
  ServerStyleSheet: jest.fn().mockImplementation(() => ({
    collectStyles: jest.fn(),
    getStyleTags: jest.fn(() => ''),
    getStyleElement: jest.fn(),
    interleaveWithNodeStream: jest.fn(),
    seal: jest.fn(),
  })),
  StyleSheetManager: ({ children }) => children,
};