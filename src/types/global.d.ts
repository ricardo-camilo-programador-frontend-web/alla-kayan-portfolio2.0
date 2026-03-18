declare global {
  interface Window {
    adsbygoogle: Adsbygoogle[];
  }
}

export interface Adsbygoogle {
  adSlot?: string;
  element?: HTMLElement;
}
