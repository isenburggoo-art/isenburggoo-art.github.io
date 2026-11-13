import products from './data/products.json';

/** 버튼 링크: 파트너스 링크가 있으면 우선, 없으면 쿠팡 원본 링크 */
export const buyUrl = (p) => (p.partnerUrl && p.partnerUrl.trim()) || p.coupangUrl;

/** 특정 글에 연결된 상품 목록 (products.json 의 순서 유지) */
export const productsForArticle = (slug) => products.filter((p) => p.article === slug);

export const allProducts = products;

export const formatDate = (d) =>
  new Date(d).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Seoul' });

export const isoDate = (d) => new Date(d).toISOString();
