import React from 'react';
import { MobileMenuContextProvider } from './src/contexts/mobile-menu-context';

export const wrapRootElement = ({element}) => (
  <MobileMenuContextProvider>
    {element}
  </MobileMenuContextProvider>
);