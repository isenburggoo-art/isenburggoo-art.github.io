// 사이트 섹션(카테고리). key 는 URL(/category/<key>/)과 글 frontmatter 의 category 값에 쓰입니다.
export const CATEGORIES = [
  { key: 'newborn', name: '신생아', range: '0~3개월', emoji: '👶', description: '신생아(생후 0~3개월) 육아용품 추천: 외출 준비물, 수유·소독용품, 겨울철 보온용품을 고르는 기준과 비교.' },
  { key: 'infant', name: '영아', range: '4~12개월', emoji: '🍼', description: '영아(생후 4~12개월) 육아용품 추천: 체온계, 이유식, 발달 장난감 등 월령에 맞는 육아템 가이드.' },
  { key: 'toddler', name: '돌~24개월', range: '12~24개월', emoji: '🧸', description: '돌아기(12~24개월) 육아용품 추천: 실내 놀이용품, 걸음마 보조기, 놀이매트 고르는 법.' },
  { key: 'preschool', name: '유아', range: '2~5세', emoji: '🎒', description: '유아(2~5세) 육아용품 추천: 어린이집·유치원 준비물, 놀이·학습용품 비교 가이드.' },
  { key: 'guide', name: '비교/가이드', range: '전 연령', emoji: '📋', description: '가습기, 젖병 소독기, 체온계 등 육아 가전·필수템을 기준별로 비교하는 구매 가이드.' },
];

export const categoryByKey = (key) => CATEGORIES.find((c) => c.key === key);
