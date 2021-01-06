---
templateKey: 'blog-post'
title: '[클린 아키텍처] 3장 - 패러다임 개요'
description: 프로그래밍 패러다임 3가지에 대한 개요를 설명합니다.
date: 2021-01-06 20:30:00
category: Clean Architecture
thumbnail: ./images/book.jpg
tags:
  - 구조적 프로그래밍
  - 객체 지향 프로그래밍
  - 함수형 프로그래밍
---

![2020_retro_thumbnail](./images/book.jpg)

다음 세 가지 패러다임에 대해 설명한다.

- 구조적 프로그래밍(structured programming)
- 객체 지향 프로그래밍(object-oriented programming)
- 함수형 프로그래밍(functional programming)

## Table of Contents

- [구조적 프로그래밍](#구조적-프로그래밍)
- [객체 지향 프로그래밍](#객체-지향-프로그래밍)
- [함수형 프로그래밍](#함수형-프로그래밍)
- [생각할 거리](#생각할-거리)
- [결론](#결론)

## 구조적 프로그래밍

최초로 적용된 패러다임(최초로 만들어진 패러다임은 아님)으로 1968년 에츠허르 비버 데이크스트라(Edsger Wybe Dijkstra)가 발견했다. 데이크스트라는 무분별한 점프(`goto` 문장)는 **프로그램 구조에 해롭다**는 사실을 제기했으며, 이러한 점프들을 `if/then/else`와 `do/while/until`과 같이 더 익숙한 구조로 대체했다.

구조적 프로그래밍 패러다임을 요약해보면 아래와 같다.

> 구조적 프로그래밍은 제어흐름의 직접적인 전환에 대해 규칙을 부과한다.

## 객체 지향 프로그래밍

두 번째로 도입된 패러다임으로 구조적 1966텬, 올레 요한 달(Ole Johan Dahl)과 크리스텐 니가드(Kristen Nygaard)에 의해 등장했다.

두 프로그래머는 **알골(ALGOL)언어**의 함수 호출 스택 프레임(stack frame)을 힙(heap)으로 옮기면, 함수 호출이 반환된 이후에도 함수에서 선언된 지역 변수가 오랫동안 유지될 수 있음을 발견했다.

이를 이용해 아래처럼 되었다.

- 함수 -> **클래스의 생성자**
- 지역 변수 -> **인스턴스 변수**
- 중첩 함수 -> **메서드**

함수 포인터를 특정 규칙에 따라 사용하는 과정을 통해 필연적으로 **다형성**이 등장하게 되었다.

객체 지향 프로그래밍 패러다임을 요약해보면 아래와 같다.

> 객체 지향 프로그래밍은 제어흐름의 간접적인 전환에 대해 규칙을 부과한다.

## 함수형 프로그래밍

세 번째 패러다임은 최근에서야 겨우 도입되기 시작했지만, 언급한 세 패러다임 중 가장 먼저 만들어졌다.

알론조 처치(Alonzo Church)는 어떤 수학적 문제를 해결하는 과정에서 **람다(lambda) 계산법**을 발명했는데, 함수형 프로그래밍은 여기에서 직접적인 영향을 받아 만들어졌다.

람다 계산법의 기초가 되는 개념은 **불변성(immutability)**으로, 심볼(symbol)의 값이 변경되지 않는다는 개념이다.

함수형 프로그래밍 패러다임을 요약해보면 아래와 같다.

> 함수형 프로그래밍은 할당문에 대해 규칙을 부과한다.

## 생각할 거리

로버트 C. 마틴이 위에서 세 가지 프로그래밍 패러다임을 요약하는 부분에 신중하게 설정한 패턴이 보일 것이다.

**"OO 프로그래밍은 OO에 대해 규칙을 부과한다."**

각 패러다임은 프로그래머로부터 **권한을 박탈**한다. 어느 패러다임도 새로운 권한을 부여하지 않는다. 각 패러다임은 부정적인 의도를 가지는 일종의 추가적인 규칙을 부과한다. 즉, 패러다임은 무엇을 해야 할지를 말하기보단 무엇을 해서는 안 되는지를 말해준다.

세 가지 패러다임은 우리로부터 goto문, 함수 포인터, 할당문을 앗아갔고 더이상 가져갈 수 있는게 없다. 따라서 프로그래밍 패러다임은 앞으로도 딱 세가지밖에 없을 것이다. 이에 뒷받치는 증거로는 세 가지 패러다임이 1958년부터 10년 동안 모두 만들어졌고, 이후로 수십 년이 지났지만, 새롭게 등장한 패러다임은 전혀 없다.

## 결론

- 패러다임의 역사를 보며 우리는 아키텍처와 어떤 관계가 있는가를 알 수 있다.
- 우리는 아키텍처 경계를 넘나들기 위한 메커니즘으로 **다형성**을 이용한다.
- 우리는 함수형 프로그래밍을 이용하여 데이터의 위치와 접근 방법에 대해 규칙을 부과한다.
- 우리는 모듈의 기반 알고리즘으로 구조적 프로그래밍을 사용한다.

**세 가지 패러다임**과 **아키텍처의 세 가지 큰 관심사(함수, 컴포넌트 분리, 데이터 관리)가** 어떻게 서로 **연관**되는지에 주목하자.

## References

- 모든 이미지의 출처는 **Clean Architecture 도서**에 있습니다.