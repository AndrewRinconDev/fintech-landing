import '@testing-library/jest-dom';
import 'jest-styled-components';

// Mock para window.matchMedia
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  };
};

// Mock para scrollTo
window.scrollTo = jest.fn();