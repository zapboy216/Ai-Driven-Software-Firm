import { createContext } from 'react';

interface NavigationContextType {
  isNavOpen: boolean;
  toggleNav: () => void;
}

const NavigationContext = createContext;
