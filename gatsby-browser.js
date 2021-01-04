import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

// # If turn on this function, page to top when refresh on page. (I am not sure it will work correctly.) Must learn about scroll restore.
// export const shouldUpdateScroll = () => {
//   if (history.scrollRestoration !== 'manual') {
//     history.scrollRestoration = 'manual';
//   }
//   return false;
// };
