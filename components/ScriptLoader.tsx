'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    jQuery: any;
  }
}

export default function ScriptLoader() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loadScripts = async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        
        if (window.jQuery && window.jQuery.fn.slick) {
          window.jQuery('.slick-carousel').slick();
        }
      };
      
      loadScripts();
    }
  }, []);

  return (
    <>
      <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/js/popper.min.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/js/bootstrap-dropdown-ml-hack.min.js" strategy="afterInteractive" />
      <Script src="/js/cursor.min.js" strategy="afterInteractive" />
      <Script src="/js/slick.min.js" strategy="afterInteractive" />
      <Script src="/js/magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/js/appear.min.js" strategy="afterInteractive" />
      <Script src="/js/odometer.min.js" strategy="afterInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
}
