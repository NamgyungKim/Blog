---
date: '2024-01-13'
title: 'devDependencies 와 dependencies의 차이'
categories: ['Node']
summary: 'devDependencies 와 dependencies의 차이와 peerDependencies,peerDependenciesMeta,bundleDependencies,optionalDependencies에 대한 설명'
thumbnail: ''
---

npm에서는 프로젝트가 의존하는 패키지들을 다음과 같은 방식으로 명시해 준다.

```javascript
// package.json
{
	"devDependencies": { 
    "@typescript-eslint/parser": "^6.14.0",
    "eslint": "^8.35.0", 
    "nuxt": "3.3.1",
    "nuxt-quasar-ui": "^1.7.3", 
  },
  "dependencies": { 
    "@quasar/quasar-ui-qcalendar": "4.0.0-beta.15",
    "mdi": "^2.2.43", 
    "vee-validate": "^4.8.3",
    "yup": "^1.0.2"
  }
```

둘의 차의점은 무엇일까?


## devDependencies와 dependencies

흔히 우리가 `npm install <package> --save` 로 설치한 패키지들이 들어간다. npm은 이렇게 설치한 모듈들은 package.json의 **dependencies**에 명시해 준다.

npm에서는 아래와 같이 경고한다.

> **Please do not put test harnesses or transpilers or other "development" time tools in your `dependencies` object.**
>

위 말처럼 배포시에 사용하지 않는 패키지들은 dependencies로 설치하지 않는다. 그럼 개발시에만 사용되는 패키지들은 어떻게 설치할까?

개발시에만 사용되는 패키지들은 **devDependencies**로 설치한다.

설치 방법은 `npm install <package> --save-dev`이다.

<aside>
    <div class="icon">
      💡
    </div>
    <div>

**축약표현**

install은 i로, —save는 -s또는 생략이 가능하다.

`npm install <package> --save`

= `npm i <package>`

`npm install <package> --save-dev`

= `npm i <package> -d`

  </div>
</aside>



## 나누는 이유

이렇게 설치한 패키지들을 나누는 이유는 프로젝트 배포 또는 다른 사용자가 설치 시 실제 운영에 사용되는 패키지만 설치 받을 수 있게 하도록 위해서이다.

`npm i --production` 를 통해서 실제 필요한 패키지만 install 할 수 있다.


## 버전 표기

```javascript
{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999", // 완전 일치
    "bar": ">=1.0.2 <2.1.2", // 해당버전보다 크거나 작아야 한다.
    "baz": ">1.0.2 <=2.3.4", 
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0", // ||는 또는의 표기 이다.
    "asd": "http://asdf.com/asdf.tar.gz", // 종속성으로 해당 URL을 참조
    "til": "~1.2", // >= 1.2.0 , < 1.3.0
    "elf": "^1.2.3", // 1.x 와 같은 의미
    "two": "2.x",
    "thr": "3.3.x", // x로 표기된 상위 버전만 일치. 3.3.0보다 상위 3.4.0보단 아래 버전 
    "lat": "latest",  // 
		"all": "" // * 전체버전
    "dyl": "file:../dyl" // 해당 로컬 경로 참조
  }
}
```

- [더 자세한 정보](https://github.com/npm/node-semver#versions)


## 그 외 (peerDependencies,peerDependenciesMeta,bundleDependencies,optionalDependencies)

npm공식문서를 보다가 다른 dependencies가 있는것을 발견했다.  
간단히 이것들이 뭔지 간단히 적어봤다.

- peerDependencies : 프로젝트를 패키지로 배포 시 특정 하위 패키지에 대해 의존성이 높은 경우

    ```jsx
    // package.json
    {
      "dependencies": {
        "winston": "0.6.2",
        "winston-mail": "0.2.3"
      }
    }
    ```

    ```
    ├── winston@0.6.2
    └─┬ winston-mail@0.2.3
      └── winston@0.5.11
    ```

  이 경우 winston-mail을 사용하면서 오류가 발생할 수 있다.

  이때 winston-mail에서 winston를 peerDependencies로 지정해두었다면,

  yarn의 경우 Warning을 뱉고 설치가되고, npm은 버전에 따라 Warning 메시지를 뱉거나 설치 자체를 막는경우가 있다.

- peerDependenciesMeta : peerDependencies에 사용에 대한 추가 정보를 제공한다.

  ex) 피어 종속성을 선택 사항으로 표시하면 `soy-milk`패키지가 호스트에 설치되지 않은 경우 npm이 경고를 표시하지 않습니다.

    ```javascript
    {
    	"peerDependencies": {
        "tea": "2.x",
        "soy-milk": "1.2"
      },
      "peerDependenciesMeta": {
        "soy-milk": {
          "optional": true
        }
      
    ```

- bundleDependencies : 패키지를 게시할 때 번들되는 페키지 이름의 목록이다. dependencies에서 명시했던 패키지들 이므로 버전 기입은 생략한다.

    ```javascript
    {
      "name": "awesome-web-framework",
      "version": "1.0.0",
      "bundleDependencies": ["renderized", "super-streams"]
    }
    ```

- optionalDependencies : npm을 찾을 수 없거나 설치가 실패할경우 그냥 설치하지 않고 넘긴다.


## 느낀점

지금까지는 패키지를 설치할 때 오류가 나도 —force로 강제 수행 하거나 정확한 원인을 알지 못한채 그냥 버전만 바꾸면서 될때 까지 설치했던 것 같다.  
다음에는 dependencie오류 메시지가 뜬다면 해당 페키지의 peerDependencies를 살펴보고 버전이 맞는지 한 번 살펴보게 될 것 같다.  
(devDependencies와 dependencies의 차이는 원래 알고 있던 대로 였다. 생각보다 새로울건 없었다.;)

## 참고 자료

- [package.json의 dependencies와 devDependencies의 차이점에 대한 정리](https://imkh.dev/dependencies-package-json)
- [npm공식문서](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#dependencies)
- [node 공식문서 Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/)
- [dependencies의 종류와 차이점 (dev, peer)](https://velog.io/@sisofiy626/dependencies%EC%9D%98-%EC%A2%85%EB%A5%98%EC%99%80-%EC%B0%A8%EC%9D%B4%EC%A0%90-dev-peer)