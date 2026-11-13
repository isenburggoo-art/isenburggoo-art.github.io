// =====================================================================
//  사이트 기본 설정 — 배포 전에 이 파일만 고치면 됩니다.
// =====================================================================

// 1) 배포 주소. Vercel 배포 후 받은 주소로 바꾸세요. (끝에 / 없이)
//    Vercel 환경변수 SITE_URL 을 설정하면 그 값이 우선합니다.
export const SITE_URL = process.env.SITE_URL || 'https://isenburggoo-art.github.io';

export const SITE_NAME = '육아템 노트';
export const SITE_TAGLINE = '월령별로 고르는 육아용품 가이드';
export const SITE_DESCRIPTION =
  '신생아부터 유아까지, 월령별로 꼭 필요한 육아용품을 고르는 기준과 비교표로 정리한 육아용품 추천 가이드입니다.';
export const SITE_LOCALE = 'ko_KR';

// 2) 검색엔진 소유확인 메타태그 — 값(content)만 붙여 넣으세요.
//    ▼▼▼ 여기를 채우면 모든 페이지 <head>에 자동으로 들어갑니다 ▼▼▼
//    Google Search Console: <meta name="google-site-verification" content="여기 값">
export const GOOGLE_SITE_VERIFICATION = 'EcgZ4YMFnEKcGQXALwhwOipGYSy8YIoT_wuFu5sQ6O4';
//    네이버 서치어드바이저: <meta name="naver-site-verification" content="여기 값">
export const NAVER_SITE_VERIFICATION = ''; // 예: '1a2b3c4d...'
//    ▲▲▲ ----------------------------------------------------- ▲▲▲

// 3) 쿠팡 파트너스 대가성 문구 (공정위 지침상 문구 변경 금지)
export const COUPANG_DISCLOSURE =
  '이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.';
