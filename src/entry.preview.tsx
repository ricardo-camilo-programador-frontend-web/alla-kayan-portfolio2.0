import { createQwikCity } from '@builder.io/qwik-city/middleware/node';
import qwikCityPlan from '@qwik-city-plan';
import render from './entry.ssr';

declare global {
  interface QwikCityPlatform {
    env: {
      node: typeof process;
    };
  }
}

export default createQwikCity({ render, qwikCityPlan });
