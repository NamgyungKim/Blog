---
date: '2020-09-26'
title: 'Canonical Link Element란?'
categories: ['SEO']
summary: 'Canonical Link Element란 검색 엔진에게 중복된 페이지 중에서 가장 대표적으로 사용되는 URL을 알려주는 역할을 하는 Link 요소이다. 검색 엔진에 왜 중복된 페이지 중에서 대표URL을 알려주어야 할까? 왜 중복되는 URL이 발생하는걸까?'
thumbnail: ''
---

`Canonical Link Element`는 **\*\*\*\***인프런의 gatsby-기술 블로그 만들기를 하면서 처음으로 알게된 개념이다. SEO는 실제 서비스에서 유저의 유입을 결정짓는 중요한 요소 중 하나이고, 면접을 볼 때 많이 질문하는 요소 중 하나이기 도하서 찾아보게 되었다.

[https://www.inflearn.com/course/gatsby-기술블로그/unit/76369?tab=curriculum](https://www.inflearn.com/course/gatsby-%EA%B8%B0%EC%88%A0%EB%B8%94%EB%A1%9C%EA%B7%B8/unit/76369?tab=curriculum)

## 내용

인프런의 강의에서는 \***\*Canonical Link Element\*\***를 아래와 같이 설명하고 있다.

> Canonical Link Element란 검색 엔진에게 **중복된 페이지 중에서 가장 대표적으로 사용되는 URL**
> 을 알려주는 역할을 하는 Link 요소입니다.

```html
<head>
  <link rel="canonical" href="<https://www.my-website.com/>" />
</head>
```

이 글을 읽고 두 가지 궁금증이 생겼다.

- 왜 중복된 페이지 중에서 대표 URL을 알려주어야 할까?
- 왜 페이지에서 중복되는 URL이 왜 발생하는가?

### ❓왜 페이지에서 중복되는 url이 발생하는가

중복 URL이 발생하는 경우는 아래와 같은 이유가 있다.

1. http/https 및 www의 유무

   `http://www.my-website.com/` , `https://my-website.com/`

2. 여러 유형의 기기를 지원하는 웹 사이트

   `https://m.www.my-website.com/` (모바일 지원)

3. 쿼리 스트링 ( 구글 봇은 쿼리가 있는경우와 없는경우에도 다른 url로 간주한다고한다. )

   `https://m.www.my-website.com/?name=Nadia`

이와 같이 동일 페이지 임에도 불구하고 다른 URL을 이용할 수 있다.

### ❓왜 중복된 페이지 중에서 대표URL을 알려주어야할까

같은 내용을 담고 있더라도 URL이 다르면 검색엔진은 유사한 다른 페이지로 인식하여 같은 페이지의 중복 버전으로 간주하게 된다. 이런 중복페이지는 구글 봇이 적절하다고 생각하는 페이지의 URL을 마음대로 표준으로 설정해 해당 표준 페이지를 자주 크롤링하며, 다른 페이지는 표준 페이지보다 훨씬 적게 크롤링한다고 한다.

- 여러 개의 URL을 사용하면 더 좋지 않을까? 하는 생각이 들기도 했지만 이렇게 URL이 분산되면 URL 신뢰도, 도메인 신뢰도 등 검색엔진 랭킹을 위한 SEO 점수가 분산되어 상위에 랭킹되기 어려워진다. 최악의 경우 중복 콘텐츠로 색인 삭제 페널티를 받게 될 수 있다.

<aside>
❓ 자료를 찾아보다가 지난 프로젝트에서 3가지 URL이 있었지만 하나의 URL로 이동하도록 리다이랙트를 설정해줬던 기억이 났고, 이런 경우 봇은 세 URL을 각각 들러서 크롤링을 할 수 있을까? 하는 생각이 들었다. 찾아보니 리다이렉트를 시키면 봇도 리다이렉트가 된 곳에서 크롤링하는 것 같았다.

</aside>

### ❗캐노리컬 태그 적용시 주의사항

1. 페이지별로 고유한 캐노니컬 태그를 적용해야 한다.
2. 사이트 URL이 변경되었을 경우 캐노리컬 태그도 같이 변경해주어 최신의 URL이 반영될 수 있도록 해야 한다.

   캐노니컬 태그는 도메인 간의 적용이 가능하지만 옛날 도메인으로 하는 건 좋지 않다.

3. 모바일이나 PC 버전 URL의 경우 가장 우선되는 하나의 URL로 통일시킨다.
4. 순환 참조가 생기지 않도록 해야 한다.

   A 페이지가 B를 가리키고 B가 A를 가리키면 무한 순환이 발생하고 AB의 캐노니컬 태그 모두 무시된다.

5. 캐노니컬(canonical)태그 적용 시 상대 경로가 아닌 절대 경로로 적용해야 한다.
6. 캐노니컬(canonical) 태그가 중복으로 선언된었을 때 구글은 두 태그를 모두 무시하게 된다.

## 참고 자료

- 캐노니컬 태그 (Canonical tag)로 검색엔진 최적화하기 ([https://growthacking.kr/캐노니컬-태그-canonical-tag로-검색엔진-최적화하기/](https://growthacking.kr/%EC%BA%90%EB%85%B8%EB%8B%88%EC%BB%AC-%ED%83%9C%EA%B7%B8-canonical-tag%EB%A1%9C-%EA%B2%80%EC%83%89%EC%97%94%EC%A7%84-%EC%B5%9C%EC%A0%81%ED%99%94%ED%95%98%EA%B8%B0/))
- SEO 초보자를 위한 ‘캐노니컬 태그’ 설명하기 ([https://yozm.wishket.com/magazine/detail/1420/](https://yozm.wishket.com/magazine/detail/1420/))
- 캐노니컬 태그 (Canonical tag), 검색엔진 최적화 ([https://myseolabo.com/seo/canonical-tag/](https://myseolabo.com/seo/canonical-tag/))
- 캐노니컬 태그 VS 301 리다이렉트 어느 것이 더 좋은가? ([https://www.ascentkorea.com/canonical-url-vs-301-redirect/](https://www.ascentkorea.com/canonical-url-vs-301-redirect/))
- 4가지 사례로 알아보는 캐노니컬 태그 적용법([https://www.twinword.co.kr/blog/how-to-apply-canonical-tag-properly/](https://www.twinword.co.kr/blog/how-to-apply-canonical-tag-properly/))
