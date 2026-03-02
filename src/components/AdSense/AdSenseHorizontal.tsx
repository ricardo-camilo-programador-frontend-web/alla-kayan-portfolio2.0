import { component$, useTask$ } from '@builder.io/qwik';
import { ADSENSE_CONFIG } from '../../constants';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export const AdSenseHorizontal = component$(() => {
  useTask$(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  });

  return (
    <div class="w-full flex justify-center my-8 overflow-hidden min-h-[90px] bg-zinc-100 dark:bg-zinc-900/50 rounded-lg">
      <ins
        class="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '90px' }}
        data-ad-client={ADSENSE_CONFIG.clientId}
        data-ad-format="horizontal"
        data-full-width-responsive="true"
      />
    </div>
  );
});
