import { component$, useTask$ } from '@builder.io/qwik';
import { ADSENSE_CONFIG } from '../../constants';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export const AdSenseVertical = component$(() => {
  useTask$(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  });

  return (
    <div class="hidden xl:block w-[160px] h-[600px] sticky top-24 bg-zinc-100 dark:bg-zinc-900/50 rounded-lg overflow-hidden">
      <ins
        class="adsbygoogle"
        style={{ display: 'inline-block', width: '160px', height: '600px' }}
        data-ad-client={ADSENSE_CONFIG.clientId}
      />
    </div>
  );
});
