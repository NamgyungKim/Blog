---
date: '2023-12-24'
title: 'Back Forward Cache(bf캐시) 설정'
categories: ['WEB']
summary: '이용하던 서비스에 갑자기 505,404 에러 발생 시 뒤로가기 하면 이전 페이지는 잘 안보인 적이 있지는 않나요?  
이처럼 브라우저에서 뒤로가기/앞으로 가기 이벤트가 발생할 경우, 새로 요청을 보내지 않고 캐시해둔 이전 상태를 바로 사용하게 된다.   
그렇게 뒤로가기를 누를 경우 서버에 요청을 보내지 않고 더 빠르게 페이지를 보여줄 수 있게된다.'
thumbnail: ''
---

## Back Forward Cache란 무엇일까?

이용하던 서비스에 갑자기 505,404 에러 발생 시 뒤로가기 하면 이전 페이지는 잘 안보인 적이 있지는 않나요?  
이처럼 브라우저에서 뒤로가기/앞으로 가기 이벤트가 발생할 경우, 새로 요청을 보내지 않고 캐시해둔 이전 상태를 바로 사용하게 된다.   
그렇게 뒤로가기를 누를 경우 서버에 요청을 보내지 않고 더 빠르게 페이지를 보여줄 수 있게된다.


<aside>
    <div class="icon">
      💡
    </div>
    <div>
    
**브라우저 호완성**
    
- `firefox`,`safari`의 경우 데스크톱과 모바일 모두 과거부터 기본적으로 지원해왔습니다. [MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching),[WebKit Blog](https://webkit.org/blog/427/webkit-page-cache-i-the-basics/)
- `Chrome`의 경우 v86부터 `same-site`인 경우에 한해 모바일(for Android)에서 점진적으로 적용하다가, v96에 이르러서는 데스크톱/모바일 모두 적용하고 있습니다. [chromestatus](https://chromestatus.com/feature/5815270035685376)
- `Samsung Internet`은 v15 부터 지원 합니다. [Samsung Developers](https://developer.samsung.com/internet/blog/en-us/2021/07/20/introducing-samsung-internet-150-beta)
    
  </div>
</aside>

<br>

## 이전 페이지를 보다 빠르게 보여주면 좋은거 아닌가?

단순하게 생각하면 api요청 없이 갖고 있던 캐시를 이용해 페이지를 보여주니 좋다고 생각할 수 있다.   
하지만 데이터를 바꾼 후 뒤로가기를 누르면 바뀌기 이전의 데이터를 보여줄 수도 있다.   
이를 막기 위해서는 BF설정을 해주어야 한다.  

<br>

## ✨ 캐시 설정 

캐시 설정에 대한 내용은 MDN에 더 자세히 나와있다. (아래 참고자료)

```html
<!--HTTP/1.1 200 OK-->
<!--Content-Type: text/html-->
<!--Cache-Control: max-age=3600 // HTTP요청 시 Header에 넣어서 설정-->
<!--Content-Length: 157-->
<!DOCTYPE HTML>
<html lang="ko">
<head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"/>
</head>
<body>
Hello, World!
</body>
</html>
```
![bfCach](https://github.com/NamgyungKim/Blog/assets/87519250/4a254c3b-1270-4de2-ba4a-d112291f8f0a)

- **Cache-Control** : max-age = N
    - 요청 받은 후 N초까지 캐시사용가능.
      이후는 캐시 만료.
    - Age 헤더를 통해서 max-age 에서 얼마나 흘렀는지 초단위로 알려준다.
- **Cache-control**: no-cache
    - 캐시를 하지 않는것은 아니다. 다만 다시 서버에 재검증을 요청 받아야만 캐시를 사용할 수 있다.
- **Cache-control**: no-store
    - 모든 종류의 캐시를 저장하지 않는다.

<br>

## ✨ 캐시 설정
캐시 유효시간이 지나면 바로 완전히 사라지는 것이 아니다.

서버에 [HTTP조건부요청](https://developer.mozilla.org/ko/docs/Web/HTTP/Conditional_requests#%EC%A1%B0%EA%B1%B4%EB%B6%80_%ED%97%A4%EB%8D%94)을 통해서 캐시가 유효한지 재점검한다.
점검 후 해당 캐시가 유효하면, [304 Not Modified]를 내려준다.

<aside>
❗ [[304 Not Modified](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304)] : 요청된 리소스를 다시 전송할 필요가 없음을 나타냅니다.
</aside>

<br>

## 참고 자료

- [MDN캐시제어](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) cashe-control에대한 모들 설정과 이에대한 설명이 있음
- [웹 서비스 캐시 똑똑하게 다루기](https://toss.tech/article/smart-web-service-cache)