// @ts-check
import { defineConfig } from 'astro/config';
import { SITE_URL } from './src/site.config.mjs';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'always', // 작은 CSS를 인라인 → 렌더링 차단 요청 0개
  },
  compressHTML: true,
});
