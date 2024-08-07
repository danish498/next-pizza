'use client';

import Header from '@/features/navbar/Header';
import GlobalStyles from '@/lib/GlobalStyles';
import StyledComponentsRegistry from '@/lib/registery';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
// import './globals.css';
import { Roboto_Mono } from 'next/font/google';
import CartOverview from '@/features/cart/CartOverview';
import { Provider } from 'react-redux';
import { store } from '@/store';

const roboto = Roboto_Mono({
  subsets: ['greek', 'latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Provider store={store}>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <Header />
            {children}
            <CartOverview />
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
