'use client';

import useLocalStorageState from './useLocalStorageState';
const { useState, useEffect, useLayoutEffect } = require('react');

const useThemeToggle = () => {
  // Check if it's running on the client side
  const isClient = typeof window !== 'undefined';

  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    'isDarkMode',
    isClient ? window.matchMedia('(prefers-color-scheme: dark)').matches : false
  );

  useLayoutEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
        document.documentElement.classList.remove('light-mode');
      } else {
        document.documentElement.classList.add('light-mode');
        document.documentElement.classList.remove('dark-mode');
      }
    },
    [isDarkMode]
  );

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return {
    toggleDarkMode,
    isDarkMode,
  };
};

export default useThemeToggle;
