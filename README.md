# 육아템 노트 (쿠팡 파트너스 육아용품 추천 사이트)

월령별(신생아 · 영아 · 돌~24개월 · 유아 · 비교/가이드) 육아용품 추천 정적 사이트입니다.
[Astro](https://astro.build) 5로 만들었고, Vercel에 GitHub 저장소를 연결하면 **설정 없이(zero-config)** 빌드·배포됩니다.

## 빠른 시작

```bash
npm install
npm run dev      # http://localhost:4321 미리보기
npm run build    # dist/ 에 정적 파일 생성
npm run preview  # 빌드 결과 미리보기
```

Node.js 18.20+ (권장 20 이상)이 필요합니다.

## 배포 전에 꼭 할 일

모든 사이트 설정은 **`src/site.config.mjs` 한 파일**에 있습니다.

1. **사이트 주소** — `SITE_URL` 을 Vercel 주소(예: `https://my-baby-site.vercel.app`)로 바꾸세요.
   또는 Vercel 프로젝트 설정 → Environment Variables 에 `SITE_URL` 을 넣으면 그 값이 우선합니다.
   canonical, Open Graph, sitemap.xml, robots.txt 가 모두 이 주소를 씁니다.
2. **검색엔진 소유확인** — 아래 두 값에 메타태그의 `content` 값만 붙여 넣으면 모든 페이지 `<head>`에 자동으로 들어갑니다.
   - `GOOGLE_SITE_VERIFICATION` : Google Search Console → URL 접두어 → HTML 태그 방식
   - `NAVER_SITE_VERIFICATION` : 네이버 서치어드바이저 → 사이트 등록 → HTML 태그 방식
   (값이 비어 있으면 태그는 출력되지 않고, `<head>` 안에 주석으로 위치만 표시됩니다.)
3. 등록 후 두 서비스에 `https://<내 주소>/sitemap.xml` 을 제출하세요.

### Vercel 배포 (참고)
1. 이 폴더를 GitHub 저장소로 push
2. Vercel → Add New Project → 저장소 선택 → Framework Preset이 **Astro** 로 자동 인식됨 → Deploy
3. 받은 `*.vercel.app` 주소를 `SITE_URL` 에 넣고 다시 push

## 글 추가하는 법

1. `src/content/articles/` 에 `<slug>.md` 파일을 만듭니다. **파일명이 곧 URL** 입니다.
   예: `baby-bath-guide.md` → `/articles/baby-bath-guide/`
   (영문 소문자·숫자·하이픈 권장)
2. 맨 위에 frontmatter 를 씁니다.

```markdown
---
title: "아기 욕조 고르는 법: 신생아 목욕 준비물 총정리"       # 페이지 제목(H1, <title>) — 글마다 고유하게
description: "80~155자 정도의 검색 결과용 요약. 핵심 키워드를 자연스럽게 포함하세요."  # 최대 160자
category: newborn            # 대표 섹션: newborn | infant | toddler | preschool | guide
ages: [newborn, guide]       # 함께 노출할 섹션(선택)
keywords: ["아기 욕조 추천", "신생아 목욕"]
publishDate: 2026-11-20
updatedDate: 2026-12-01      # 수정 시(선택) — sitemap lastmod 에 반영
related: ["winter-newborn-outing-checklist"]   # '함께 읽으면 좋은 글'에 먼저 보여줄 글 slug(선택)
draft: false                 # true 면 빌드에서 제외
---

도입 문단...

## 고르는 기준
...

| 구분 | A | B |
|---|---|---|
| ... | ... | ... |

## 추천 아기 욕조
소개 문단...

<!-- products -->

## 자주 묻는 질문
...
```

3. 본문의 `<!-- products -->` 자리에 이 글에 연결된 상품 카드가 자동으로 들어갑니다.
   (마커가 없으면 본문 맨 끝에 "추천 상품" 섹션으로 붙습니다.)
4. 다른 글 링크는 `[글 제목](/articles/다른-slug/)` 형태로 본문에 넣어 내부 링크를 만드세요.

글을 추가하면 홈, 카테고리 페이지, sitemap.xml, JSON-LD 가 **자동으로** 갱신됩니다.

### 자동으로 들어가는 것
- 글마다 고유 `<title>` / meta description / canonical / Open Graph / Twitter 카드
- JSON-LD: `Article`, `BreadcrumbList`, 상품이 있으면 `ItemList` (홈·카테고리는 `WebSite`/`ItemList`)
- 상품이 있는 글에는 제목 바로 아래에 쿠팡 파트너스 대가성 문구:
  > 이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
- 목차(소제목 3개 이상일 때), 표 가로 스크롤, '함께 읽으면 좋은 글'

## 상품 추가·수정하는 법

모든 상품은 **`src/data/products.json`** 한 파일에 있습니다.

```json
{
  "id": "brand-model-short",                       // 고유 ID (영문, 중복 금지)
  "name": "쿠팡 상품명 그대로",                       // 카드 제목
  "coupangUrl": "https://www.coupang.com/vp/products/1234567890",  // 쿠팡 원본 상품 URL
  "partnerUrl": "",                                // 쿠팡 파트너스 링크 (예: https://link.coupang.com/a/xxxx)
  "category": "newborn",                           // newborn | infant | toddler | preschool | guide
  "article": "winter-newborn-outing-checklist",    // 이 상품을 보여줄 글 slug
  "highlight": "한 줄 추천 포인트 (선택)"
}
```

- 카드 순서 = 파일 안의 순서입니다.
- **구매 버튼은 `partnerUrl` 이 있으면 그 링크를, 비어 있으면 `coupangUrl` 을 씁니다.**
  모든 버튼은 `target="_blank" rel="sponsored nofollow noopener"` 로 출력됩니다.
- 가격은 자주 바뀌므로 적지 않습니다. 버튼 문구는 "쿠팡에서 가격 확인"입니다.

### 파트너스 링크 채우기
1. 쿠팡 파트너스 → 링크 생성 → 상품 URL(`coupangUrl`)을 붙여 넣어 단축 링크 생성
2. 생성된 `https://link.coupang.com/a/...` 링크를 해당 상품의 `partnerUrl` 에 입력
3. 커밋·push → Vercel 이 자동 재배포

> 품절·판매 종료 상품은 주기적으로 확인해 교체하세요. 상품 페이지 URL이 바뀌면 `coupangUrl` 과 `partnerUrl` 을 함께 바꿔야 합니다.

## 폴더 구조

```
src/
  site.config.mjs        사이트 주소·이름·검색엔진 소유확인·대가성 문구
  content.config.ts      글(frontmatter) 스키마
  content/articles/*.md  글 (파일명 = URL slug)
  data/products.json     상품 데이터
  data/categories.mjs    섹션(카테고리) 정의
  lib.mjs                구매 링크 선택 등 헬퍼
  layouts/BaseLayout.astro   <head>(SEO·OG·검증 메타·JSON-LD), 헤더/푸터
  components/            Disclosure, ProductList, ArticleCard
  pages/                 index, articles/[slug], category/[cat], about, 404, sitemap.xml, robots.txt
  styles/global.css      스타일 (빌드 시 인라인)
public/                  favicon.svg, og-default.png (공유 이미지 1200×630)
```

## 운영 메모
- 건강·의료 관련 글은 일반 정보로 작성하고 "진료를 대신하지 않는다"는 안내를 유지하세요(푸터에 기본 포함).
- 대가성 문구는 공정위 추천·보증 심사지침에 따라 글 상단에 두어야 하므로 `Disclosure` 위치를 옮기지 마세요.
