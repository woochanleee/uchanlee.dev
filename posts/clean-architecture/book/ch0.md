---
templateKey: 'blog-post'
title: '[클린 아키텍처] 0장 - Intro'
description: 클린 아키텍처를 읽고 정리하기 전 서론을 작성합니다.
date: 2021-01-05 18:32:00
category: Clean Architecture
thumbnail: ./images/book.jpg
tags:
  - 클린 아키텍처란 무엇일까?
  - 이 책을 다 읽고 나면 웹 프론트엔드에서 클린 아키텍처를 적용할 수 있을까?
  - 끝까지 다 읽자!
---

![2020_retro_thumbnail](./images/book.jpg)

주변 백엔드, 앱 개발자 들이 프로젝트에 클린 아키텍처를 적용하고자 시도하고 노력한다. 이를 옆에서 보며 나 또한 프로젝트에 클린 아키텍처를 적용하고 싶었고 이를 위해 **로버트 C. 마틴 저자**님의 **Clean Architecture** 도서를 읽으며 공부하고 정리할 것이다.

정독을 하는데 얼마나 기간이 걸릴지 장담하진 못하겠지만 약 2개월의 겨울방학 기간(21.01.01 ~ 21.03.01)동안 다 읽을 수 있을거라 생각하고 다 읽은 후엔 내가 생각하는 `React.js` + `Clean Architecture`를 적용한 프로젝트 구조를 만들어본 후, 느낀점을 정리하며 여러 사람들의 의견을 듣는 것이 목표이다.

## Table of Contents

1. [설계와 아키텍처란?](https://uchanlee.dev/clean-architecture/book/ch1/)
2. [두 가지 가치에 대한 이야기](https://uchanlee.dev/clean-architecture/book/ch2/)
3. [패러다임 개요](https://uchanlee.dev/clean-architecture/book/ch3/)
4. [구조적 프로그래밍](https://uchanlee.dev/clean-architecture/book/ch4/)
5. [객체 지향 프로그래밍](https://uchanlee.dev/clean-architecture/book/ch5/)
6. [함수형 프로그래밍](https://uchanlee.dev/clean-architecture/book/ch6/)
7. [SRP: 단일 책임 원칙](https://uchanlee.dev/clean-architecture/book/ch7/)
8. [OCP: 개방 - 쇄 원칙](https://uchanlee.dev/clean-architecture/book/ch8/)
9. [LSP: 리스코프 치환 원칙](https://uchanlee.dev/clean-architecture/book/ch9/)
10. [ISP: 인터페이스 분리 원칙](https://uchanlee.dev/clean-architecture/book/ch10/)
11. [DIP: 의존성 역전 원칙](https://uchanlee.dev/clean-architecture/book/ch11/)
12. [컴포넌트](https://uchanlee.dev/clean-architecture/book/ch12/)
13. [컴포넌트 응집도](https://uchanlee.dev/clean-architecture/book/ch13/)
14. [컴포넌트 결합](https://uchanlee.dev/clean-architecture/book/ch14/)
15. [아키텍처란?](https://uchanlee.dev/clean-architecture/book/ch15/)
16. [독립성](https://uchanlee.dev/clean-architecture/book/ch16/)
17. [경계: 선 긋기](https://uchanlee.dev/clean-architecture/book/ch17/)
18. [경계 해부학](https://uchanlee.dev/clean-architecture/book/ch18/)
19. [정책과 수준](https://uchanlee.dev/clean-architecture/book/ch19/)
20. [업무 규칙](https://uchanlee.dev/clean-architecture/book/ch20/)
21. [소리치는 아키텍처](https://uchanlee.dev/clean-architecture/book/ch21/)
22. [클린 아키텍처](https://uchanlee.dev/clean-architecture/book/ch22/)
23. [프레젠터와 험블 객체](https://uchanlee.dev/clean-architecture/book/ch23/)
24. [부분적 경계](https://uchanlee.dev/clean-architecture/book/ch24/)
25. [계층과 경계](https://uchanlee.dev/clean-architecture/book/ch25/)
26. [메인(Main) 컴포넌트](https://uchanlee.dev/clean-architecture/book/ch26/)
27. ['크고 작은 모든' 서비스들](https://uchanlee.dev/clean-architecture/book/ch27/)
28. [테스트 경계](https://uchanlee.dev/clean-architecture/book/ch28/)
29. [클린 임베디드 아키텍처](https://uchanlee.dev/clean-architecture/book/ch29/)
30. [데이터베이스는 세부사항이다](https://uchanlee.dev/clean-architecture/book/ch30/)
31. [웹은 세부사항이다](https://uchanlee.dev/clean-architecture/book/ch31/)
32. [프레임워크는 세부사항이다](https://uchanlee.dev/clean-architecture/book/ch32/)
33. [사례연구: 비디오 판매](https://uchanlee.dev/clean-architecture/book/ch33/)
34. [빠져 있는 장](https://uchanlee.dev/clean-architecture/book/ch34/)

## References

- 모든 이미지의 출처는 **Clean Architecture 도서**에 있습니다.
