import { useContext } from 'react';
import SearchContext, { SearchContextType } from '../contexts/search/SearchContext';

export function useSearch(): SearchContextType {
  const context = useContext(SearchContext);
  if (!context) throw new Error('SearchContext must be within SearchProvider');
  return context;
}