import { useEffect } from 'react';

const ADSENSE_CLIENT_ID = import.meta.env.VITE_ADSENSE_CLIENT_ID || '';

export interface AdSenseHorizontalProps {
  className?: string;
}

export default function AdSenseHorizontal({ className = '' }: AdSenseHorizontalProps) {
  useEffect(() => {
    if (!ADSENSE_CLIENT_ID) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  if (!ADSENSE_CLIENT_ID) {
    return null;
  }

  return (
    <div className={`w-full flex justify-center my-8 overflow-hidden min-h-[90px] bg-zinc-100 dark:bg-zinc-900/50 rounded-lg ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '90px' }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-format="horizontal"
        data-full-width-responsive="true"
      />
    </div>
  );
}

export interface AdSenseVerticalProps {
  className?: string;
}

export function AdSenseVertical({ className = '' }: AdSenseVerticalProps) {
  useEffect(() => {
    if (!ADSENSE_CLIENT_ID) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  if (!ADSENSE_CLIENT_ID) {
    return null;
  }

  return (
    <div className={`hidden xl:block w-[160px] h-[600px] sticky top-24 bg-zinc-100 dark:bg-zinc-900/50 rounded-lg overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: '160px', height: '600px' }}
        data-ad-client={ADSENSE_CLIENT_ID}
      />
    </div>
  );
}
