---
date: '2022-10-06'
title: '10 ways to speed up web font loading'
categories: ['SEO']
summary: 'webFont의 사용은 성능상  문제를 일으킵니다.  수백 킬로바이트에 달하며, 도메인에서 호스팅해야하는 폰트는 웹사이트를 느리게 만듭니다. 그래도 우리는 이러한 문제를 해결할 방법이 있습니다. 다음은 웹사이트에서 글꼴 로드 성능을 향상시키는 10가지 팁을 소개합니다.'
thumbnail: ''
---

<aside>
  <div>
  📜 
  </div>
  영어로 작성된 아티클
  
   [ "10 ways to speed up web font loading"](https://byteofdev.com/posts/speed-up-font-loading/)
  을 한글로 번역한 글 입니다.
</aside>

<br >

Font는 오늘날 웹에서 널리 사용되는 도구입니다. 폰트는 더 많은 옵션을 허용하고 인터페이스 맞춤 터치를 추가하기 때문에 대부분의 최신 웹사이트에서는 사용자 정의 font나 goole font를 사용합니다.

그러나 webfont의 사용은 성능상 문제를 일으킵니다. 수백 킬로바이트에 달하며, 도메인에서 호스팅해야 하는 폰트는 웹사이트를 느리게 만듭니다. 그래도 우리는 이러한 문제를 해결할 방법이 있습니다. 다음은 웹사이트에서 글꼴 로드 성능을 향상시키는 10가지 팁을 소개합니다.

## webFont를 더 빠르게 로드하는방법

### 1. 글꼴을 직접 호스트 한다.

웹사이트에서 HTML을 보면 종종 다음과 같은 내용을 볼 수 있습니다.

```jsx
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
	rel="stylesheet"
/>
```

위 코드는 웹 사이트가 글꼴을 로드하기 위해 구글 폰트를 사용하고 있다는 뜻입니다. 구글폰트는 사용이 쉽기 때문에 간편히 사용하기에 좋다. 하지만 구글 폰트는 성능이 좋지 않습니다. 구글 폰트를 가져오기 위해서는 일련의 요청과정을 거쳐야 해야 하므로 상당한 대기시간을 갖습니다.

![image](https://user-images.githubusercontent.com/87519250/194266652-e9fe6af3-5a4b-42ff-b92c-c2c164607178.png)

위 이미지를 보면 구글폰트를 로드하는 과정이 복잡하다는 것을 알 수 있습니다. 하지만 외부 스타일 시트를 사용하지 않고 CSS에 @font-face 선언을 하면 한 번의 요청을 줄일 수 있습니다. [Google Webfonts Helper](https://google-webfonts-helper.herokuapp.com/fonts)와 같은 도구를 사용하면 작업에 도움이 될 수 있습니다.

### 2. 최신 webFont포멧을 사용한다.

포맷 동작 방식에서 폰트는 이미지와 같습니다. png와 jpeg와 같은 포맷은 AVIF와 WebP이라는 최적화된 최신 웹 포멧으로 대체되었다. 비슷하게 웹 폰트도 WOFF와 WOFF2가 TTF(TrueTypeFont)와 OTF(OpenTypeFont)보다 최적화된 압축을 제공합니다. 게다가 WOFF는 대부분의 브라우저에서 지원합니다.

![image](https://user-images.githubusercontent.com/87519250/194266680-29e554c3-f7ca-4fa9-b10a-b2ade24206df.png)

현시점에서, 대부분의 브라우저를 지원하기 위한 가장 좋은 방법은 WOFF2를 WOFF와 같이 사용하는 것이지만, ~96%가 WOFF2를 지원하기 때문에 WOFF2만 사용할 수도 있습니다.

### 3. webFont경량화

font 경량화는 글꼴을 필요한 문자로만 구성하는 것을 의미합니다. 잘라낸 문자를 사용할 수 없지만, 그 외에는 엄청난 크기 절감 효과를 얻을 수 있습니다. 이를 수행하는 가장 간단한 방법은 사용하지 않는 하위 언어 제거입니다. 가장 인기 있는 글꼴 중 하나인 Inter을 예로 들면, 라틴 알파벳, 키릴 자모, 베트남어, 그리스어를 모두 포함하고 있는 경우 WOFF2글꼴의 크기는 95Kb입니다. 하지만 이런 사용하지 않는 언어들을 다 제거하면 16Kb로 둘어 듭니다. GoogleFonts, [EverythingFonts](https://everythingfonts.com/subsetter), [fontTools](https://github.com/fonttools/fonttools)를 포함해 글꼴의 경량화 하는 방법은 여러가지가 있습니다.

이렇게 축소한 font는 성능에 큰 도움이 된다고 하지만 다음과 같은 과정을 거치면 더욱 용량을 줄일 수 있습니다. 위에서 사용하는 언어 단위로 구성하는 것이 아닌 사용하는 문자만 포함하도록 지정할 수 있습니다. fontTools과 같은 도구를 사용하면 임의 문자 목록을 파일에 구성하는 것이 가능합니다. 이런 방법은 복잡한 빌드 프로세스가 필요하고, 각각의 문자들을 수동으로 추가해야 한다는 단점이 있습니다.

### 4. font-display사용

기본적으로 많은 브라우저는 텍스트는 font가 로드될 때까지 브라우저에 표기되지 않습니다. 이런 현상을 FOIT(Flash of Invisible Text)라고 부릅니다. 일부 브라우저는 font를 로드하는동안 대체 글꼴을 사용하여 표시하므로 글이 안 보이는 경우는 없으나 font 로드 이후 레이아웃이 바뀌는 경우를 볼 수 있습니다.

다행히도 우리는 `font-display`를 통해 font 로드를 설정할 수 있습니다. `@font-face` 에 대한 두 가지 권장값으로 `font-display: swap` 과 `font-display: option` 입니다. swap은 fallback font를 사용한 후 로드되면 커스텀 font로 전환된다. option으로 설정하면 100ms 동안 페이지를 로드하며 글꼴을 로드하되, 그 안에 로드되지 못하면 fallback font를 사용하게 됩니다.

```css
@font-face {
  font-family: 'Example';
  font-style: normal;
  font-weight: 400;
  src: local('Example'), local('Example'),
    url(https://example.com/example.woff2) format('woff2');
  font-display: swap;
}
```

`font-display: option` 은 폰트 변경으로 인한 레이아웃 변경이 일어나지 않기 때문에 글꼴을 꼭 로드할 필요가 없을 경우 가장 좋습니다. 단, 100ms 이상이 걸리더라도 꼭 font를 바꿔 주어야 할 경우 `font-display: swap` 을 사용하는 것이 좋습니다.

### 5. 대체폰트와 사용자지정 폰트 일치

font는 일반적으로 간격과 크가가 다릅니다. 예를 들면 Merriweather 는 동일한 사이즈를 갖는 다른 폰트들 보다 크게 표시됩니다. 이런 부분으로 글꼴을 사용하는 경우 `font-display: swap` 사용 시 레이아웃에 변경이 일어날 수 있습니다. 하지만 여러분은 여러분이 사용할 font와 비슷하게 fallback 폰드를 구성할 수 있습니다. 두 글꼴의 간격과 글꼴 크기를 설정하여 최대한 비슷하게 일치시킬 수 있습니다. 이 작업을 도와줄 도구로 [Font Style Matcher](https://meowni.ca/font-style-matcher/) 가 있습니다. 이 도구를 사용하면 두 font의 데모를 보며 간격과 속성을 설정할 수 있습니다.

### 6. CDN사용

CDN은 정적 콘텐츠 전송 속도를 높여주기에 좋습니다. CDN은 유저에게 더 빠르게 해당 정보를 제공하는 방법을 사용하는 경우가 많습니다. 정적 콘텐츠와 함께 CDN으로 font호스팅하는 것은 아주 좋은 방법입니다. CDN을 사용하면 해당 font에 대한 요청 처리에 대한 비용이 줄어듦으로 서버 비용도 절감됩니다.

### 7. 폰트 프리로드

프리로딩은 브라우저게에 더 빨리 다운로드해야 할 리소스임을 알리고, 해당 리소스의 다운 순위를 높이기 때문에 다양한 리소스를 활용하는 상황에서 좋은 방법입니다. 이것은 font에서도 같습니다. 하지만 font가 불필요하게 로드될 수 있으므로 항상 미리 로드하는 것은 좋지 않습니다. @font-face 가 존재하더라도 브라우저는 페이지 다운 이전에 웹사이트가 font를 사용하고 있는지 자동으로 감지한다. 여러분은 @font-face에 포함된 글꼴을 사용하고 있다는 것을 알 수 있습니다. 여기에는 잠재적인 문제가 하나 더 있습니다. 글꼴이 바로 필요하지 않다면 다른 리소스의 로드가 느려진다는 단점이 있습니다. 하지만 이 두 가지 모두 잘못된 경우, 프리로딩은 글꼴 로드 속도를 높여주는 좋은 방법이 될 수 있습니다.

### 8. local() 사용

글꼴에 따라 사용자는 로컬에서 사용하는 글꼴을 컴퓨터에 설치할 수 있습니다. 이 경우, 여러분은 쉽게 local font를 사용함으로 커스텀 폰트로부터 오는 성능저하를 막을 수 있습니다. 이 작업은 @font-face src규칙에서 `local()` 문을 사용해 수행할 수 있습니다.

```css
@font-face {
  font-family: 'Awesome Font';
  font-style: normal;
  font-weight: 400;
  src: local('Awesome Font'),
    url('example.com/awesome-font.woff2') format('woff2');
}
```

이 @font-face는 사용자가 해당 글꼴을 로컬에 갖고있는지 여부를 판단하고 그렇지 않은 경우 원격으로 다운로드합니다. 즉, font를 갖고있는 사용자는 바로 해당 글꼴을 사용할 수 있으며, font를 갖고 있지 않는 사용자들에게도 다른 불이익 없이 성능향상을 얻을 수 있습니다. 컴퓨터가 일반적으로 갖고있는 폰트를 사용하기 위해서는 [Window11의 글꼴 목록](https://learn.microsoft.com/en-us/typography/fonts/windows_11_font_list)과 [macOS Catalina의 글꼴 목록](https://developer.apple.com/fonts/system-fonts/)을 확인할 수 있습니다.

### 9. 캐싱

캐싱은 특히 방문자가 많은 경우 매우 중요합니다. 캐싱을 사용하면 처음 다운로드한 디스크에서 font를 로드할 수 있습니다. Cach-Control 헤더를 통해 캐싱을 구현할 수 있으며 Cloudflare와 같은 CDN을 사용하면 대시보드에서 간편하게 수행할 수 있습니다. 그렇지 않으면 font응답과 함께 헤더를 보내기만 하면 됩니다.

### 10. 사용자 정의 글꼴을 사용하지 않는다.

이런 말을 할 줄 몰랐을 겁니다. 저는 지금 [font 스텍 시스템](https://systemfontstack.com/)에 대해서 말하고 있습니다. 시스템 font는 기본적으로 제공되고 운영체제와 동일한 글꼴이기 때문에 인터페이스를 더 편하게 만듭니다. 따로 브랜딩이 필요하지 않은 본문 텍스트, 또는 기타 텍스트에 사용하기에 시스템 font를 사용하는 것도 괜찮은 방법입니다. 여러분은 위에 연결되 시스템 글꼴이나 system-ui font family를 통해 시스템 UI font를 구현할 수 있습니다.
