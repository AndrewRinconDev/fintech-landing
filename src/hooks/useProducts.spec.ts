import { renderHook, act } from '@testing-library/react-hooks';
import { useProducts } from './useProducts';
import { productsMock } from '../utils/__mocks__/productsData';

describe('useProducts Hook', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should load products initially', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProducts());
    
    expect(result.current.loading).toBe(true);
    
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    await waitForNextUpdate();
    
    expect(result.current.loading).toBe(false);
    expect(result.current.products.length).toBe(productsMock.length);
  });

  it('should filter products by category', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProducts());
    
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    await waitForNextUpdate();
    
    const testCategory = 'cuentas';
    act(() => {
      result.current.setSelectedCategory(testCategory);
    });
    
    const filteredProducts = productsMock.filter(p => p.category === testCategory);
    expect(result.current.products.length).toBe(filteredProducts.length);
    expect(result.current.products.every(p => p.category === testCategory)).toBe(true);
  });

  it('should return all products when "all" category is selected', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProducts());
    
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    await waitForNextUpdate();
    
    act(() => {
      result.current.setSelectedCategory('cuentas');
      result.current.setSelectedCategory('all');
    });
    
    expect(result.current.products.length).toBe(productsMock.length);
  });
});