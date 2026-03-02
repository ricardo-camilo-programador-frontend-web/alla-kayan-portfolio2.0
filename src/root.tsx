import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import './global.css';

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <RouterHead />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6735039970151788"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.counter.dev/script.js"
          data-id="f30df6f3-776d-4154-959d-0210ac8a8325"
          data-utcoffset="-3"
        />
        <script
          dangerouslySetInnerHTML={`
            if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          `}
        />
      </head>
      <body lang="pt-BR">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
